import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import FirebaseContext from '../../utils/FirebaseContext.js';
import FirebaseStudentService from '../../service/student/FirebaseStudentService.js'

export const CreateStudentPage = () => {
  return (
    <FirebaseContext.Consumer>
      {(firebase) => <CreateStudent firebase={firebase} />}
    </FirebaseContext.Consumer>
  );
};

const CreateStudent = (props) => {
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [ira, setIRA] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newStudent = { name, course, ira };
    FirebaseStudentService.create(
      props.firebase.getFirestoreDb(),
      (_id) => {
        alert(`Aluno ${name} criado com sucesso!!`);
        navigate('/listStudent');
      },
      newStudent
    );
  };

  return (
    <div className="container">
      <Form onSubmit={handleSubmit} style={{ marginTop: '10px' }}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite o nome"
            value={name == null || name === undefined ? '' : name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCourse">
          <Form.Label>Curso</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite o curso"
            value={course ?? ''}
            onChange={(event) => {
              setCourse(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formIra">
          <Form.Label>IRA</Form.Label>
          <Form.Control
            type="number"
            placeholder="Digite o IRA"
            value={ira ?? 0}
            onChange={(event) => {
              setIRA(event.target.value);
            }}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Adicionar
        </Button>
      </Form>
    </div>
  );
};
