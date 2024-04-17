import React from 'react';
import { useParams } from 'react-router-dom';


const WordPage = () => {
    const { word } = useParams();
    return <div className="center-content">{isNaN(Number(word)) ? word : 'Invalid Word'}</div>;
};

export default WordPage;