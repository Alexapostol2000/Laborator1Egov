import * as React from 'react';
import Faq from 'react-faq-component';
import './Home.css';

const Home = () => {
const data = {
      title: 
      <center className="centerFaq">
      <p style={
        {
        color: "#A4C2A5",
        backgroundColor: 'white',
        borderRadius: '8px',
        textAlign: 'center',
        width: 500,
        pading: 10
        }}> 
        FAQ (How it works?) </p>
        </center>,
      rows: [
        {
          title: "How do I sign up?",
          content: "Accounts can only be created by administrators. Contact an admin to sign up."
        },
        {
          title: "How do I upload a file?",
          content: " To upload a file you access the upload page and complete the form you will find there. "
        },
        {
          title: "In which section can I manage my files? ",
          content: "To manage the available files you access the 'File manager' section."
        },
        {
          title: "How can I manage a file?",
          content: "If you want to delete, view or give access to a file you have such permissions, you will find each specific button in the 'File manager' section. In case you want to allow someone, you have to add theirs username in the case and press the access button."
        }]
    }
    
       
return (
    <center>
    <div style={{paddingTop:"3%"}}>
        <h1 style = {{color: "#A4C2A5", fontFamily: "quicksand", fontWeight:"bold"}}> Welcome to the file sharing platform!  </h1>
        <br></br>
        <br></br>
        <img src="https://m.com-magazin.de/img/1/5/0/8/3/4/2/Filesharing_w640_h400.jpg"></img>
    </div>
    <div className="faq-div">      
        <Faq data={data} style = {{pading:'0px 10px'}}/>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    </center>
    
);}
export default Home;