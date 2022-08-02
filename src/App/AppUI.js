import React from "react";
import './App.css';
import { Home } from "../Home";
import { Blog } from "../Blog";

function AppUI () {
    let Component
    switch (window.location.pathname) {
        case "/Home":
            Component = Home;
            break;
        case "/Blog":
            Component = Blog;
            break;
        default:
            Component = Home
            break;
    }
    return (
        <React.Fragment>
            <header>
                <nav class="nav-bar">
                    <ul class="nav-bar-items">
                        <CustomLink href="/Home">Home</CustomLink>
                        <CustomLink href="/Blog">Blog</CustomLink>
                    </ul>
                </nav>
            </header>
            <main>
                <Component/>
            </main>
        </React.Fragment>
    );
}

function CustomLink({ href, children, ...props}) {
    const path = window.location.pathname;
    return (
        <li className={path === href ? "active" : ""}>
            <a href={href} {...props} >{children}</a>
        </li>
    )
}

export { AppUI };
