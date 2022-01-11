import './App.css';
import React from 'react';
import login from './components/Login'

function App() {
  return (
    <div className="App">
      
      <h1> Login < /h1>
      <h2>you are showing</h2>
      <login />
      <form>
  <label>
  <img>
  </img>

    <input type="text" name="name" />
  </label> 
  <input type="text" name="Submit" />
  <h3>forgot Password</h3>
  <button>
    Login
  </button>
</form>

    </div>
  );
}

export default App;
