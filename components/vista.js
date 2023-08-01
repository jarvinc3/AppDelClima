import { useEffect, useState } from "react"
import "../components/css/vista.css"
import Image from "next/image";


function Vista({datos, updateMyLocation, imagen, unit}) {

    function desaparecer() {
        const desaparece = document.querySelector("#containerNav")
  
        desaparece.classList.remove("active")
        
      }

    const handleMyLocationClick = () => {
        updateMyLocation();
      };
    
    
  return (
    <div className='container-principal'>

        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,1,0" />
        <section className='superior-section'>
            <div className="search-btn">
                <button onClick={desaparecer} className="open-search">Search for places</button>
            </div>
            <div className="my_location_container">
            <span  onClick={handleMyLocationClick}  class="material-symbols-outlined my-location">my_location</span>
            </div>
        </section>

        <section className='mid-superior-section'>
            <div className="background"></div>
            <div className="clima-grafic">
            <Image src={imagen} alt="" width={150} height={174} />
            </div>
        </section >

        <section  className='mid-inferior-section'>
            <div className="grados-container">
                <h1>{datos?.main.temp}</h1>
                <p>{unit === 'metric' ? '°C' : '°F'}</p>
            </div>
            <div className="snower">
                <h2>{datos?.weather[0].main}</h2>
            </div>
        </section>

        <section className='inferior-section'>
            <div className="date">
                <p className="today">Today</p>
                <p className="all-date">Fri, 5 Jun</p>
            </div>
            <div className="location-on">
                <span class="material-symbols-outlined location-on">location_on</span>
                <p>{datos?.name}</p>
            </div>
        </section>
    </div>
  )
}

export default Vista