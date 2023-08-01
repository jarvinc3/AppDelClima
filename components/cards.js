import "../components/css/cards.css"
import { useEffect, useState } from "react"
import Image from "next/image";


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
        <span className="span">{cont.datoI}</span>
        <p>{cont.dato3}</p>
        {cont.datoBarra}
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

export default function Cards({ datos }) {

  const porcentaje = datos?.main.humidity

  return (
    <main className="principal-container">
      <h1>Today’s Hightlights</h1>
      <div className="cards-container">
        <MediumCard dato1="Wind status" dato2={datos?.wind.speed} datoAdd=" mph" datoI={<span class="material-symbols-outlined icon">near_me</span>} dato3=" WSW" />
        <MediumCard dato1="Humidity" dato2={datos?.main.humidity} datoAdd=" %" datoBarra={
          <div className="barra-interactiva">
            <div className="numbers">
              <p>0</p> <p>50</p> <p>100</p>
            </div><div className="barra-porcentual">
              <div className="amarillo" style={{ width: `${porcentaje}%` }} ></div></div>
            <div className="porcentaje-humedad">
              <p>%</p> </div>
          </div>}
        />
        <LowCards dato1="Visibility" dato2={Math.round(datos?.visibility / 1609.34)} datoAdd=" milles" />
        <LowCards dato1="Air Presure" dato2={datos?.main.pressure} datoAdd=" mb" />
      </div>
    </main>
  )
}

