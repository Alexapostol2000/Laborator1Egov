import React, {useState, useEffect} from 'react'
import { Navigate } from "react-router";
import {format} from 'react-string-format'
import { Link } from 'react-router-dom';
import { useAlert } from "react-alert";
import './Upload.css';



const Upload = ( {name, role, token}) => {
  const [fileType, setFileType] = useState();
  const [totalFiles, setTotalFiles] = useState(0);
  const [filename, setFileName] = useState();
  const [filelabel, setFileLabel] = useState();
  const [filelocation, setFileLocation] = useState();
  
  const getTotalfiles = (token) => {
    fetch('http://localhost:8080/game/numberfileuser', {
      method: 'GET',
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.json())
      .then((data) => {
        setTotalFiles(data);
      });
      
    }

    function addfile(filename,name,filelocation,fileType,filelabel) {
      return fetch('http://localhost:8080/game/addfile', {
        method: 'POST',
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({"name": filename, "owner": name, "type":fileType, "location":filelocation,"label":filelabel })
      })
        .then(data => data.json())
     }

  const handleSubmit = async e => {
    addfile(filename,name,filelocation,fileType,filelabel)
  }

    getTotalfiles(token);

    if(role === "undefined" ){
      return (
        <Navigate to="/home"/>
      );
    }

  return (
    <div className="col-md- 12">
        <div class = "container"  style={{ width: '30rem', maxHeight: 'rem', margin: '5%',
        backgroundColor: '#A4C2A5', alignContent:'center', borderRadius:'2rem',  borderColor:'#A4C2A5'}}  >
        <div className="card shadow mb-1 mx-auto text-center" />
                  <h5 className="card-title-upload"> Upload File </h5>
                  <h6 className="card-subtitle mb-2 text-muted"> Hello {name} </h6>
                  <h6 className="card-subtitle mb-2 text-muted"> Total Files: {name === 'guest' ? 0 : totalFiles} </h6>
                   
              
                  
    </div>
    <div class = "container"  style={{ width: '30rem', maxHeight: '40rem', margin: '5%',
        backgroundColor: '#A4C2A5', alignContent:'center', borderRadius:'2rem',  borderColor:'#A4C2A5'}}  >
       <div className="row" style ={{ alignContent: 'center', marginTop: '5%'}}> 
              
              <h5 className="card-title-add" style ={{marginTop:'7%'}}> Add File </h5>
                  <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="col-md-12">
                      <input type="text" className="form-control" id="1" placeholder="Name File"  onChange={e => setFileName(e.target.value)}/>
                    </div>

                    <div className="col-md-12">
                      <input type="text" className="form-control" id="1" placeholder="File Location"  onChange={e => setFileLocation(e.target.value)}/>
                    </div>
                 
                    <div className="col-12">
                    <select id="inputState" className="form-select" onChange={e => setFileType(e.target.value)}>
                        <option selected>Type File</option>
                        <option>TYPE_PUBLIC</option>
                        <option>TYPE_PRIVATE</option>
                        <option>TYPE_HIDDEN</option>
                     
                      </select>
                    </div>

                    <div className="col-md-12">
                      <input type="text" className="form-control" id="1" placeholder="Label" onChange={e => setFileLabel(e.target.value)} />
                    </div>
                    

                    {/* <div className="col-md-12">
                    <input type="file" id="myFile" name="filename" onChange={e => 
                    console.log(URL.createObjectURL(document.getElementById('myFile').files[0]))
                      }/>
                    </div> */}

                    <div className="col-12">
                      <button type="submit" className="button-add-file" style={{ backgroundColor: '#A4C2A5', alignContent:'center', borderColor:'#d3bcc0', borderRadius:"2rem", margin:'5%', marginLeft:'-15%'}} > Add file</button>
                    </div>
                  </form>
              </div>
            
        </div>
        </div>

);



}
export default Upload;