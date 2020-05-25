import React, {useContext}from 'react'
import AppIcon from '../../common/images/app-icon.png'
import { NavLink, Link } from 'react-router-dom'
import  './Navbar.css'
import { useSelector } from 'react-redux'
import {AuthContext} from '../auth/AuthContext'
import { useHistory } from "react-router-dom";

const Navbar = () => {

    const {cart}=useSelector(s=>s.cartReducer)

    const {user, setUser} = useContext(AuthContext)
    const history = useHistory();


    const handleLogout = ()=>{

        sessionStorage.setItem('loggedUser', '');
        sessionStorage.clear();
        setUser('');
        history.push('/signin')

    }


    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        {user}
            <Link to='/' className="navbar-brand nav-link" >
                <img src={AppIcon} width="50" height="50" className="d-inline-block align-top" alt="" />
                        Mobile Store
             </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav ">

                <li className="nav-item">
                        <NavLink className="nav-link px-4" to='/'>Home</NavLink>
                    </li>
                    {  user?
                    <li className="nav-item">
                        <NavLink className="nav-link px-4"  to='/orders'>Orders</NavLink>
                    </li>: null
                    }
                    <li className="nav-item">
                        <NavLink className="nav-link px-4 cartNOtification" to='/cart'>Cart
                        {cart.length>0 && <span className="cartQuantity">{cart.length}</span>}
                        </NavLink>
                    </li>
                    {
                        user?
                    <li className="nav-item dropdown">
                        <a className="nav-link  px-4 dropdown-toggle" id="navbarDropdown" 
                        role="button" data-toggle="dropdown" 
                        aria-haspopup="true" aria-expanded="false">
                        <span className="fas fa-user"></span>
                           {user}
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <div className="dropdown-item" onClick={handleLogout}>Logout<span className="fas fa-sign-out-alt pl-4" ></span></div>
                        </div>
                    </li>: null
                    }
                    
                   { user?null:
                    <li className="nav-item">
                        <NavLink className="nav-link px-4" to='/signin'>Login</NavLink>
                    </li>
                   }
                </ul>

            </div>
        </nav>

    )
}

export default Navbar