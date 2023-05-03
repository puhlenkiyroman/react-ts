import React from 'react';
import {Link} from "react-router-dom";

function Navigation() {
    return (
        <nav className="flex justify-between px-4 h-[50px] bg-gray-200 items-center shadow-md">
            <div className="flex items-center">
                <div className="mr-3">
                    <Link to="/">Quotes</Link>
                </div>
                <div className="mr-auto">
                    <Link to="/categories">Categories</Link>
                </div>
            </div>
            <div>
                <Link to="/auth">Auth</Link>
            </div>
        </nav>
    );
}

export default Navigation;