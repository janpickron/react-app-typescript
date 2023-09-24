import React, { useState, useEffect} from 'react'
import './App.css';

function App() {
    const [message, setMessage] = useState('')

    useEffect(()  => {
        fetch('/')
        .then ((response) => response.json())
        .then ((data) => setMessage(data.message))
        .catch ((error) => console.error(error));
    }, []);

    return (
        <div className="App">
        <header className="App-header">
        <h1>{message}</h1>
        </header>
        </div>
    )
}
export default App;