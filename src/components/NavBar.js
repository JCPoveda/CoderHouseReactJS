import React from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

function redirect(link) {
    window.location.replace(link);
}

function NavBar() {
    return <>    
        <div className="topnav">
            <p><Link className="active" to="/" ><strong>Musicians Store</strong></Link></p>
            <p><Link to='/category/Guitarras'>Guitarras</Link></p>
            <p><Link to='/category/Bajos'>Bajos</Link></p>
            <p><Link to='/category/Pianos'>Pianos</Link></p>
            <CartWidget />
        </div>
     </>;
}

export default NavBar;