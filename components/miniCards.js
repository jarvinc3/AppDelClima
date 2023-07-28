import "./css/miniCards.css"

function CardsMini( props) {
  return (
    <main  className="container-card">
            <p className="fecha"> {props.fecha}</p>       
            <div className="imagenes">
                <img className="img1" src={props.imagen} alt="" />
                <img className="img2" src={props.imagen2} alt="" />
            </div>       
            <section className="grados">
                <p className="grado1">{props.gradoA}</p>
                <p className="grado2">{props.gradoB}</p>
            </section>
    </main>
  )
}


function MiniCards() {
  return (
    <div className="container-all-cards">
        <div className="grados-btn"> 
          <button className="grado-celcius">℃</button>
          <button className="grado-farengeit">℉</button>
        </div>
        <div className="mini-cards-container">
          <CardsMini fecha= "Tomorrow" imagen = "./Sleet.png" imagen2= "./Clear.png" gradoA= "16°C" gradoB= "11°C" />
          <CardsMini fecha= "Sun, 7 Jun" imagen = "./Sleet.png" imagen2= "./Clear.png" gradoA= "16°C" gradoB= "11°C" />
          <CardsMini fecha= "Mon, 8 Jun" imagen = "./Thunderstorm.png" imagen2= "./Clear.png" gradoA= "16°C" gradoB= "11°C" />
          <CardsMini fecha= "Tue, 9 Jun" imagen = "./LightCloud.png" imagen2= "./pum.jpg" gradoA= "16°C" gradoB= "11°C" />
          <CardsMini fecha= "Wed, 10 Jun" imagen = "./HeavyRain.png" imagen2= "./pum.jpg" gradoA= "16°C" gradoB= "11°C" />
        </div>
    </div>
  )
}

export default MiniCards