import React from "react";
import './App.css';

function AppUI () {
    return (
        <React.Fragment>
            <header>
                <nav class="nav-bar">
                    <ul class="nav-bar-items">
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">Proyects</a>
                        </li>
                        <li>
                            <a href="">Blog</a>
                        </li>
                        <li>
                            <a href="">About</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </React.Fragment>
    );
}

export { AppUI };
