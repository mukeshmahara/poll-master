import React from 'react';

const Navbar = () => {
    return (
        <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand">Poll Master</a>
            <form class="form-inline">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Sign In</button>
            </form>
        </nav>
    )
}
        
export default Navbar;