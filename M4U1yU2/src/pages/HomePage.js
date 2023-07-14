import React from 'react'

const HomePage = () => {
  return (
    <main className="holder">
      <div>
          <img src="img/home/img01.jpg" alt="avion"/>
      </div>
      <div className="columnas">
          <section className="bienvenidos">
              <h2>Bienvenidos</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                  Culpa maiores ut provident? Ullam repudiandae veritatis obcaecati. 
                  Fugiat quod voluptatem excepturi doloribus itaque suscipit,
                  nobis sequi veritatis incidunt optio quidem ipsum? 
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                  Culpa maiores ut provident? Ullam repudiandae veritatis obcaecati. 
                  Fugiat quod voluptatem excepturi doloribus itaque suscipit,
                  nobis sequi veritatis incidunt optio quidem ipsum?</p>
          </section>
          <section className="testimonios">
              <h2>Testimonios</h2>
              <div className="testimonio">
                  <span className="cita">Simplemente Excelente</span>
                  <span className="autor">Juan Gomez - zapatos.com</span>
              </div>
          </section>
      </div>
    </main>
  )
}

export default HomePage