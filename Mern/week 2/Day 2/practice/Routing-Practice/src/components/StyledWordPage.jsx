import React from 'react';
import { useParams } from 'react-router-dom';

const StyledWordPage = () => {
    const { word, textColor, bgColor } = useParams();
    const style = {
        color: textColor || 'black',
        backgroundColor: bgColor || 'white',
    };
    return <div style={style} className="center-content">{isNaN(Number(word)) ? word : 'Invalid Word'}</div>;
};

export default StyledWordPage;