// CharacterDetails.jsx
import React, { useEffect, useState  } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const CharacterDetails = ({ data}) => {

    const [planet,setPlanet]=useState("")


    const hundleget=(data)=>{
        console.log("data=",data)
        axios(data).then(res=>{setPlanet(res.data.name);console.log("aaaaaaaaaaaaaaa",res.data.name);this.setState({loading:0});}).catch(err=>err)
        
    }

    console.log("**************",planet)
    return (
        <div className='center-content'>
            <h2>Character Details</h2>
            {data && (
                <div>
                    {hundleget(data.homeworld)}
                    <p>Name: {data.name}</p>
                    <p>Height: {data.height}</p>
                    <p>Mass: {data.mass}</p>
                    <p>Gender: {data.gender}</p>
                    {console.log("dataaaaaaaaaaa=",data)}{console.log("homtown=",data.homeworld)}
                    <p>Hometown:  {planet}</p>

                    {data.homeworld && (
                        <p>
                            Homeworld: <Link to={`/planets/${extractIdFromUrl(data.homeworld)}`}>Homeworld</Link>
                        </p>
                    )}
                </div>
            )}
        </div>
    );
};

const extractIdFromUrl = (url) => {
    const parts = url.split('/');
    return parts[parts.length - 2];
};

export default CharacterDetails;