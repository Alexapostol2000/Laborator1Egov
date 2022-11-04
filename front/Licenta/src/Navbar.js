import { seeRegister } from "./Login";
import * as React from 'react';



const Navbar = ({ token, role, name  }) => {
    return ( 
        <>
        {
          (  <nav className="navbar" >
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
            }} > Plateste Amenda</a>
    
            
        </div>
    </nav>)
        }
        </>

    )}
export default Navbar;

