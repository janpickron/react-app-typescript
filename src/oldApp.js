
import './App.css';
import { useEffect, useState } from "react";
import "./styles.css";


export default function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    const userLS = localStorage.getItem('User')

    if (userLS) {
      setLoggedIn(true)
    }
  }, [])


  return 


}