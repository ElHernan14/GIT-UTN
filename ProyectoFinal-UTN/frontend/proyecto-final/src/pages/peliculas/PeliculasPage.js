import React, { useState, useEffect} from 'react';
import axios from 'axios';
import PeliculasItem from './../../components/peliculas/PeliculasItem';
import FiltroPeliculas from './../../components/peliculas/FiltroPeliculas';

const PeliculasPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [peliculas, setPeliculas] = useState([]);
  const [years, setYears] = useState([]);

  useEffect(() => {
    const cargarPeliculas = async () => {
      try {
        setLoading(true);
        
        const response = await axios.get('http://localhost:3000/api/peliculas');
        const responseJson = response.data;
        if(!responseJson?.success){
          console.log(responseJson?.message)
          setError(true);
        }
        setPeliculas(responseJson?.data);
        setLoading(false);
      } catch (error) {
        console.log(error)
        setError(true);
      }
    };

    ComboAno();
    cargarPeliculas();
  },[])

  function ComboAno(){
    let yearsList = []
    var d = new Date();
    var n = d.getFullYear();
    for(var i = n; i >= 1960; i--) {
      yearsList.push({year:i});
    }
    setYears(yearsList);
  }

  const filtrarPeliculas = async (params) => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:3000/api/filtroPeliculas', { params: params });
      const responseJson = response.data;
      if(!responseJson?.success){
        console.log(responseJson?.message)
        setError(true);
      }
      setPeliculas(responseJson?.data);
      setLoading(false);
    } catch (error) {
      console.log(error)
      setError(true);
    }
  };

  if (error) {
    return (
      <div>Ocurrió un error, recargue la pagina.</div>
    );
  }

  return (
    <section className='holder '>
        {loading ? (
            <p>Cargando...</p>
        ): (
          
          <div className="container-fluid" style={{margin:"125px auto"}}>
            <div className="wrapper-grey padded d-flex justify-content-center p-3">
              <div className="container row">
                <h4 className="text-center text-white fw-bold mt-2 mb-2">PELIS-UTN</h4>
                <FiltroPeliculas key={"filtroPelis"} years={years} onSubmit={filtrarPeliculas}/>
                {peliculas.map(item =>
                    <PeliculasItem key={item.id} id={item.id}
                    titulo={item.titulo} year={item.año}
                    calificacion={item.calificacion} imagen={item.imagen}/> 
                )}
              </div>
            </div>
          </div>
        )}
    </section>
  )
}

export default PeliculasPage