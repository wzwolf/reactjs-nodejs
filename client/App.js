import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('/api')
      .then(res => setMessage(res.data.message))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>Hello from React!</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;

