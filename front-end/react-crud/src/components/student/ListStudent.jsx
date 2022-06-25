import { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Navigation } from '../Navigation';
import { StudentTableRow } from './StudentTableRow';
import FirebaseContext from '../../utils/FirebaseContext';
import FirebaseStudentService from '../../service/student/FirebaseStudentService';
import Firebase from '../../utils/Firabase';

const ListStudentPage = () => {
  return (
    <FirebaseContext.Consumer>
      {(firebase) => {
        return <ListStudent firebase={firebase} />;
      }}
    </FirebaseContext.Consumer>
  );
};

const ListStudent = (props) => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    FirebaseStudentService.list(props.firebase.getFirestoreDb(), (students) => {
      setStudents(students);
    });
  }, [props.firebase]);

  function deleteStudentById(_id) {
    let studentsTemp = students;
    for (let i = 0; i < studentsTemp.length; i++) {
      if (studentsTemp[i]._id === _id) {
        studentsTemp.splice(i, 1);
      }
    }
    setStudents([...studentsTemp]); //deve-se criar um outro array para disparar o re-render
  }

  function generateTable() {
    if (!students) return;
    return students.map((student, i) => {
      return (
        <StudentTableRow
          student={student}
          key={i}
          deleteStudentById={deleteStudentById}
          firestore={props.firebase.getFirestoreDb()}
        />
      );
    });
  }
  return (
    <div className="container">
      <main style={{ marginTop: '10px' }}>
        <h2>Lista dos Estudantes</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              {/* <th>ID</th> */}
              <th>Nome</th>
              <th>Curso</th>
              <th>IRA</th>
              <th colSpan={2} style={{ textAlign: 'center' }}></th>
            </tr>
          </thead>
          <tbody>{generateTable()}</tbody>
        </Table>
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <Link to={'/createStudent'}>
            <Button>Adicionar Estudante</Button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default ListStudentPage;
