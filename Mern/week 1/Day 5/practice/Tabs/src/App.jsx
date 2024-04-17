import React from 'react';
import Tabs from './components/Tabs';
import './styles/styles.css';

const App = () => {
  const tabsData = [
    { label: 'Tab 1', content: 'Tab 1 content is showing here' },
    { label: 'Tab 2', content: 'Tab 2 content is showing here' },
    { label: 'Tab 3', content: 'Tab 3 content is showing here' },
  ];

  return (
    <div className="app-container" style={{display:'flex',justifyContent:'center',alignItems:'center',position:'relative', left:'300%',flexDirection:'column'}}>
      <h1>Tabs</h1>
      <Tabs items={tabsData} />
    </div>
  );
};

export default App;