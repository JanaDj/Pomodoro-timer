import React from 'react'
import 'materialize-css/dist/css/materialize.min.css';

function Header() {
    return (
        <nav>
            <div class="nav-wrapper">
                <a className="brand-logo">Pomodoro</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li> <a> Timer </a></li>
                    <li> <a> About </a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;