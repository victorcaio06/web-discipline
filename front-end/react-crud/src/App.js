import React from 'react';
import FirebaseContext from './utils/FirebaseContext';
import { Home } from './components/Home';
import { About } from './components/About';
import { Navigation } from './components/Navigation';
import { Route, Routes } from 'react-router-dom';
import { CreateStudentPage } from './components/student/CreateStudent';
import { CreateProfessorPage } from './components/professor/CreateProfessor';
import { EditProfessor } from './components/professor/EditProfessor';
import { ListProfessorPage } from './components/professor/ListProfessor';
import EditStudent from './components/student/EditStudent';
import ListStudent from './components/student/ListStudent';

const AppPage = () => {
  return (
    <FirebaseContext.Consumer>
      {(firebase) => {
        return <App firebase={firebase} />;
      }}
    </FirebaseContext.Consumer>
  );
};
function App() {
  return (
    <div>
      <div id="container-navigation">
        <Navigation />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="createStudent" element={<CreateStudentPage />} />
        <Route path="listStudent" element={<ListStudent />} />
        <Route path="editStudent/:id" element={<EditStudent />} />
        <Route path="createProfessor" element={<CreateProfessorPage />} />
        <Route path="listProfessor" element={<ListProfessorPage />} />
        <Route path="editProfessor/:id" element={<EditProfessor />} />
      </Routes>
    </div>
  );
}

export default AppPage;
