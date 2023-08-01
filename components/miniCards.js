import "./css/miniCards.css"
import Image from "next/image";

function CardsMini( props) {
  return (
    <main  className="container-card">
            <p className="fecha"> {props.fecha}</p>       
            <div className="imagenes">
                <Image className="img1" src={props.imagen} alt="" width={56.43946075439453} height={60} />
                <Image className="img2" src={props.imagen2} alt="" width={35} height={35} />
            </div>       
            <section className="grados">
                <p className="grado1">{props.gradoA}</p>
                <p className="grado2">{props.gradoB}</p>
            </section>
    </main>
  )
}


function MiniCards( {unit, setUnit} ) {
  return (
    <div className="container-all-cards">
        <div className="grados-btn"> 
        <button className="grado-celcius" onClick={() => setUnit('metric')}>℃</button>
        <button className="grado-farengeit" onClick={() => setUnit('imperial')}>℉</button>
        </div>
        <div className="mini-cards-container">
          <CardsMini fecha= "Tomorrow" imagen = "/Sleet.png" imagen2= "/Clear.png" gradoA= "16°C" gradoB= "11°C" />
          <CardsMini fecha= "Sun, 7 Jun" imagen = "/Sleet.png" imagen2= "/Clear.png" gradoA= "16°C" gradoB= "11°C" />
          <CardsMini fecha= "Mon, 8 Jun" imagen = "/Thunderstorm.png" imagen2= "/Clear.png" gradoA= "16°C" gradoB= "11°C" />
          <CardsMini fecha= "Tue, 9 Jun" imagen = "/LightCloud.png" imagen2= "/pum.jpg" gradoA= "16°C" gradoB= "11°C" />
          <CardsMini fecha= "Wed, 10 Jun" imagen = "/HeavyRain.png" imagen2= "/pum.jpg" gradoA= "16°C" gradoB= "11°C" />
        </div>
    </div>
  )
}

export default MiniCards