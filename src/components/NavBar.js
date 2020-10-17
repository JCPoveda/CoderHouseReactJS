import React from 'react';

function redirect(link) {
    window.location.replace(link);
}

function NavBar() {
    return <>    
        <div className="topnav">
            <p class="active" onClick={ () => redirect("#home") }><strong>Musicians Store</strong></p>
            <p onClick={ () => redirect("#Ofertas") }>Ofertas</p>
            <p onClick={ () => redirect("#Guitarras") }>Guitarras</p>
            <p onClick={ () => redirect("#Bajos") }>Bajos</p>
            <p onClick={ () => redirect("#Baterias") }>Baterias</p>
            <p onClick={ () => redirect("#Pianos") }>Pianos</p>
            <p onClick={ () => redirect("#Contacto") }>Contacto</p>
        </div>
     </>;
}

export default NavBar;