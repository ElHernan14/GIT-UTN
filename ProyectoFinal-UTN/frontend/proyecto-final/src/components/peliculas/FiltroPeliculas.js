import React, { useState } from 'react';

const FiltroPeliculas = (props) => {
  const { years, onSubmit } = props;
  const generos = [
    {genero : "Acción"}, {genero : "Aventura"}, {genero : "Catástrofe"}, {genero : "Ciencia Ficción"},{ genero : "Comedia"},
    {genero : "Documental"}, {genero : "Drama"}, {genero : "Fantasía"}, {genero : "Musicales"}, {genero : "Suspense"}, {genero : "Terror"},
  ];
  const puntuacion = [{"n": 1},{"n": 1.5},{"n": 2},{"n": 2.5},{"n": 3},{"n": 3.5},{"n": 4},{"n": 4.5},{"n": 5}
  ,{"n": 5.5},{"n": 6}, {"n": 6.5}, {"n": 7}, {"n": 7.5}, {"n": 8}, {"n": 8.5}, {"n": 9}, {"n": 9.5}, {"n": 10}].reverse();
  const [filtroInfo, setFiltroInfo] = useState({
    buscador: "",
    ano: "",
    genero: "",
    calificacion: ""
  });

  const handleChangeFormInputs = (e) => {
    const { name, value } = e.target;

    setFiltroInfo({
      ...filtroInfo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(filtroInfo);
  };

  var cardStyle = {
    maxWidth: "18rem;",
    width:"100%",
    height:"100%",
  };

  return (
    <div className='col-12 mb-3'>
      <div className="card text-bg-dark mb-3 p-0 px-1" style={cardStyle}>
        <div className="card-body mt-4">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className='col-12 row'>
              <div className='col-3'>
                <div className="form-group mb-3 mx-1 row">
                    <input type="text" style={{background : "black", color: "lightsteelblue"}} className="form-control border-0" name="buscador" 
                    maxLength={255} onChange={(e) => handleChangeFormInputs(e)} placeholder="Titulo, director" id='inputFiltro'/>
                </div>
              </div>
              <div className='col-3'>
                <div className="form-group mb-3 mx-1 row">
                  <select className="form-select border-0" id='inputFiltro' name='genero' 
                  style={{background : "black", color: "lightsteelblue"}} onChange={(e) => handleChangeFormInputs(e)}>
                    <option value={""} selected> Género </option>
                    {generos.map(item =>
                      <option value={item.genero}>{item.genero}</option>
                    )}
                  </select>
                </div>
              </div>
              <div className='col-2'>
                <div className="form-group mb-3 mx-1 row">
                  <select className="form-select border-0" id='inputFiltro' name='ano' 
                  style={{background : "black", color: "lightsteelblue"}} onChange={(e) => handleChangeFormInputs(e)}>
                    <option value={""} selected> Año </option>
                    {years.map(item =>
                      <option value={item.year}>{item.year}</option>
                    )}
                  </select>
                </div>
              </div>
              <div className='col-2'>
                  <select className="form-select border-0" id='inputFiltro' name='calificacion' 
                  style={{background : "black", color: "lightsteelblue"}} onChange={(e) => handleChangeFormInputs(e)}>
                    <option value={""} selected> Calificación </option>
                    {puntuacion.map(item =>
                      <option value={item.n}>{item.n}</option>
                    )}
                  </select>
              </div>
              <div className='col-2'>
                <div className="form-group mb-3 row mx-1  justify-content-center">
                  <button className="btn btn-primary" type="submit">
                      Buscar
                  </button>
                </div>
              </div>
            </div>
          </form>   
        </div>
      </div>
    </div>
  )
}

export default FiltroPeliculas