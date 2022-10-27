import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useToken from './hooks/useToken';
import { useAlert } from "react-alert";

async function register(credentials) {
  return fetch('http://localhost:8080/game/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 
  
  }

const Register = ({role},{token}) => {
    const alert = useAlert();
    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const [totalScore, setScore] = useState();
    const userRole = "ROLE_USER"
  
    if(role !== "ROLE_ADMIN" ){
      return (
        <Navigate to="/home"/>
      );
    }

  const handleSubmit = async (e) => {
    console.log(name);
    const retBody = await register({
      name,
      password,
      userRole
    });

    if(retBody.name !== name){
      alert.error("User alerdy exist!");
    }else{
      alert.success("Successfully register!");
    }
    setScore(retBody.totalScore)
  }

  
  
  return (
    <div className="card shadow mb-4 mx-auto text-center" style={{ width: '22rem', maxHeight: '40rem', marginTop: '5%', backgroundColor: '#A4C2A5' }}>
    <div className="card-body">
        <h4 className="card-title mb-0 border-bottom font-weight-bold"> Add new user</h4>
    </div>
            
    <div className="card-body text-center">
    <form >
      <div className="form-group">
        <label>Username</label>
        <input type="text" className="form-control" placeholder="Enter username" onChange={e => setName(e.target.value)}/>
        
      </div>
    
      <div className="form-group">
        <label>Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
      </div>

      <button type="button" className="btn btn-dark " style ={{backgroundColor:'#5C6672'}} onClick={() => handleSubmit()}> Submit </button>
      

    </form>
    
      {totalScore === 0 ? (
        <Navigate to="/login"/>)
        :
        (<></>)
      }
    </div>
  </div>

);



}
export default Register;