import React, { Component, useEffect, createRef } from "react";
import lottie from 'lottie-web'

import animation from "./../components/intro-animation.json" 

function Intro() {
	let animationContainer = createRef()
	useEffect(() => {
		const anim = lottie.loadAnimation({
		  container: animationContainer.current,
		  renderer: "svg",
		  loop: true,
		  autoplay: true,
		  animationData: animation
		});
		return () => anim.destroy(); // optional clean up for unmounting
	  }, []);
	return (
		<div className="intro section wrapper">
			<div className="intro-text"> 
				<h1>The Front-end developer you are looking for.</h1>
				<h2>I build awesome-looking, scalable and robust webapps.</h2>	
			</div>
			<div className="animation-container" ref={animationContainer}></div>	
		</div>
		);
}

export default Intro;
