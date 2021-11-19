import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsFillBagFill } from 'react-icons/bs';


const Navbar = () => {
    return (
        <>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">



                        <nav className="navbar navbar-expand-md  bg-light" >
                            <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">
                                        <a className="nav-link side-nav" href="#" >Menu</a>
                                    </li>
                                    {/* <li className="nav-item">
                                        <a className="nav-link" href="//codeply.com">Codeply</a>
                                    </li> */}

                                </ul>
                            </div>
                            <div className="mx-auto order-0">
                                <a className="navbar-brand mx-auto bolder" href="#" >Ritual</a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                            </div>
                            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                                <ul className="navbar-nav ml-auto">

                                    <li className="nav-item rightSec">
                                        <a className="nav-link side-nav " href="#" >Who We Are    </a>
                                        <a href="#" className="nav-icon"><BsFillBagFill /></a>
                                    </li>
                                </ul>
                            </div>
                        </nav>






                    </div>
                </div>

            </div >

        </>
    )
}

export default Navbar
