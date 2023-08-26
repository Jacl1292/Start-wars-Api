import { Link } from "react-router-dom";
import React from "react";
import './navbar.css';
import starWarsLogo from '../imag/Star-Wars-Logo-psd35718.jpg';
import malvado from '../imag/malvadosw.jpg';
let selectedLink= 0;
export const Navbar = () => {
    //const [selectedLink, setSelectedLink] = useState(0);

    const handleLinkClick = (index) => {
        selectedLink =index;
    };
    return (

          
            <div className=" row bg-dark">
                <div className="imag1 col-3 opacity-75">
                    <img src={starWarsLogo} alt="Star Wars Logo" />
                </div>
                <div className="menu col-6 mt-3">
                    <ul className="nav nav-tabs justify-content-center">
                        <li className="nav-item ">
                            <Link className={`nav-link  text-warning ${selectedLink === 0 ? 'active' : ''}`} to="/" onClick={() => handleLinkClick(0)}>Principal</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link  text-warning ${selectedLink === 1 ? 'active' : ''}`} to="/Planet" onClick={() => handleLinkClick(1)}>Planetas</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link  text-warning ${selectedLink === 2 ? 'active' : ''}`} to="/Vehicle" onClick={() => handleLinkClick(2)}>autos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link  text-warning ${selectedLink === 3 ? 'active' : ''}`} to="/People" onClick={() => handleLinkClick(3)}>Personas</Link>
                        </li>
                    </ul>
                </div>
                <div className="imag2 col-2 justify-content-end">
                    <img src={malvado} alt="malvado" />
                </div>
            </div>
        
    )


}
export default Navbar;



