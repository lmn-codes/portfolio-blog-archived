import React, { useEffect, createRef } from "react";
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
	});

	const introSecondaryText =
		"I build attractive, scalable and robust webapps";

	return (
		<section data-scroll-section id="intro-section" className="intro section wrapper">
			<div className="intro-text">
				<Baffle
					update={true}
					obfuscate={false}
					revealDuration={2000}
					revealDelay={0}
					characters={"AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz"}
				>
					The Web developer you are looking for
				</Baffle>
				<h2 className="split-text">
					<SplitText string={introSecondaryText} delay={2}></SplitText>
				</h2>
			</div>
			<div
				className="intro-animation-container"
				ref={animationContainer}
			></div>
		</section>
	);
}

export default Intro;
