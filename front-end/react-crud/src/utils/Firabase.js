import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

export default class Firebase {
  constructor() {
    this.app = initializeApp({
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: process.env.PROJECT_ID,
    });
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
