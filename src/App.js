
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const { text } = await( await fetch(`/api/testapi`)).json();
      setData(text);
    })();
  });

  return <div>
    <h4>Test App with integrated api: {data}</h4>
    
    </div>;
}

export default App;
