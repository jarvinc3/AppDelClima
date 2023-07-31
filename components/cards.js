import "../components/css/cards.css"
import { useEffect, useState } from "react"


function MediumCard(cont) {
  return (
    <div className="only-card">
      <section className="dato1">
        <p>{cont.dato1}</p>
      </section>
      <section className="dato2">
        <h3>{cont.dato2}</h3>
        <p>{cont.datoAdd}</p>
      </section>
      <section className="dato3">
        <p>{cont.dato3}</p>
      </section>
    </div>
  )
}

function LowCards(cont) {
  return (
    <div className="only-card-low">
      <section className="dato1">
        <p>{cont.dato1}</p>
      </section>
      <section className="dato2">
        <h3>{cont.dato2}</h3>
        <p className="datoP">{cont.datoAdd}</p>
      </section>
    </div>
  )
}

export default function Cards()  {
  const KEY = "015377a0be139009cc8b4ded78d23a1b";
    const city = "london";
    const [datos, setDatos] = useState();

    useEffect(() => {
        const promesa = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}&units=metric`)
        Promise.all([promesa]).then(async (values) => {
            const data = await values[0].json();
            setDatos(data);
        })
    }, []); 

 

  return (
    <main className="principal-container">
      <h1>Today’s Hightlights</h1>
      <div className="cards-container">
        <MediumCard dato1= "Wind status"  dato2={datos?.wind.speed} datoAdd= " mph" dato3= " WSW" />
        <MediumCard dato1= "Humidity"  dato2= {datos?.main.humidity} datoAdd= " %" dato3= "barra" /> 
        <LowCards dato1= "Visibility"  dato2= "6,4 " datoAdd= " milles" /> 
        <LowCards dato1= "Air Presure"  dato2={datos?.main.pressure} datoAdd= " mb" /> 
      </div>
      </main>
  )
}
