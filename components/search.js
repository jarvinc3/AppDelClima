import "./css/search.css"


export default function Search() {

  function aparecer() {
    const desaparece = document.querySelector("#containerNav")

    desaparece.classList.add("active")
    
  }

  return (
    <nav className="container-nav active" id="containerNav" >
      <div className="close-div">
        <span onClick={aparecer} class="material-symbols-outlined icon-close">close</span>
      </div>
      <div className="busqueda">
        <input className="input" type="text" placeholder="search location"/>
        <button className="btn-search" >search</button>
      </div>
      <div className="listas-container" >
        <ul>
          <li>London</li>
          <li>Barcelona</li>
          <li>Long Beach</li>
        </ul>
      </div>
    </nav>
  )
}

