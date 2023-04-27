import React from 'react';
import {Link} from "react-router-dom";

function Navigation() {
    return (
        <nav className="flex justify-between px-5 h-[50px] bg-gray-200 items-center shadow-md">
            <Link to="/"> Quotes </Link>
        </nav>
    );
}

export default Navigation;