
import './App.css'
import { Login } from './components/login'
import { collection, doc, getDoc } from "firebase/firestore";

import { db } from './firebase';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const docRef = doc(db, "users", "ksreenvascse@gmail.com");
    getDoc(docRef)
      .then((querySnapshot) => {
        const newData = querySnapshot.data();
        console.log("todos---", newData);
      })
  }, [])
  return (
    <div >
      <Login />
    </div>
  )
}

export default App
