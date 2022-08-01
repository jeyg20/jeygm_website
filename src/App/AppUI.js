import React from "react";
import './App.css';
import { Home } from '../Home';

function AppUI () {
    return (
        <React.Fragment>
            <header>
                <nav class="nav-bar">
                    <ul class="nav-bar-items">
                        <li>
                            <a href="./index.html">Home</a>
                        </li>
                        <li>
                            <a href="./proyects.html">Proyects</a>
                        </li>
                        <li>
                            <a href="./blog.html">Blog</a>
                        </li>
                        <li>
                            <a href="./about.html">About</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </React.Fragment>
    );
}

export { AppUI };
