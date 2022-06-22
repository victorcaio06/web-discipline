import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { key } from '../firebaseConfig/FirebaseKey';

export default class Firebase {
  constructor() {
    this.app = initializeApp({key});
    this.user = null;
  }

  getFirestoreDb() {
    return getFirestore(this.app);
  }

  getAuthentication() {
    return getAuth(this.app);
  }

  setUser(user) {
    this.user = user;
  }

  getUser() {
    return this.user;
  }
}
