import React, { useState, useEffect } from 'react'
import { Navigate } from "react-router";
import { format } from 'react-string-format'
//import { useHistory } from 'react-router-dom';
import './Account.css';
import { useAlert } from "react-alert";




function deletefile(token, filename) {
  return fetch(format('http://localhost:8080/game/deletefile/' + filename), {
    method: 'DELETE',
    headers: {
      'Authorization': token,
      'Content-Type': 'application/json'
    },

  })
    .then(data => data.json())
}

function accesfile(token, filename, username) {
  return fetch('http://localhost:8080/game/addacces', {
    method: 'POST',
    headers: {
      'Authorization': token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ "username": username, "filename": filename })
  })
    .then(data => data.json())
}

const Account = ({ token, name, role }) => {

  //const history = useHistory();
  const [privateFiles, setPrivateFiles] = useState([]);
  const [publicFiles, setPublicFiles] = useState([]);
  const [hiddenFiles, setHiddenFiles] = useState([]);
  const [accesFiles, setAccesFiles] = useState([]);
  const [userAcces, setUserAcces] = useState([]);
  const alert = useAlert();

  useEffect(() => {
    //if (role === "undefined") {
    //   history.push('/home');
    //}

    getPrivateFiles(token);
    getPublicFiles(token);
    getHiddenFiles(token);
    getAccesFiles(token);
  }, []);

  const getPrivateFiles = (token) => {
    fetch('http://localhost:8080/game/privatefile', {
      method: 'GET',
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((data) => {
        setPrivateFiles(data);
      });
  }

  const getPublicFiles = (token) => {
    fetch('http://localhost:8080/game/publicfile', {
      method: 'GET',
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((data) => {
        setPublicFiles(data);
      });
  }

  const getHiddenFiles = (token) => {
    fetch('http://localhost:8080/game/hiddenfile', {
      method: 'GET',
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((data) => {
        setHiddenFiles(data);
      });
  }

  const getAccesFiles = (token) => {

    fetch('http://localhost:8080/game/accesfile', {
      method: 'GET',
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((data) => {
        setAccesFiles(data);
      });
  }


  return (
    <>
    
      <div className="row">

        <div className="col-md-3">

          <div className="card mx-auto" style={{ backgroundColor: '#A4C2A5', padding: '10px', width: '20rem', marginTop: '1.5rem' }}>

            <h5 className="card-title" style={{ marginBottom: '15px' }}> Public Files </h5>
            {publicFiles.map((file) => {

              const handleDeleteFile = e => {
                deletefile(token, file.name)
                alert.success("Successful delete file");
              }

              const handleCopyPath = e => {
                navigator.clipboard.writeText(file.location);
                alert.success("Successful copy path");
              }

              return (
                <ol className="list-group ">
                  <li className="list-group-item d-flex justify-content-between align-items-start" key={file.id} style={{ backgroundColor: '#D8DAD3' }}>
                    <div className="ms-2 me-auto">
                      <div className="fw-bold" style={{ color: '#020122' }}> {file.name}</div>
                      <b>Owner file:</b> {file.owner}<br></br>
                      <b>Label:</b> {file.label}<br></br>
                    </div>
                    <div >
                      <button type="button" className="btn btn-dark" style={{ backgroundColor: '#679436' }} onClick={() => {
                        handleCopyPath()
                      }}>Copy path</button>


                      {file.owner === name ? (
                        <>
                          <button type="button" className="btn btn-dark" style={{ backgroundColor: '#e20d0d' }} onClick={() => {
                            handleDeleteFile()
                          }}>Delete
                          </button>
                        </>
                      ) :
                        (console.log(""))}
                      {name === "admin" ? (
                        <>
                          <button type="button" className="btn btn-dark" style={{ backgroundColor: '#e20d0d' }} onClick={() => {
                            handleDeleteFile()
                          }}>Delete</button>
                        </>
                      ) :
                        (<br></br>)}
                    </div>
                  </li>
                </ol>
              );
            })}
          </div>
        </div>

        <div className="col-md-3">

          <div className="card mx-auto" style={{ backgroundColor: '#A4C2A5', padding: '10px', width: '20rem', marginTop: '1.5rem' }}>
            <h5 className="card-title" style={{ marginBottom: '15px' }}> Private Files </h5>
            {privateFiles.map((file) => {
              const handleDeleteFile = e => {
                deletefile(token, file.name)
                alert.success("Successful delete file");
              }
              const handleAcces = e => {
                const mesaj = accesfile(token, file.name, userAcces);
                console.log(mesaj);
                window.location.reload();
              }
              const handleCopyPath = e => {
                navigator.clipboard.writeText(file.location);
                alert.success("Successful copy path");
              }
              return (
                <ol className="list-group ">
                  <li className="list-group-item d-flex justify-content-between align-items-start" key={file.id} style={{ backgroundColor: '#D8DAD3' }}>
                    <div className="ms-2 me-auto">
                      <div className="fw-bold" style={{ color: '#020122' }}> {file.name}</div>
                      <b>Owner file:</b> {file.owner}<br></br>
                      <b>Label:</b> {file.label}<br></br>
                    </div>
                    <div >
                      {name === "admin" ? ( 
                        <>
                          <button type="button" className="btn btn-dark" style={{ backgroundColor: '#679436' }} onClick={() => {
                            handleCopyPath()
                          }}>Copy path</button>

                          <button type="button" className="btn btn-dark" style={{ backgroundColor: '#e20d0d' }} onClick={() => {
                            handleDeleteFile()
                          }}>Delete</button>
                          <form >
                            <label>
                              Give acces:
                              <input type="text" onChange={e => setUserAcces(e.target.value)} />
                            </label>
                            <button type="button" className="btn btn-dark" style={{ backgroundColor: '#5C6672' }} onClick={() => {
                              handleAcces()
                            }}>Acces</button>
                          </form>
                        </>
                      ) :
                        (<br></br>)}

                      {file.owner === name ? (
                        <>
                          <button type="button" className="btn btn-dark" style={{ backgroundColor: '#679436' }} onClick={() => {
                            handleCopyPath()
                          }}>Copy path</button>

                          <button type="button" className="btn btn-dark" style={{ backgroundColor: '#e20d0d' }} onClick={() => {
                            handleDeleteFile()
                          }}>Delete</button>
                          <form >
                            <label>
                              Give acces:
                              <input type="text" onChange={e => setUserAcces(e.target.value)} />
                            </label>
                            <button type="button" className="btn btn-dark" style={{ backgroundColor: '#5C6672' }} onClick={() => {
                              handleAcces()
                            }}>Acces</button>
                          </form>
                        </>
                      ) :
                        (<br></br>)}
                    </div>
                  </li>
                </ol>
              );
            })}
          </div>
        </div>



        <div className="col-md-3">
          <div className="card mx-auto" style={{ backgroundColor: '#A4C2A5', padding: '10px', width: '20rem', marginTop: '1.5rem' }}>
            <h5 className="card-title" style={{ marginBottom: '15px' }}> Hidden Files </h5>
            {hiddenFiles.map((file) => {
              const handleDeleteFile = e => {
                deletefile(token, file.name)
                alert.success("Successful delete file");
              }
              const handleCopyPath = e => {
                navigator.clipboard.writeText(file.location);
                alert.success("Successful copy path");
              }
              return (
                <ol className="list-group ">
                  <li className="list-group-item d-flex justify-content-between align-items-start" key={file.id} style={{ backgroundColor: '#D8DAD3' }}>
                    <div className="ms-2 me-auto">
                      <div className="fw-bold" style={{ color: '#020122' }}> {file.name}</div>
                      <b>Owner file:</b> {file.owner}<br></br>
                      <b>Label:</b> {file.label}<br></br>
                    </div>
                    {file.owner === name ? (
                      <>
                        <button type="button" className="btn btn-dark" style={{ backgroundColor: '#679436' }} onClick={() => {
                          handleCopyPath()
                        }}>Copy path</button>

                        <button type="button" className="btn btn-dark" style={{ backgroundColor: '#e20d0d' }} onClick={() => {
                          handleDeleteFile()
                        }}>Delete</button>
                      </>
                    ) :
                      (<br></br>)}
                  </li>
                </ol>
              );
            })}
          </div>
        </div>

        <div className="col-md-3">
          <div className="card mx-auto" style={{ backgroundColor: '#A4C2A5', padding: '10px', width: '20rem', marginTop: '1.5rem' }}>
            <h5 className="card-title" style={{ marginBottom: '15px' }}> File Access </h5>
            {accesFiles.map((file) => {
              const handleDeleteFile = e => {
                deletefile(token, file.name)
                alert.success("Successful delete file");
              }
              const handleCopyPath = e => {
                navigator.clipboard.writeText(file.location);
                alert.success("Successful copy path");
              }
              return (
                <ol className="list-group ">
                  <li className="list-group-item d-flex justify-content-between align-items-start" key={file.id} style={{ backgroundColor: '#D8DAD3' }}>
                    <div className="ms-2 me-auto">
                      <div className="fw-bold" style={{ color: '#020122' }}> {file.name}</div>
                      <b>Owner file:</b> {file.owner}<br></br>
                      <b>Label:</b> {file.label}<br></br>
                    </div>
                    {name === "admin" ? (
                      <>
                        <button type="button" className="btn btn-dark" style={{ backgroundColor: '#679436' }} onClick={() => {
                          handleCopyPath()
                        }}>Copy path</button>

                        <button type="button" className="btn btn-dark" style={{ backgroundColor: '#e20d0d' }} onClick={() => {
                          handleDeleteFile()
                        }}>Delete</button>
                      </>
                    ) :
                      (<button type="button" className="btn btn-dark" style={{ backgroundColor: '#679436' }} onClick={() => {
                        handleCopyPath()
                      }}>Copy path</button>)}

                  </li>
                </ol>
              );
            })}
          </div>
        </div>
      </div>
      {/* </div> */}

    </>
  );
}
export default Account;