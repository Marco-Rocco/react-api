import { useState } from 'react';
import axios from 'axios';

const endpoint = `https://www.freetestapi.com/api/v1/actresses`;

function App() {

  const [actresses, setActresses] = useState([]);

  function fetchActresses() {
    axios.get(endpoint)
      .then((response) => setActresses(response.data))
  }



  return (

    <>
      <div className="contain">

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
