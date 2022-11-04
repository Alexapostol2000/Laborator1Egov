import * as React from 'react';
import Faq from 'react-faq-component';
import './Home.css';

const Home = () => {
const data = {
      title: 
      <center className="centerFaq">
        <br></br>
        <br></br><br></br>
      <p style={
        {
        color: "#A4C2A5",
        backgroundColor: 'white',
        borderRadius: '8px',
        textAlign: 'center',
        width: 500,
        pading: 10
        }}> 
        Intrebari frecvente </p>
        </center>,
      rows: [
        {
          title: "La ce ma ajuta platforma",
          content: "Prin platforma noastra poti plati usor si rapid amenzile auto"
        },
        {
          title: "Am nevoie de cont?",
          content: "Pentru a efectua o plata nu e nevoie de cont, tot ce trebuie sa faci e sa dai click pe plateste si sa completezi campurile"
        },
        {
          title: "In urma platii se va genera vreun document?",
          content: "Desigur dupa plata un document pdf va fi generat automat cu detaliile acesteia"
        },
        {
          title: "E sigur sa platesc online?",
          content: "Prin efectuarea platii online poate fi scutit timp pretios"
        }]
    }
    
       
return (
    <center>
    <div style={{paddingTop:"3%"}}>
        <h1 style = {{color: "#A4C2A5", fontFamily: "quicksand", fontWeight:"bold"}}> Bun venit pe platforma de plati online a amenzilor rutiere!  </h1>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
        <img src="https://www.librapay.ro/wp-content/uploads/2013/11/formular-plata-responsive-dark.png"></img>
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