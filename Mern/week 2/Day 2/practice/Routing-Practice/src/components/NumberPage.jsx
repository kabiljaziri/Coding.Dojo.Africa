import React from 'react';
import { useParams } from 'react-router-dom';


const NumberPage = () => {
    const { number } = useParams();
    return <div className="center-content">{isNaN(Number(number)) ? 'Invalid Number' : number}</div>;
};

export default NumberPage;