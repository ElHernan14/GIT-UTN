import React, { useState } from 'react';
import { Link, useNavigate   } from 'react-router-dom';
import axios from 'axios';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const ContactoPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const [previewImage, setPreviewImage] = useState(null);
  const [contactoInfo, setContactoInfo] = useState({
    nombre: "",
    email: "",
    comentario: ""
  });
  const navigate = useNavigate();

  const callSwal = async (success, textSwal) => {
    //cartel de éxito
    if (!success) {
        MySwal.fire({
            text: textSwal.toString(),
            icon: "error",
            confirmButtonText: "Ok",
        });
    } else {
      await MySwal.fire({
        text: textSwal.toString(),
        icon: "success",
        timer: 3000,
      });
    }
  };

  //Guardar Contacto
  const saveContacto = async (form) => {
    try {
        setLoading(true);
        const data = new FormData();
        data.append('imagen', previewImage);
        data.append('nombre', contactoInfo.nombre);
        data.append('email', contactoInfo.email);
        data.append('comentario', contactoInfo.comentario);
        const response = await axios.post('http://localhost:3000/api/contactos/agregar', data);
        const responseJson = response.data;
        if(!responseJson?.success){
            console.log(responseJson?.message)
            setMessage(responseJson?.message)
            setError(true);
            return;
        }
        await callSwal(responseJson.success, "Contacto enviado exitosamente, le correspondimos un correo al mail ingresado.");
        setLoading(false);
        return navigate("/");
    } catch (error) {
        console.log(error);
        setMessage("No se pudo enviar el formulario");
        setError(true);
    }
  };

  const handleChangeFormInputs = (e) => {
    const { name, value } = e.target;

    setContactoInfo({
      ...contactoInfo,
      [name]: value,
    });
  };

  const handleSelectImage = (event) => {
    //setPreviewImage(event.target.files[0]);
    const file = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.addEventListener("load", () => {
        setPreviewImage(file);
    });
    fileReader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveContacto(contactoInfo);
  };

  return (
    <>
        {loading ? (
            <main className="container-fluid holder contacto" style={{margin:"125px auto"}}>
                <div className="col-xs-12 card text-bg-dark border-success text-center  mb-0">
                    <h2 className='mt-5 mb-5'>Cargando...</h2>
                </div>
            </main>
        ): (
            <main className="container-fluid holder contacto" style={{margin:"125px auto"}}>
                <div className="col-xs-12 card text-bg-dark border-info p-4 mb-0">
                    <div className="card-header">
                        <h2>Contactanos y agrega tu comentario</h2>
                        <p>Le enviaremos un correo al email ingresado.</p>
                    </div>
                    <div className="card-body">
                        <form onSubmit={(e) => handleSubmit(e)} className="formulario" method="post" encType="multipart/form-data"> 
                            {error ?? <h5 style={{color: "red;"}}>{{message}}</h5>}
                            <div className="form-group mb-3 row">
                                <label for="nombre">Nombre completo
                                <input type="text" className="form-control" name="nombre" maxLength={255}
                                 onChange={(e) => handleChangeFormInputs(e)} placeholder="Nombre completo" required/></label>
                            </div>
                            <div className="form-group mb-3 row">
                                <label for="email">Email
                                <input type="text" className="form-control" name="email" maxLength={255} 
                                 onChange={(e) => handleChangeFormInputs(e)} placeholder="Email" required/></label>
                            </div>
                            <div className="form-group mb-3 row">
                                <label for="comentario">Comentario
                                <textarea placeholder="Comentario" className="form-control" maxLength={255} 
                                 onChange={(e) => handleChangeFormInputs(e)} name="comentario" rows="3" required></textarea></label>
                            </div>
                            <div className="form-group mb-3 row">
                                <label for="imagen">Imagen
                                <input className="form-control" type="file" name="imagen" id="imagen" onChange={handleSelectImage} required></input></label>
                            </div>
                            <div className="form-group mb-3 row justify-content-center">
                                <button className="btn btn-primary mt-3 col-7" type="submit">
                                    Enviar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>  
                <div className="datos">
                    <div className="card col-xs-12 text-bg-dark border-success p-4 mb-0">
                        <div className="card-header" style={{height:"100px"}}>
                            <h2>Otras vías de comunicación</h2>
                        </div>
                        <div className="card-body">
                            <p>También puede contactarse con nosotros usando los siguientes medios</p>
                            <ul className="list-group border-info">
                                <li className="list-group-item list-group-item-action list-group-item-dark text-center">Teléfono: 2664681863</li>
                                <Link to="https://mail.google.com/mail/u/0/#inbox" target='_blank' className="list-group-item list-group-item-action list-group-item-warning text-center">Email: hconstante@runaid.com.ar</Link>
                                <Link to="https://www.facebook.com/groups/programardesdecero" target='_blank' className="list-group-item list-group-item-action list-group-item-primary text-center">Facebook</Link>
                                <Link to="https://twitter.com/elearningUTN" target='_blank' className="list-group-item list-group-item-action list-group-item-info text-center">Twitter</Link>
                                <Link to="https://discord.com/channels/776143456539639828/776683647498453004" target='_blank' className="list-group-item list-group-item-action list-group-item-success text-center">Discord</Link>
                            </ul>
                        </div>
                    </div>  
                </div>
            </main>
        )}
    </>
  )
}

export default ContactoPage