


import React from 'react';

function NavBar() {
    return (
        <nav className="navbar w-screen flex items-center justify-between p-4 bg-blue-600 text-white">
            <div className="navbar-brand">
                <h1 className="text-xl font-bold">Mind Stream</h1>
            </div>
            <div className="navbar-nav">
                <ul className="flex space-x-6">
                    <li>
                        <a href="#home" className="hover:text-blue-200 transition-colors">Home</a>
                    </li>
                    <li>
                        <a href="#about" className="hover:text-blue-200 transition-colors">About</a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:text-blue-200 transition-colors">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}


export default NavBar;