
import * as React from 'react';
import './App.scss';
import Plata from './Plata';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';

import useToken from './hooks/useToken';
import useRole from './hooks/useRole';
import useName from './hooks/useName';





function App() {
  const { token, setToken } = useToken();
  const { name, setName} = useName();
  const { role, setRole} = useRole();
  


  return (
    <div className="App">
      <Navbar token={token} setRole={setRole} role={role} name={name} />
      <div className="content">
      <Routes>
        <Route exact path="/" element = {<Home />}/>
        <Route path="/plata" element = {<Plata setToken={setToken} token={token}  setName={setName} setRole={setRole}/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;