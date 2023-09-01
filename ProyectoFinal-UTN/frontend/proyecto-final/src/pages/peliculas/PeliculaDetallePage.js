import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const PeliculasPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [pelicula, setPelicula] = useState({});
  let { id } = useParams();

  useEffect(() => {
    const cargarPelicula = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:3000/api/getPelicula',
        { params: { 
            id: id
        } });
        const responseJson = response.data;
        if(!responseJson?.success){
          console.log(responseJson?.message)
          setError(true);
        }
        setPelicula(responseJson?.data);
        setLoading(false);
      } catch (error) {
        console.log(error)
        setError(true);
      }
    };

    cargarPelicula();
  },[id])

  if (error) {
    return (
      <div>Ocurrió un error, recargue la pagina.</div>
    );
  }

  var cardStyle = {
    maxWidth: "18rem;",
    width:"100%",
    height:"100%",
  };

  var divImg = {
    width:"270px",
    height:"340px"
  };
  
  var mystyleImg = {
    objectFit: "cover",
    width:"100%",
    height:"100%",
  };

  var divSinopsis = {
    height: "80px",
    border: "1px solid black",
    overflow: "scroll"
  };
  return (
    <section className='holder '>
        {loading ? (
            <p>Cargando...</p>
        ): (
          <div className="container-fluid row" style={{margin:"100px auto"}}>
            <div className="wrapper-grey padded d-flex justify-content-center">
              <div className="col-12">
                <div className="card text-bg-dark border-info mb-0 p-5 px-0" style={cardStyle}>
                  <div className="card-header">
                    <div className='row'>
                      <div className='col-3 d-flex justify-content-center'>
                        <div style={divImg} >
                          <img src={pelicula?.imagen} alt="react logo" style={mystyleImg}/>
                        </div>
                      </div>
                      <div className='col-5 text-start'>
                        <div className='row'>
                          <div className='col-12 mb-3'>
                            <h2 className="text-white">{pelicula?.titulo}</h2>
                          </div>
                          <div className='col-12 mb-3'>
                            <p className='fw-bold mb-1'>Sinopsis:</p>
                            <div style={divSinopsis}>
                              <p>{pelicula?.sinopsis}</p>
                            </div>
                          </div>
                          <div className='col-12'>
                            <p><span className='fw-bold' style={{color: "red"}}>Reparto: </span>{pelicula?.reparto}</p>
                          </div>
                          <div className='col-12'>
                            <p><span className='fw-bold' style={{color: "red"}}>Director: </span>{pelicula?.director}</p>
                          </div>
                          <div className='col-12'>
                            <p><span className='fw-bold' style={{color: "red"}}>Fecha de estreno: </span>{pelicula?.año}</p>
                          </div>
                        </div>
                      </div>
                      <div className='col-4'>
                        <div className='col-12 row mt-4 mx-3'>
                          <div className='col-4'>
                            <div>
                              <h5 style={{color: "lightskyblue"}}>{pelicula?.año}</h5>
                            </div>
                            <p className='mb-1'>Año</p>
                          </div>
                          <div className='col-4'>
                            <div>
                              <h5 style={{color: "lightskyblue"}}>{pelicula?.genero}</h5>
                            </div>
                            <p className='mb-1'>Géneros</p>
                          </div>
                          <div className='col-4'>
                            <div>
                              <h5 style={{color: "lightskyblue"}}>{pelicula?.calificacion}<FontAwesomeIcon className='starItem mx-1 text-warning' icon={faStar}/></h5>
                            </div>
                            <p className='mb-1'>Calificación</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body mt-4 mb-0" style={{backgroundColor: "black"}}>
                    <div className='py-5'>
                      <iframe width="1400" height="700" title='trailer' src={pelicula.link}></iframe>
                    </div>
                  </div>
              </div>

              </div>
            </div>
          </div>
        )}
    </section>
  )
}

export default PeliculasPage