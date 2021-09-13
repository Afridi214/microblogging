import React from 'react';
import { Link, NavLink } from 'react-router-dom';



const Navbar = () => {
    return (


        <nav className="navbar navbar-expand-lg navbar-dark bg-light">
            <div className="container">



                <div class="logo"><NavLink className="nav-link navbar-brand text-dark" aria-current="page" exact to="/">My BloG</NavLink></div>

                <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                    <li className="nav-item">
                        <NavLink className="nav-link navbar-brand text-dark" to="/user/view">User Profile</NavLink>
                    </li>
                   




                </ul>





                <Link className="btn btn-primary" to="/user/add">Registration</Link>
              
            </div>
        </nav>

    );
};

export default Navbar;