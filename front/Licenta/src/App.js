import logo from './logo.svg';
import * as React from 'react';
import './App.scss';
import Login from './Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Register from './Register';
import Account from './Account';
import useToken from './hooks/useToken';
import useRole from './hooks/useRole';
import useName from './hooks/useName';
import Logout from './Logout';
import Password from './password';
import Upload from './Upload';
import useAdminToken from './hooks/useAdminToken';



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
        <Route path="/login" element = {<Login setToken={setToken} token={token}  setName={setName} setRole={setRole}/>}/>
        <Route path="/register" element = {<Register setRole={setRole} role={role} token={token}  />}/>
        <Route path="/account" element = {<Account  token={token}   name={name} role={role}/>}/>
        <Route path="/logout" element = {<Logout setToken={setToken} token={token} setRole={setRole} role={role}/>}/>
        <Route path="/password" element = {<Password role={role} token={token}/>}/>
        <Route path="/upload" element = {<Upload  name={name} role={role} token={token}  />}/>

      </Routes>
      </div>
    </div>
  );
}

export default App;