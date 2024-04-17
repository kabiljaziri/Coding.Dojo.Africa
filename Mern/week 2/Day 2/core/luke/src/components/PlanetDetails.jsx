// PlanetDetails.jsx
import React from 'react';


const PlanetDetails = ({ data }) => {
    return (
        <div className='center-content'>
            <h2>Planet Details</h2>
            {data && (
                <div>
                    <p>Name: {data.name}</p>
                    <p>Climate: {data.climate}</p>
                    <p>Population: {data.population}</p>
                    <p>Gravity: {data.gravity}</p>
                </div>
            )}
        </div>
    );
};

export default PlanetDetails;
