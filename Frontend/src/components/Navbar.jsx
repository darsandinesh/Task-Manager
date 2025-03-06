import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

    const navigate = useNavigate();
    const handelLogOut = () => {
        localStorage.removeItem('token')
        navigate('/');
    }
    return (
        <nav className="navbar">
            <div className="logo">Task Manager</div>
            <ul className="nav-links">
                <li style={{ cursor: 'pointer' }} onClick={handelLogOut}>LogOut</li>
            </ul>
        </nav>
    );
};

export default Navbar;
