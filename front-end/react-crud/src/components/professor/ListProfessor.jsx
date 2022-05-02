import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navigation } from '../Navigation';

export const ListProfessor = () => {
  const [professors, setProfessors] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3002/crud/professors/list')
      .then((res) => {
        setProfessors(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteProfessorById = (_id) => {
    let professorsTemp = professors;
    for(let i = 0; i < professors.length; i++) 
      if(professorsTemp[i]._id === _id)
        professorsTemp.splice(i, 1);
    setProfessors([...professorsTemp])
  }

  const generateTable = () => {
    if(!professors) return;
    return professors.map((professor, i) => {
      return (
        <ProfessorTableRow
      )
    })
  }

  return (
    <div className="container">
      <Navigation />
    </div>
  );
};
