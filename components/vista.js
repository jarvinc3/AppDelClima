import "../components/css/vista.css"


function Vista() {
  return (
    <div className='container-principal'>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,1,0" />
        <section className='superior-section'>
            <div className="search-btn">
                <button className="open-search">Search for places</button>
            </div>
            <div className="my_location_container">
            <span class="material-symbols-outlined my-location">my_location</span>
            </div>
        </section>

        <section className='mid-superior-section'>
            <div className="background"></div>
            <div className="clima-grafic">
            <img src="./Shower.png" alt="" />
            </div>
        </section >

        <section  className='mid-inferior-section'>
            <div className="grados-container">
                <h1>15</h1>
                <p>°C</p>
            </div>
            <div className="snower">
                <h2>Snower</h2>
            </div>
        </section>

        <section className='inferior-section'>
            <div className="date">
                <p className="today">Today</p>
                <p className="all-date">Fri, 5 Jun</p>
            </div>
            <div className="location-on">
                <span class="material-symbols-outlined location-on">location_on</span>
                <p>Helsinki</p>
            </div>
        </section>
    </div>
  )
}

export default Vista