import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Navigation } from '../Navigation';

export const CreateProfessor = () => {
  const [name, setName] = useState('');
  const [university, setUniversity] = useState('');
  const [degree, setDegree] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProfessor = { name, university, degree };
    axios
      .post('http://localhost:3002/professor/crud/create', newProfessor)
      .then((res) => {
        alert(`Professor ${name} adicionado com sucesso!!`);
        navigate('/listProfessor');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <Navigation />
      <Form onSubmit={handleSubmit} style={{ marginTop: '10px' }}>
        <Form.Group className="mb-3" controlId="formNameProfessor">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nome"
            value={name == null || name === undefined ? '' : name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formUniversityProfessor">
          <Form.Label>Universidade</Form.Label>
          <Form.Control
            type="text"
            placeholder="Universidade"
            value={university ?? ''}
            onChange={(event) => {
              setUniversity(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDegreeProfessor">
          <Form.Label>Grau de escolaridade</Form.Label>
          <Form.Control
            type="text"
            placeholder="Grau de escolaridade"
            value={degree ?? ''}
            onChange={(event) => {
              setDegree(event.target.value);
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
