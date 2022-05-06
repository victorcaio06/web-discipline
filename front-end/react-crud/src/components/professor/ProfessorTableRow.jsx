import axios from 'axios';
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const ProfessorTableRow = (props) => {
  const { _id, name, university, degree } = props.professor;
  const deleteProfessor = () => {
    if (window.confirm(`Deseja excluir o elemento de ID: ${_id}?`)) {
      axios
        .delete(`http://localhost:3002/professor/crud/delete/${_id}`)
        .then((res) => {
          props.deleteProfessorById(_id);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <tr>
      <td>{_id}</td>
      <td>{name}</td>
      <td>{university}</td>
      <td>{degree}</td>
      <td style={{ textAlign: 'center' }}>
        <Link to={`/editProfessor/${_id}`}>
          <Button variant="primary">Editar</Button>
        </Link>
      </td>
      <td style={{ textAlign: 'center' }}>
        <button
          className="btn btn-danger"
          onClick={() => {
            deleteProfessor();
          }}
        >
          Apagar
        </button>
      </td>
    </tr>
  );
};
