import React from 'react'

const ContactoPage = () => {
  return (
    <main className="holder contacto">
      <div>
          <h2>Contacto Rápido</h2>
          <form action="" method="" className="formulario">
              <p>
                  <label for="nombre">Nombre</label>
                  <input type="text" name=""/>
              </p>
              <p>
                  <label for="email">Email</label>
                  <input type="text" name=""/>
              </p>
              <p>
                  <label for="telefono">Telefono</label>
                  <input type="text" name=""/>
              </p>
              <p>
                  <label for="mensaje">Mensaje</label>
                  <textarea name=""></textarea>
              </p>
              <p>
                  <input type="submit" value="Enviar"/>
              </p>
          </form>
      </div>
      <div className="datos">
          <h2>Otras vias de comunicación</h2>
          <p>También puede contactarse con nosotros usando los siguientes medios</p>
              <ul>
                  <li>Teléfono: 2664681863</li>
                  <li>Email: hconstante@runaid.com.ar</li>
                  <li>Facebook</li>
                  <li>Twitter</li>
                  <li>Discord</li>
              </ul>
      </div>
    </main>
  )
}

export default ContactoPage