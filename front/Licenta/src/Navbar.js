import { seeRegister } from "./Login";
import * as React from 'react';



const Navbar = ({ token, role, name  }) => {
    return ( 
        <>
        {
         (token) ? (

            (role == "ROLE_ADMIN") ? ( 
            <nav className="navbar sticky-top">
            <h1 style = {{color: "#A4C2A5", fontFamily: "quicksand", fontWeight:"bold"}}> Files sharing </h1>
            <div className="links">
                <a href="/" style={{
                    color: "white",
                    backgroundColor: '#A4C2A5',
                    borderRadius: '8px'
                }} > Home </a>
                <a href="/upload" style={{
                    color: "white",
                    backgroundColor: '#A4C2A5',
                    borderRadius: '8px'
                }} > Upload </a>
                 <a href="/account" style={{
                    color: "white",
                    backgroundColor: '#A4C2A5',
                    borderRadius: '8px'
                }} > File Manager </a>
                    <a href="/register" style={{
                        color: "white",
                        backgroundColor: '#A4C2A5',
                        borderRadius: '8px'
                    }} > Create new user </a>

                    <a href="/password" style={{
                        color: "white",
                        backgroundColor: '#A4C2A5',
                        borderRadius: '8px'
                    }} > Change password </a>
                    
                 <a href="/logout" style={{
                    color: "white",
                    backgroundColor: '#A4C2A5',
                    borderRadius: '8px'
                }} > Logout </a> 
                 <a className="card-subtitle mb-2 text-muted" style ={{fontWeight:"bold"}}> {name} </a>  
            </div>
        </nav>) : (<nav className="navbar sticky-top">
                                   <h1 style = {{color: "#A4C2A5", fontFamily: "quicksand", fontWeight:"bold"}}> Files sharing </h1>
                                   <div className="links">
                                       <a href="/" style={{
                                           color: "white",
                                           backgroundColor: '#A4C2A5',
                                           borderRadius: '8px'
                                       }} > Home </a>
                                        <a href="/upload" style={{
                                            color: "white",
                                             backgroundColor: '#A4C2A5',
                                             borderRadius: '8px'
                                         }} > Upload </a>
                                        <a href="/account" style={{
                                           color: "white",
                                           backgroundColor: '#A4C2A5',
                                           borderRadius: '8px'
                                       }} > File Manager </a>
                                        <a href="/logout" style={{
                                           color: "white",
                                           backgroundColor: '#A4C2A5',
                                           borderRadius: '8px'
                                       }} > Logout </a>
                                       <a className="card-subtitle mb-2 text-muted"> {name} </a>   
                                   </div>
                               </nav>)
        ) : (  <nav className="navbar" >
        <h1 style = {{color: "#A4C2A5", fontFamily: "quicksand", fontWeight:"bold"}}> PlatiX </h1>
        <div className="links">
            <a href="/" style={{
                color: "white",
                backgroundColor: '#A4C2A5',
                borderRadius: '8px'
            }} > Home </a>
            <a href="/login" style={{
                color: "white",
                backgroundColor: '#A4C2A5',
                borderRadius: '8px'
            }} > Plateste </a>
    
            
        </div>
    </nav>)
        }
        </>

    )}
export default Navbar;

