import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <NavLink to="/" exact className="navbar-brand text-light">Poll Master</NavLink>
            <ul className="navbar-nav ml-auto pr-5">
                <li className="nav-item active">
                    <NavLink to="/create" className="nav-link text-light" title="Create a Poll">Create</NavLink>
                </li>
            </ul>
            <form className="form-inline">
                <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Sign In</button>
            </form>
        </nav>
    )
}

export default Navbar;