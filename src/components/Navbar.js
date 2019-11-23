import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../assets/pollmaster-logo.svg';

const Navbar = () => {
    return (
            <nav className="navbar navbar-light bg-light">
                <NavLink to="/" exact className="navbar-brand text-light"><img src={logo} alt="Logo" className="logo" />Poll Master</NavLink>
                <ul className="navbar-nav ml-auto pr-5">
                    <li className="nav-item active">
                        <NavLink to="/create" className="nav-link text-light" title="Create a Poll">Create</NavLink>
                    </li>
                </ul>
                <form className="form-inline">
                    <button className="btn btn-outline-light my-2 my-sm-0 " type="submit" title="Sorry, it's under construction, Sign in Functionality to be added in the future" disabled>Sign In</button>
                </form>
            </nav>
    )
}

export default Navbar;