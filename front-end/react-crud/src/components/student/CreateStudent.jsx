import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Navigation } from '../Navigation';

export const CreateStudent = () => {
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [ira, setIRA] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newStudent = { name, course, ira };
    axios
      .post('http://localhost:3002/crud/students/register', newStudent)
      .then((res) => {
        alert(`Aluno ${name} criado com sucesso.`);
        navigate('/listStudent');
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="container">
      <Navigation />
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
