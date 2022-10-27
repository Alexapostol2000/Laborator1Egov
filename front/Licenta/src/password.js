import React, { Fragment, useState } from 'react';
import { Navigate } from "react-router-dom";
import { useAlert } from "react-alert";




async function changepassword(credentials) {
  
  return fetch('http://localhost:8080/game/password', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }


const Login = ({role},{token}) => {
  const alert = useAlert();
  
  const [name, setUserName] = useState("");
  const [password, setPassword] = useState("");
  
  if(role !== "ROLE_ADMIN" ){
    return (
      <Navigate to="/home"/>
    );
  }

  const handleSubmit = async (e) => {
    const mesaj = await changepassword({
      name,
      password
    });

    if(mesaj === false){
      alert.error("This user does not exist");
    }else{
      alert.success("Successful change");
    }
  }

  


  return(
    <div className="card shadow mb-4 mx-auto text-center" style={{ width: '22rem', maxHeight: '40rem', marginTop: '5%', backgroundColor: '#A4C2A5' }}>
    <div className="card-body">
        <h4 className="card-title mb-0 border-bottom font-weight-bold"> Change user password</h4>
    </div>
            
    <div className="card-body text-center">
    <form>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Username</label>
        <input type="text" className="form-control" placeholder="Enter username" onChange={e => setUserName(e.target.value)}/>
        
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">New Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="New Password" onChange={e => setPassword(e.target.value)}/>
      </div>
      
      <button type="button" className="btn btn-dark" style ={{backgroundColor:'#5C6672'}} onClick={() => 
        handleSubmit()
        }>Submit</button>

    </form>

      
    </div>
    
  </div>   
  )
}



export default Login;
