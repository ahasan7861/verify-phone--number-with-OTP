import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import PhoneVerify from './PhoneVerify/PhoneVerify';
import firebase from 'firebase/compat/app';
import { getAuth, onAuthStateChanged,  } from "firebase/auth";


function App() {
  

  const firebaseConfig = {
    apiKey: "AIzaSyAnJqS5UIuY_765KLnS4UKw23B5BqOyFAk",
    authDomain: "verify-otp-81f60.firebaseapp.com",
    projectId: "verify-otp-81f60",
    storageBucket: "verify-otp-81f60.appspot.com",
    messagingSenderId: "794663719650",
    appId: "1:794663719650:web:eeb430d13f684f3930c4bb"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const [user, setUser] = useState(null);

  useEffect(()=>{
    const unSubscriber = onAuthStateChanged(firebase.auth(), (currentUser) => {
      console.log(currentUser);
      setUser(currentUser)
    })
    return () => unSubscriber();
  }, [])


  return (
    <div className="App">
      <h1>Verify Phone Number With OTP</h1>
      <PhoneVerify auth={firebase.auth()}></PhoneVerify>
    </div>
  )
}

export default App
