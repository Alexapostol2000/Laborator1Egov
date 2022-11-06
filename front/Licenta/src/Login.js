
import React, { useState } from 'react';
import { Navigate } from "react-router-dom";
import { useAlert } from "react-alert";
import validator from 'validator'
import jsPDF from 'jspdf'



 const getLength = (number) => {
  return number.toString().length;
}

function getDifferenceInDays(date1, date2) {
  const dt_date1 = new Date(date1);
  const dt_date2 = new Date(date2);
  var Difference_In_Time = dt_date1.getTime() - dt_date2.getTime();
  var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  return Difference_In_Days
}

const reducere = (date) => {
  var result = false
  var today = new Date()
  var datenow = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  if(getDifferenceInDays(datenow,date) < 15){
    result = true;
  }
return result
}

function topay(suma, data){
  if(reducere(data) == true){
    var ret = "Beneficiati de reducere 50% pentru achitare in termen de 15 zile.\n Suma totala de plata este: "
    ret+=suma/2;
    ret+= " lei"
    return ret
  }
  var ret = "Suma totala de plata este: "
  ret+=suma;
  ret+= " lei"
  return ret
}


const Plata = ({setToken, token, setName, setRole}) => {


  const alert = useAlert();
  const [nume, setNume] = useState("");
  const [prenume, setPrenume] = useState("");
  const [suma, setSuma] = useState("");
  const [check, setCheck] = useState("");
  const [email, setEmail] = useState("");
  const [cnp, setCNP] = useState("");
  const [adresa, setAdresa] = useState("");
  const [date, setDate] = useState("");
  const [judet, setJudet] = useState("");
  const [motiv, setMotiv] = useState("");


  function generatepdf(){
    const doc = new jsPDF("p", "pt", "a4"); // default values

    // set font
    doc.setFont("helvetica", "bold");

    // font size
    doc.setFontSize(35);

    // title, centered around x
    // doc.text(text, x, y, flags, angle, align);
    var top = 20;
    doc.text(
      "Dovada de plata amenda rutiera",
      105 * 2.83,
      top * 2.83,
      null,
      null,
      "center"
    );
    top+=20;
      // set font
    doc.setFont("helvetica");

    // font size
    doc.setFontSize(16);
    doc.text(
      "Prin prezenta se dovedeste faptul ca subsemnatul:",
      40 * 2.83,
      top * 2.83,
      null,
      null,
      "left"
    );
    top += 10;
    var np = nume+" "+prenume + " identificat prin CNP " + cnp + " domiciliat in ";
    doc.text(
      np,
      1 * 2.83,
      top * 2.83,
      null,
      null,
      "left"
    );
    top+=10;
    var dom = adresa + " Judetul " + judet;
    doc.text(
      dom,
      1 * 2.83,
      top * 2.83,
      null,
      null,
      "left"
    );
    top+=20
    var val = "In cuantum de " + suma + " lei"
    doc.text(
      val,
      105 * 2.83,
      top * 2.83,
      null,
      null,
      "center"
    );
    top +=10 
    var mot = "In baza motivului: " + motiv;
    doc.text(
      mot,
      105 * 2.83,
      top * 2.83,
      null,
      null,
      "center"
    );
    top+=10
    var data = "Fapta savarsita la data de " + date
    doc.text(
      data,
      105 * 2.83,
      top * 2.83,
      null,
      null,
      "center"
    );
    top+=50
    if(reducere(data) == true){
      var achitat = "Suma totala de achitat: " + suma/2 + "lei";
    doc.text(
      achitat,
      105 * 2.83,
      top * 2.83,
      null,
      null,
      "center"
    );
    top+=5;
    doc.setFontSize(7);
    doc.text(
      "**Valoarea de plata este jumatate din valuarea totala a amenzii deoarece aceasta a fost achitata in mai putin de 15 zile de la data emiterii",
      1 * 2.83,
      top * 2.83,
      null,
      null,
      "left"
    );
    }else{
      var achitat = "Suma totala de achitat: " + suma + "lei";
    doc.text(
      achitat,
      105 * 2.83,
      top * 2.83,
      null,
      null,
      "center"
    );
    }
    doc.setFontSize(16);
    top = 260
    doc.text(
      "Data",
      45 * 2.83,
      top * 2.83,
      null,
      null,
      "left"
    );
    doc.text(
      "Semnatura",
      135 * 2.83,
      top * 2.83,
      null,
      null,
      "left"
    );
    top+=10
    var dataactuala = new Date()
    var azi = dataactuala.getFullYear() + '-' + (dataactuala.getMonth() + 1) + '-' + dataactuala.getDate();
    doc.text(
      azi,
      40 * 2.83,
      top * 2.83,
      null,
      null,
      "left"
    );
    doc.save("Dovada de plata.pdf");
  }
 
  
  const handleSubmit = async (e) => {
    generatepdf();
  }

  
  return(
    <div className="card shadow mb-4 mx-auto text-center" style={{ width: '22rem', maxHeight: '80rem', marginTop: '5%', backgroundColor: '#A4C2A5' }}>
    <div className="card-body">
        <h4 className="card-title mb-0 border-bottom font-weight-bold"> Formular plata</h4>
    </div>
            
    <div className="card-body text-center">
    <form>
      <div className="form-group">
        <label for="exampleInputEmail1">Nume</label>
        <input type="text" className="form-control" placeholder="Nume" onChange={e => setNume(e.target.value)}/>
        
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Prenume</label>
        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Prenume" onChange={e => setPrenume(e.target.value)}/>
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Adresa de email</label>
        <input type="email" className="form-control" id="exampleInputPassword1" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Cod numeric personal</label>
        <input type="number" className="form-control" id="exampleInputPassword1" placeholder="CNP" onChange={e => setCNP(e.target.value)}/>
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Adresa de domiciliu</label>
        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Domiciliu" onChange={e => setAdresa(e.target.value)}/>
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Judet</label>
        <datalist id = "judet">
        <option>Ialomita</option>
        <option>Sector 1</option>
        <option>Sector 2</option>
        <option>Sector 3</option>
        <option>Sector 4</option>
        <option>Sector 5</option>
        <option>Sector 6</option>
        <option>Vaslui</option>
        <option>Braila</option>
        </datalist>
        <input type="text" list = "judet" className="form-control" id="exampleInputPassword1" placeholder="Judet" onChange={e => setJudet(e.target.value)}/>
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Motivul amenzii</label>
        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Motiovul amenzii" onChange={e => setMotiv(e.target.value)}/>
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Data amenzii</label>
        <input type="date" className="form-control" id="exampleInputPassword1" placeholder="Data la care s-a primit amenda" onChange={e => setDate(e.target.value)}/>
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Valoarea amenzii</label>
        <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Valoarea totala a amenzii exprimata in lei" onChange={e => setSuma(e.target.value)}/>
      </div>
      <div className="form-group">
        <label for=""> {topay(suma,date)} </label>
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Esti de acord cu termenii si conditiile?</label>
      </div>
      <div className="form-group">
      <input type="checkbox" className="form-control" id="exampleInputPassword1" placeholder="" onChange={e => setCheck(e.target.value)}/>
      </div>


      
      <button type="button" className="btn btn-dark" style ={{backgroundColor:'#5C6672'}} onClick={() => 
        {
        check === "on" ?(
          validator.isEmail(email) === true? (
            getLength(cnp) === 13? (
              judet === ''?(
                alert.error("Trebuie sa selectezi un judet")
              ):(
                adresa === ''?(
                  alert.error("Trebuie sa introduci adresa de domiciliu")
                ):(
                  nume === ''?(
                    alert.error("Va rugam introduceti numele")
                  ):(
                    prenume === ''?(
                      alert.error("Va rugam introduceti prenumele")
                    ):(
                      motiv === ''?(
                        alert.error("Va rugam introduceti motivul amendarii")
                      ):(
                        date === ''?(
                          alert.error("Va rugam data amenzii")
                        ):(
                          suma === ''?(
                            alert.error("Va rugam introduceti suma amenzii")
                          ):(
                            //alert.success("Plata efectuata cu succes")
                            handleSubmit()
                          )
                        )
                      )
                    )
                  )
                )
              )
            ):
            (alert.error("CNP invalid"))
          ):(
            alert.error("Trebuie sa introduci un email valid")
          )
        ):(
          //console.log(reducere(date))
          alert.error("Trebuie sa fii de acord cu termenii si conditiile")
        )
        }  
      }>Plateste</button>

    </form>

      
    </div>
    
  </div>   
  )
}



export default Plata;
