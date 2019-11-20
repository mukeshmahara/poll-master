import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand">Poll Master</a>
            <form className="form-inline">
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Sign In</button>
            </form>
        </nav>
    )
}
        
export default Navbar;