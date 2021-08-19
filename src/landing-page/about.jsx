// import React, { Component } from "react";

// function About() {
// 	return (<div data-scroll-section></div>);
// }

// export default About;
import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";

import gsap from "gsap";
import SplitText from "./../utils/split3.min";
import useOnScreen from "./../hooks/useOnScreen";
import Techstack from "../components/techstack";

export default function About() {
	const ref = useRef(null);

	const [reveal, setReveal] = useState(false);
	const onScreen = useOnScreen(ref);

	useEffect(() => {
		if (onScreen) setReveal(onScreen);
	}, [onScreen]);

	useEffect(() => {
		const split = new SplitText("#headline", {
		  type: "lines",
		  linesClass: "lineChildren",
		});
		
		const splitParent = new SplitText("#headline", {
		  type: "lines",
		  linesClass: "lineParent",
		});
	
		gsap.to(split.lines, {
		  duration: 1,
		  y: 0,
		  opacity: 1,
		  stagger: 0.5,
		  ease: "power2",
		});
	  }, [reveal]);
	

	return (
		<section
			className={cn("about section wrapper", { "is-reveal": reveal })}
			data-scroll-section
		>
			<p ref={ref} id="headline" className={cn({ "is-reveal": reveal })}>
				This is all about me
			</p>

			<Techstack />
		</section>
	);
}
