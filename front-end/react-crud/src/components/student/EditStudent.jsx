import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

export const EditStudent = (props) => {
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [ira, setIra] = useState(0);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3002/crud/students/retrieve/${params.id}`)
      .then((res) => {
        setName(res.data.name);
        setCourse(res.data.course);
        setIra(res.data.ira);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedStudent = {
      name,
      course,
      ira,
    };
    //axios.put('http://localhost:3001/students/' + params.id, updatedStudent)
    axios
      .put(
        'http://localhost:3002/crud/students/update/' + params.id,
        updatedStudent
      )
      .then((res) => {
        //console.log(res.data)
        //props.history.push('/listStudent');
        //console.log(props)
        navigate('/listStudent');
      })
      .catch((err) => console.log(err));
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
          <Button type="submit" variant="primary">Atualizar</Button>
        </Form.Group>
      </Form>
    </div>
  );
};
