import React, { useEffect, useState } from 'react';
import axios from 'axios';
// importing MyRouts where we located all of our theme
import MyRouts from './routers/routes';

function App() {
  const [getMessage, setGetMessage] = useState({})

  useEffect(()=>{
    axios.get('http://localhost:5000/api/upload').then(response => {
      console.log("SUCCESS", response)
      setGetMessage(response)
    }).catch(error => {
      console.log(error)
    })

  }, [])
  return (
    <div>
      <MyRouts />
    </div>
  );
}

export default App;
