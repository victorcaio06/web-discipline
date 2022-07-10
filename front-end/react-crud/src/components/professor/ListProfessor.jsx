import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ProfessorTableRow } from './ProfessorTableRow';
import FirebaseContext from '../../utils/FirebaseContext';
import FirebaseProfessorService from '../../service/professor/FirebaseProfessorService';

export const ListProfessorPage = () => {
  return (
    <FirebaseContext.Consumer>
      {(firebase) => {
        return <ListProfessor firebase={firebase} />;
      }}
    </FirebaseContext.Consumer>
  );
};

const ListProfessor = (props) => {
  const [professors, setProfessors] = useState([]);

  useEffect(() => {
    FirebaseProfessorService.list(
      props.firebase.getFirestoreDb(),
      (professors) => {
        setProfessors(professors);
      }
    );
  }, [props.firebase]);

  const deleteProfessorById = (_id) => {
    let professorsTemp = professors;
    for (let i = 0; i < professors.length; i++)
      if (professorsTemp[i]._id === _id) professorsTemp.splice(i, 1);
    setProfessors([...professorsTemp]);
  };

  const generateTable = () => {
    if (!professors) return;
    return professors.map((professor, i) => {
      return (
        <ProfessorTableRow
          professor={professor}
          key={i}
          deleteProfessorById={deleteProfessorById}
        />
      );
    });
  };

  return (
    <div className="container">
      <main>
        <h2>Listas dos Professores</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              {/* <th>ID</th> */}
              <th>Nome</th>
              <th>Universidade</th>
              <th>Grau de escolaridade</th>
              <th colSpan={2} style={{ textAlign: 'center' }}></th>
            </tr>
          </thead>
          <tbody>{generateTable()}</tbody>
        </Table>
        <div style={{ textAlign: 'center' }}>
          <Link to={'/createProfessor'}>
            <Button>Adicionar Professor</Button>
          </Link>
        </div>
      </main>
    </div>
  );
};
