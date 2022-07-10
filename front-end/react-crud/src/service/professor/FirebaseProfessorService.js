import {
  getDocs,
  collection,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  getDoc,
  query,
  orderBy,
  onSnapshot,
} from 'firebase/firestore';

export default class FirebaseProfessorService {
  static list = (firestore, callback) => {
    getDocs(collection(firestore, 'professor'))
      .then((querySnapshot) => {
        let professors = [];
        querySnapshot.forEach((professor) => {
          professors.push({
            _id: professor.id,
            name: professor.data().name,
            university: professor.data().university,
            degree: professor.data().degree,
          });
        });
        callback(professors);
      })
      .catch((error) => console.log(error));
  };

  static list_onSnapshot = (firestore, callback) => {
    const coll = collection(firestore, 'professor');
    const queryProfessor = query(coll, orderBy('name'));
    onSnapshot(queryProfessor, (querySnapshot) => {
      let professors = [];
      querySnapshot.forEach((document) => {
        professors.push({
          _id: document.id,
          name: document.data().name,
          course: document.data().course,
          ira: document.data().ira,
        });
      });
      callback(professors);
    });
  };

  static create = (firestore, callback, professor) => {
    const coll = collection(firestore, 'professor');
    addDoc(coll, professor)
      .then((document) => {
        console.log('Professor criado: ' + document.id);
        callback();
      })
      .catch((error) => console.log(error));
  };

  static delete = (firestore, callback, id) => {
    const docRef = doc(firestore, 'professors', id);
    deleteDoc(docRef)
      .then((doc) => callback())
      .catch((error) => console.log(error));
  };

  static update = (firestore, callback, id, professor) => {
    const docRef = doc(firestore, 'professors', id);
    updateDoc(docRef, professor)
      .then((doc) => callback(true))
      .catch((error) => console.log(error));
  };

  static retrieve = (firestore, callback, id) => {
    const docRef = doc(firestore, 'professors', id);
    getDoc(docRef)
      .then((docSnap) => {
        if (docSnap.exists()) callback(docSnap.data());
      })
      .catch((error) => console.log(error));
  };
}
