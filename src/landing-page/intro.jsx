import React, { Component, useState, useEffect, createRef } from "react";
import lottie from "lottie-web";
import Baffle from "baffle-react";

import animation from "./../components/intro-animation.json";
import SplitText from "./../components/split-text";

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

	const introSecondaryText =
		"I build attractive, scalable and robust webapps.";

	return (
		<div className="intro section wrapper">
			<div className="intro-text">
				<Baffle
					update={true}
					obfuscate={false}
					revealDuration={1000}
					revealDelay={0}
				>
					The Front-end developer you are looking for.
				</Baffle>
				<h2 className="split-text">
					<SplitText string={introSecondaryText}></SplitText>
				</h2>
			</div>
			<div
				className="intro-animation-container"
				ref={animationContainer}
			></div>
		</div>
	);
}

export default Intro;
