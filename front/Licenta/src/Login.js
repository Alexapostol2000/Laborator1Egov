
import React, { useState } from 'react';
import { Navigate } from "react-router-dom";
import { useAlert } from "react-alert";



async function login(credentials) {
  return fetch('http://localhost:8080/game/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }


const Login = ({setToken, token, setName, setRole}) => {
  const alert = useAlert();
  const [name, setUserName] = useState("");
  const [password, setPassword] = useState("");

  if(token) {
    return (
      <Navigate to="/"/>
    );
  }
  
  const handleSubmit = async (e) => {
    const mesaj = await login({
      name,
      password
    })

    if(mesaj == null){
      alert.error("Invalid username or password");
    }

    setToken(mesaj.jwt);
    setName(mesaj.name);
    setRole(mesaj.userRole);
    if(mesaj != null){
      alert.success("Successful login");
      return (
        <Navigate to="/"/>
      );
    }
  }

  

  


  return(
    <div className="card shadow mb-4 mx-auto text-center" style={{ width: '22rem', maxHeight: '40rem', marginTop: '5%', backgroundColor: '#A4C2A5' }}>
    <div className="card-body">
        <h4 className="card-title mb-0 border-bottom font-weight-bold"> Formular plata</h4>
    </div>
            
    <div className="card-body text-center">
    <form>
      <div className="form-group">
        <label for="exampleInputEmail1">Nume</label>
        <input type="text" className="form-control" placeholder="Enter username" onChange={e => setUserName(e.target.value)}/>
        
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Prenume</label>
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
      </div>
      
      <button type="button" className="btn btn-dark" style ={{backgroundColor:'#5C6672'}} onClick={() => 
        handleSubmit()
        }>Trimite</button>

    </form>

      
    </div>
    
  </div>   
  )
}



export default Login;
