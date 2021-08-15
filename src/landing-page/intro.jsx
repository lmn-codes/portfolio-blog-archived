import React, { Component, useState, useEffect, createRef } from "react";
import lottie from "lottie-web";
import Baffle from "baffle-react";

import animation from "./../components/intro-animation.json";

function Intro() {
	// animation with lottie
	let animationContainer = createRef();
	useEffect(() => {
		const anim = lottie.loadAnimation({
			container: animationContainer.current,
			renderer: "svg",
			loop: true,
			autoplay: true,
			animationData: animation,
		});
		return () => anim.destroy(); // optional clean up for unmounting
	}, []);


	return (
		<div className="intro section wrapper">
			<div className="intro-text">
				<Baffle
					update={true}
					obfuscate={false}
					revealDuration={2000}
					revealDelay={0}
				>
					The Front-end developer you are looking for.
				</Baffle>
				<h2>I build awesome-looking, scalable and robust webapps.</h2>
			</div>
			<div
				className="intro-animation-container "
				ref={animationContainer}
			></div>
		</div>
	);
}

export default Intro;
