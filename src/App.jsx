import React, { useState } from 'react';

import Charts from './components/Charts';
import Navbar from './components/Navbar';
import { data } from './data.js';
import { useDarkMode } from './hooks/useDarkMode.jsx';

const App = () => {
  const [coinData, setCoinData] = useState(data);
  const [geceModu, setGeceModu] = useDarkMode(false);

  const durum = geceModu ? 'dark-mode' : '';

  return (
    <div className={`App ${durum}`}>
      <Navbar geceModu={geceModu} setGeceModu={setGeceModu} />
      <Charts coinData={coinData} />
    </div>
  );
};

export default App;
