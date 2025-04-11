import { useState } from 'react';
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
      <div className="container">

        <button onClick={fetchActresses}>Carica Attrici</button>


        {actresses.map((actress) => (
          <div className="card">
            <img className='card-img-top' src={actress.image} alt={actress.name}></img>
            <div className="card-body">
              <h5 className='card-title'>{actress.name}</h5>
              <p className='card-text'><strong>Birth year: </strong>{actress.birth_year}</p>
              <p className='card-text'><strong>Nationality: </strong>{actress.nationality}</p>
              <p className='card-text'><strong>Biography: </strong>{actress.biography}</p>
              <p className='card-text'><strong>Awards: </strong> {actress.awards}</p>
            </div>
          </div>
        ))}

      </div>

    </>
  )
}

export default App
