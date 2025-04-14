import { useEffect, useState } from 'react';
import axios from 'axios';

const endpointFemale = `https://www.freetestapi.com/api/v1/actresses`;
const endpointMale = `https://www.freetestapi.com/api/v1/actors`;





function App() {

  const [actresses, setActresses] = useState([]);
  const [actors, setActors] = useState([]);

  function fetchActresses() {
    axios.get(endpointFemale)
      .then((response) => setActresses(response.data));
    setActors([])
  }

  function fetchActors() {
    axios.get(endpointMale)
      .then((response) => setActors(response.data));
    setActresses([])
  }
  console.log(actresses)
  console.log(actors)

  return (

    <>
      <div className="container">

        <button onClick={fetchActresses}>Carica Attrici</button>
        <button onClick={fetchActors}>Carica Attori</button>


        {actresses.map((actress) => (
          <div key={actress.id} className="card">
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


        {actors.map((actor) => (
          <div key={actor.id} className="card">
            <img className='card-img-top' src={actor.image} alt={actor.name}></img>
            <div className="card-body">
              <h5 className='card-title'>{actor.name}</h5>
              <p className='card-text'><strong>Birth year: </strong>{actor.birth_year}</p>
              <p className='card-text'><strong>Nationality: </strong>{actor.nationality}</p>
              <p className='card-text'><strong>Biography: </strong>{actor.biography}</p>
              <p className='card-text'><strong>Awards: </strong> {actor.awards}</p>
            </div>
          </div>
        ))}



      </div>

    </>
  )
}

export default App
