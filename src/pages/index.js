import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import useLocoScroll from "./../hooks/useLocoScroll";
import Intro from "./../landing-page/intro";
import Projects from "./../landing-page/projects";
import About from "./../landing-page/about";


gsap.registerPlugin(ScrollTrigger);
function IndexPage() {
	const containerRef = useRef(null);

	const [preloader, setPreload] = useState(true);

	useLocoScroll(!preloader);

	useEffect(() => {
		if (!preloader && containerRef) {
			if (typeof window === "undefined" || !window.document) {
				return;
			}
		}
	}, [preloader]);

	const [timer, setTimer] = React.useState(1);

	const id = React.useRef(null);

	const clear = () => {
		window.clearInterval(id.current);
		setPreload(false);
	};

	React.useEffect(() => {
		id.current = window.setInterval(() => {
			setTimer((time) => time - 1);
		}, 1000);
		return () => clear();
	}, []);

	React.useEffect(() => {
		if (timer === 0) {
			clear();
		}
	}, [timer]);

	if (typeof window === "undefined" || !window.document) {
		return null;
	}

	return (
		<>
			{preloader ? (
				<div className="loader-wrapper absolute">
					<h1>Linh</h1>
				</div>
			) : (
				<main
					className="main-container"
					id="main-container"
					data-scroll-container
					ref={containerRef}
				>
					<Intro />

					<Projects />

					<About />
				</main>
			)}
		</>
	);
}

export default IndexPage;
