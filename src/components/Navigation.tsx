import React from 'react';
import {Link} from "react-router-dom";

function Navigation() {
    return (
        <nav className="flex justify-between px-5 h-[50px] bg-gray-200 items-center shadow-md">
            <div className="justify-self-auto">
                <Link to="/"> Quotes </Link>
                <Link to = "/categories" className=""> Categories </Link>
            </div>
        </nav>
    );
}

export default Navigation;