import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const PeliculasItem = (props) => {
  const {titulo, year, calificacion, imagen, id} = props;  
  const navigate = useNavigate();

  const irADetallePelicula = (id) => {
    navigate('/peliculas/detalle/'+id)
  };

  var mystyle = {
    background: `url(${imagen}) `,
  };
  return (
    <div className="col-xs-12 col-sm-3 pelicula">
      <div className="card" style={mystyle}>
        <div className="card-header d-flex justify-content-between col-12 row">
          <div className='col-3'>
            <span class="badge text-bg-dark">{year}</span>
          </div>
          <div className='col-2'>
            <span class="badge text-bg-warning">{calificacion}  <FontAwesomeIcon className='starItem' icon={faStar}/></span>
          </div>
        </div>
        <div className="card-description col-12 titulo-card">
          <p className='mt-2'>{titulo}</p>
        </div>
        <button className="card-link" onClick={(e) => irADetallePelicula(id)}></button>
      </div>
  </div>
  )
}

export default PeliculasItem