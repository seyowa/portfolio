import React from 'react';
import Logo from './Logo';


const Header = () => {
    return (
        <header className='header'>
            <nav className='container mx-auto flex justify-between items-center'>
                <Logo />
                <ul className='flex space-x-4'>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#<about>">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>

                </ul>
            </nav>
        </header>
    );
};

export default Header;