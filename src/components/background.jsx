import React, { useState, useRef, useEffect } from "react";
import cn from "classnames";
import gsap from "gsap";

import useOnScreen from "../hooks/useOnScreen";
import SplitText from "../utils/split3.min";
import techs from "../libraries/techstack-library";

function Techstack() {
	const ref = useRef(null);

	const [reveal, setReveal] = useState(false);
	const onScreen = useOnScreen(ref);

	useEffect(() => {
		if (onScreen) setReveal(onScreen);
	}, [onScreen]);

	useEffect(() => {
		const split = new SplitText("#summary", {
			type: "lines",
			linesClass: "lineChildren",
		});

		const splitParent = new SplitText("#summary", {
			type: "lines",
			linesClass: "lineParent",
		});

		gsap.to(split.lines, {
			duration: 1,
			y: 0,
			opacity: 1,
			stagger: 0.25,
			ease: "power2",
		});
	}, [reveal]);

	return (
		
		<div className="background-grid">
			{/* summary about me in the middle of the grid */}
			<p ref={ref} id="summary" className={cn({ "is-reveal": reveal })}>
				<span className="about-me-title">About me</span> <br/>
				Although any area within web development is my playground, 
				I have the most fun crafting features and implementing 
				advanced design. Because of that, I always aim for a pleasant, intuitive and attractive user experience <br/>
				<span className="objective">
					I am looking for an opportunity to work on complex  
					projects with large user base as I want to explore topics like: 
					state management, security and interactice websites
				</span>
			</p>

			{/*tech I use dispersed around summary about me */}
			{techs.map(function(tech, index) {
				return (
					<div
						key={index}
						className="tech"
						style={{
							gridArea: `${tech.rowStart}/${tech.colStart}/${tech.rowEnd}/${tech.colEnd}`,
						}}
					>
						<p className="tooltip">{tech.name}</p>
						<img className="tech-logo" src={tech.logo} alt="" />
					</div>
				);
			})}
		</div>
	);
}

export default Techstack;
