import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Navigation } from '../Navigation';
import { Button, Form } from 'react-bootstrap';

export const EditProfessor = () => {
  const [name, setName] = useState('');
  const [university, setUniversity] = useState('');
  const [degree, setDegree] = useState('');
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3002/professor/crud/retrieve/${params.id}`)
      .then((res) => {
        setName(res.data.name);
        setUniversity(res.data.university);
        setDegree(res.data.degree);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updateProfessor = {
      name,
      university,
      degree,
    };
    axios
      .put(
        'http://localhost:3002/professor/crud/update/' + params.id,
        updateProfessor
      )
      .then((res) => {
        navigate('/listProfessor');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container">
      <Navigation />
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formNameProfessor">
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
        <Form.Group className="mb-3" controlId="formUniversityProfessor">
          <Form.Label>Universidade</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite o nome da Universidade"
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
            placeHolder="Digite o grau de escolariade"
            value={degree ?? ''}
            onChange={(event) => {
              setDegree(event.target.value);
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
