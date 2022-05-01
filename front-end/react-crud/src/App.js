import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { About } from './components/About';
import { Home } from './components/Home';
import { CreateProfessor } from './components/professor/CreateProfessor';
import { EditProfessor } from './components/professor/EditProfessor';
import { ListProfessor } from './components/professor/ListProfessor';
import { CreateStudent } from './components/student/CreateStudent';
import { EditStudent } from './components/student/EditStudent';
import { ListStudent } from './components/student/ListStudent';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/About" element={<About/>}/>
          <Route path="createStudent" element={<CreateStudent />} />
          <Route path="listStudent" element={<ListStudent />} />
          <Route path="editStudent/:id" element={<EditStudent />} />
          <Route path="createProfessor" element={<CreateProfessor />} />
          <Route path="listProfessor" element={<ListProfessor />} />
          <Route path="editProfessor/:id" element={<EditProfessor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
