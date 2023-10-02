import React, { useState, useEffect } from "react";
import "./App.css";
import OneChild from "./components/OneChild";
import MyForm from "./components/MyForm";
// Assuming you moved the CSS file to src/css/bootstrap.min.css


interface IFamily {
  relation: string;
  name: string;
  pets: string[];
}
export interface IPerson {
  name: string;
  age: number;
  cool: boolean;
  employed: boolean;
  family: IFamily[]; // more readable
  // family: { relation: string; name: string; pets: string[] }[]; // long way
}

function App() {
  const [data, setData] = useState<IPerson>();

  useEffect(() => {
    fetch("http://localhost:4000/")
      .then((response) => response.json())
      .then((serverData) => setData(serverData))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>MyForm Component begins at App</h1>
        <MyForm />
        <h2>OneChild component with data from App</h2>
        {data ? <OneChild parentData={data} /> : null}
        {/* <OneChild data={data} /> */}
        <h3>Just data display from App</h3>
        {/* checking if data has information then display the data.name */}
        <h1>{data ? data.name : null}</h1>
        {/* false, null, undefined then do not show anything */}
        <h4>another just data display from App</h4>
        <h1>{data && data.name}</h1>
      </header>
    </div>
  );
}
export default App;
