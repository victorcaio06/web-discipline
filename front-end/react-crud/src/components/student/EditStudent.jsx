import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import FirebaseStudentService from '../../service/student/FirebaseStudentService';
import FirebaseContext from '../../utils/FirebaseContext';

const EditStudentPage = () => {
  return (
    <FirebaseContext.Consumer>
      {(firebase) => {
        return <EditStudent firebase={firebase} />;
      }}
    </FirebaseContext.Consumer>
  );
};

const EditStudent = (props) => {
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [ira, setIra] = useState(0);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    FirebaseStudentService.retrieve(
      props.firebase.getFirestoreDb(),
      (student) => {
        setName(student.name);
        setCourse(student.course);
        setIra(student.ira);
      },
      params.id
    );
  }, [params.id, props.firabse]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedStudent = {
      name,
      course,
      ira,
    };

    FirebaseStudentService.update(
      props.firebase.getFirestoreDb(),
      () => {
        navigate('/listStudent');
      },
      params.id,
      updatedStudent
    );
  };

  return (
    <div className="container">
      <Form onSubmit={handleSubmit}>
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
              setIra(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Group>
          <Button type="submit" variant="primary">
            Atualizar
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default EditStudentPage;
