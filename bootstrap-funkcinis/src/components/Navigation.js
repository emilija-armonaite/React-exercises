import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
    return (
        <div className="container">
            <ul className="nav">
                <li className="nav-item mr-3">
                    <Link to="/about">About</Link>
                </li>
                <li className="nav-item mr-3">
                    <Link to="/contact">Contact us</Link>
                </li>
                <li className="nav-item">
                    <Link to="/cart">Cart</Link>
                </li>
            </ul>
        </div>
    )
}
