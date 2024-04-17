import React from 'react';
import { useParams } from 'react-router-dom';

const CombinedPage = () => {
    const { param } = useParams();

    return (
        <div className="center-content">
            {isNaN(Number(param)) ? (
                <div>Word: {param}</div>
            ) : (
                <div>Number: {param}</div>
            )}
        </div>
    );
};

export default CombinedPage;