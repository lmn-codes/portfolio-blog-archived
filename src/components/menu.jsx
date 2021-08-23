import React from 'react'

function MenuBar() {
    return (
        <div id="menu-bar">
            <div className="logo">
                <p>L</p>
                <p>I</p>
                <p>N</p>
                <p>H</p>
            </div>
            <div className="sections-summary">
                <p><a href="#intro-section"><span className="section-number">1. </span> Introduction</a></p>
                <p><a href="#projects-section"><span className="section-number">2. </span> Projects</a></p>
                <p><a href="#about-section"><span className="section-number">3. </span> About Me</a></p>
                <button className="contact-button">
                    Let's talk!
                </button>
            </div>
        </div>
    )
}

export default MenuBar