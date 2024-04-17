import React, { useState } from 'react';

const Colorform = () => {
    const [color, setColor] = useState('');
    const [boxes, setBoxes] = useState([]);

    const handleColorChange = (e) => {
        setColor(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setBoxes([...boxes, color]);
        setColor('');
    };

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <label>Color: </label>
                <input type="text" value={color} onChange={handleColorChange} />
                <button type="submit">Add Box</button>
            </form>

            <div className="box-container">
                {boxes.map((boxColor, index) => (
                    <div
                        key={index}
                        className="color-box"
                        style={{ backgroundColor: boxColor }}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Colorform;
