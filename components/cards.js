import "../components/css/cards.css"


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
  return (
    <main className="principal-container">
      <h1>Today’s Hightlights</h1>
      <MediumCard dato1= "Wind status"  dato2= "7 " datoAdd= " mph" dato3= " WSW" />
      <MediumCard dato1= "Humidity"  dato2= "84 " datoAdd= " %" dato3= "barra" /> 
      <LowCards dato1= "Visibility"  dato2= "6,4 " datoAdd= " milles" /> 
      <LowCards dato1= "Air Presure"  dato2= "998 " datoAdd= " mb" /> 
      </main>
  )
}
