import React from "react";
import './Home.css'

function Home () {
    return (
        <article class="welcome-section">
            <p class="greater-than">&lt;</p>
            <p class="welcome-message">
                Welcome <br/>
                My Name Is <br/>
                Jeison Guerrero</p>
            <p class="less-than">&gt;</p>
        </article>
    );
}

export { Home };
