import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';

//TODO CHECK IF USER IS LOGGED IN
(async () => {
  try {
    const res = await axios.get('http://localhost:5000/api/users/islogged', {
      withCredentials: true,
    });
    console.log(res.data.user);
  } catch (error) {
    console.log('no estas logged in okay');
  }
})();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
