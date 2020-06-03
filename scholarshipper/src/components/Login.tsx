import React from 'react';
import axios from 'axios'


const Login: React.FC = () => {
  
  const handleRequest = () => {
    axios.get('/test', {})
    .then(res => 
      console.log(res.data)
    )
  }
  
  return(
    <div id="mainDiv">
      <button onClick={handleRequest}>
        Don't Touch Me
      </button>
    </div>
  )
}

export default Login