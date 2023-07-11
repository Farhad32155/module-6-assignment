import React from 'react';

const Header = ({ headerTitle }) => {
    return (
        <div>
            <header>
                <h1>{headerTitle}</h1>
                <nav>
                    <ul class="header-links">
                        <li className="headerLink"><a href="#">Home</a></li>
                        <li className="headerLink"><a href="#">About</a></li>
                        <li className="headerLink"><a href="#">Services</a></li>
                        <li className="headerLink"><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;