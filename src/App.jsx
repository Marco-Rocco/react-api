import { useEffect, useState } from 'react';
import axios from 'axios';

const endpoint = `https://www.freetestapi.com/api/v1/actresses`;

function App() {

  const [actresses, setActresses] = useState([]);

  function fetchActresses() {
    axios.get(endpoint)
      .then((response) => setActresses(response.data));
  }

  console.log(actresses)

  return (

    <>
      <div className="contain">

        <button onClick={fetchActresses}>Carica Attrici</button>

        <ul>
          {actresses.map((actress) => (
            <li key={actress.id}>{actress.name}</li>
          ))}
        </ul>
      </div>

    </>
  )
}

export default App
