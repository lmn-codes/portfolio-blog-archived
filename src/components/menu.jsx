import React, { useState } from "react";

function MenuBar() {
	const [showMenu, setShowMenu] = useState(false);

	return (
		<div id="menu-bar">
			<div className="logo">
				<p>L</p>
				<p>I</p>
				<p>N</p>
				<p>H</p>
			</div>
			<div className="sections-summary">
				<p>
					<a href="#intro-section" className="section-anchor">
						<span className="section-number">1. </span> Introduction
					</a>
				</p>
				<p>
					<a href="#projects-section" className="section-anchor">
						<span className="section-number">2. </span> Projects
					</a>
				</p>
				<p>
					<a href="#about-section" className="section-anchor">
						<span className="section-number">3. </span> About Me
					</a>
				</p>
				<p>
					<a href="https://github.com/LinhNguyen-511">
						GitHub
					</a>
				</p>
				<p>
					<a href="./../CV-LinhNguyen.pdf" download>
						Download my CV
					</a>
				</p>

				<div className="menu-contacts">
					<button className="contact-button" onClick={()=>setShowMenu(!showMenu)}>
						Let's talk!
					</button>

					{showMenu ? (
						<div className="drop-down-menu">
							<button className="contact-button">
								<a href="https://www.linkedin.com/in/linhnguyen511/">
									Linkedin
								</a>
							</button>
							<button className="contact-button">
								<a href="mailto:mlinhng05@gmail.com">Email</a>
							</button>
							<button className="contact-button">
								+31 641942871
							</button>
						</div>
					) : null}
				</div>
			</div>
		</div>
	);
}

export default MenuBar;
