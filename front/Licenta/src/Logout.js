import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAlert } from "react-alert";

const Logout = ({setToken, token, setRole, role}) => {
  console.log("Enter Logout");
  const alert = useAlert();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setToken(0);
    setRole("undefined");
    alert.success("Successful logout");
  }

  if(!token) {
    return (
      <Navigate to="/login"/>
    )
  }

  return (
    <div className="card shadow mb-4 mx-auto" style={{ width: '22rem', maxHeight: '40rem', marginTop: '5%', backgroundColor: '#A4C2A5' }}>
    
      <div className="card-body text-center">
          <h6 className="card-title border-bottom mb-2 font-weight-bold">Are you sure you want to logout?</h6>   
          <button type="button" className="btn btn-dark" onClick={handleSubmit} style ={{backgroundColor:'#5C6672'}}>Yes!</button>

      </div>  
  </div>
  )
}
export default Logout
