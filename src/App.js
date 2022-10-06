import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        response.json().then((dataitem) => {

          setData(dataitem)
        })
      })
  }, [])
  console.log(data, 'data...')

  return (
    <div className="App">
      <h1>GET API CALL USING FETCH METHOD</h1>
      <table border="1">
        <thead>
          <tr>
            <td>ID:</td>
            <td>Name:</td>
            <td>Username</td>
            <td>Email:</td>
          </tr>
        </thead>
        {
          data.map((item) =>
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>

            </tr>
          )
        }
      </table>
    </div>
  );
}

export default App;
