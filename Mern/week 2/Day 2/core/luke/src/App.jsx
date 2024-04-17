import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import CharacterDetails from './components/CharacterDetails';
import PlanetDetails from './components/PlanetDetails';
import Home from './components/Home';
import './styles/styles.css';

const API_BASE_URL = 'https://swapi.dev/api/';


const App = () => {
  const [resource, setResource] = useState('people');
  const [id, setId] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [planets,setPlanets]=useState({})



// useEffect(()=>{
//   axios('https://swapi.dev/api/planets').then(res=>{setPlanets(res.data.results)}).catch(err=>console.log('you have an error ',err))
// },[])

  const fetchData = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}${resource}/${id}`);
      setData(response.data);
      setError(null);
    } catch (err) {
      setData(null);
      setError("These aren't the droids you're looking for");
    }
  };

  useEffect(() => {
    if (id) {
      fetchData();
    }
  }, [id]);

  return (
    <div className='center-content'>
      <nav>
        <ul className='center-nav'>
          <li><Link style={{textDecoration: 'none'}} to="/">Home</Link></li>
          <li><Link style={{textDecoration: 'none'}} to={`/characters/${id}`}>Characters</Link></li>
          <li><Link style={{textDecoration: 'none'}} to={`/planets/${id}`}>Planets</Link></li>
        </ul>
      </nav>
      <div>
        <fieldset>
        <legend>Inputs</legend>
        <label>
          Search For:&nbsp;
          <select value={resource} onChange={(e) => setResource(e.target.value)}>
            <option value="people">People</option>
            <option value="planets">Planets</option>
          </select>
        </label>&nbsp;&nbsp;
        <label>
          ID:&nbsp;
          <input type="number" value={id} onChange={(e) => setId(e.target.value)} />
        </label>&nbsp;
        <button onClick={fetchData}>Submit</button>
        </fieldset>
      </div>
      <fieldset>
        <legend>Output</legend>
      {error && <div>{error}</div>}
      <Routes>
        <Route path="/characters/:id" element={<CharacterDetails data={data} planets={planets}/>} />
        <Route path="/planets/:id" element={<PlanetDetails data={data} />} />
        <Route path="/" element={<Home />} />
      </Routes>
      </fieldset>
    </div>
  );
};

export default App;