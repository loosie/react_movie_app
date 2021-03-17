import React from 'react'
import { Link } from 'react-router-dom';
import "./Navigation.css";

function Navigation() {
    return (
        <nav className="navbar">
            <ul className="navbar_menu">
                <Link to="/" className="nav_links">Home</Link>
                <Link to="/about" className="nav_links">About</Link>
            </ul>
        </nav>
    )
}


export default Navigation;