import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Layout from './components/layouts/Layout';

import ContactoPage from './pages/contacto/ContactoPage';
import PeliculasPage from './pages/peliculas/PeliculasPage';
import PeliculasDetallePage from './pages/peliculas/PeliculaDetallePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={
              <Layout>
                <PeliculasPage/>
              </Layout>
            }/>
            <Route path='/contacto' element={
              <Layout>
                <ContactoPage/>
              </Layout>
            }/>
            <Route path='/peliculas/detalle/:id' element={
              <Layout>
                <PeliculasDetallePage/>
              </Layout>
            }/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
