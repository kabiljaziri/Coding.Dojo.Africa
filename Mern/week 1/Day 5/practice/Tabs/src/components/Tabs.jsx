import React, { useState } from 'react';

const Tabs = ({ items }) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div>
            <div>
                {items.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => handleTabClick(index)}
                        style={{ marginRight: '10px', fontWeight: index === activeTab ? 'bold' : 'normal', backgroundColor: index === activeTab ? '#f2q3c0' : 'normal' }}
                    >
                        {item.label}
                    </button>
                ))}
            </div>
            <fieldset style={{ marginTop: '10%', alignItems: 'center', justifyContent: 'center' }}>
                {items[activeTab].content}
            </fieldset>
        </div>
    );
};

export default Tabs;