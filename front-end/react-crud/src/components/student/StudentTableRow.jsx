import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import FirebaseStudentService from '../../service/student/FirebaseStudentService';

export const StudentTableRow = (props) => {
  const { _id, name, course, ira } = props.student;

  function deleteStudent() {
    if (window.confirm(`Deseja excluir o: ${name}?`)) {
      FirebaseStudentService.delete(
        props.firebase,
        (ok) => {
          if (ok) console.log('ok!');
        },
        _id
      );
    }
  }

  return (
    <tr>
      <td>{name}</td>
      <td>{course}</td>
      <td>{ira}</td>
      <td style={{ textAlign: 'center' }}>
        <Link to={`/editStudent/${_id}`}>
          <Button variant="primary">Editar</Button>
        </Link>
      </td>
      <td style={{ textAlign: 'center' }}>
        <button className="btn btn-danger" onClick={() => deleteStudent()}>
          Excluir
        </button>
      </td>
    </tr>
  );
};
