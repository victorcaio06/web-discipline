import React, { useState, useEffect } from 'react';
import { Navigation } from '../Navigation';
import axios from 'axios';
import { StudentTableRow } from './StudentTableRow';
import { Table } from 'react-bootstrap';

export const ListStudent = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3002/crud/students/list')
      .then((res) => {
        setStudents(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function deleteStudentById(_id) {
    let studentsTemp = students;
    for (let i = 0; i < studentsTemp.length; i++) {
      if (studentsTemp[i]._id === _id) {
        //console.log("1")
        studentsTemp.splice(i, 1);
      }
    }
    setStudents([...studentsTemp]); //deve-se criar um outro array para disparar o re-render
    //setFlag(!flag)
  }

  function generateTable() {
    if (!students) return;
    return students.map((student, i) => {
      return (
        <StudentTableRow
          student={student}
          key={i}
          deleteStudentById={deleteStudentById}
        />
      );
    });
  }
  return (
    <div className="container">
      <Navigation />
      <main>
        <h2>Listar Estudantes</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Curso</th>
              <th>IRA</th>
              <th colSpan={2} style={{ textAlign: 'center' }}></th>
            </tr>
          </thead>
          <tbody>{generateTable()}</tbody>
        </Table>
      </main>
    </div>
  );
};