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

	// create state for splash screen
	const [preloader, setPreload] = useState(true);
	// check if the window and document objex are there (not SSR)
	useEffect(() => {
		if (!preloader && containerRef) {
			if (typeof window === "undefined" || !window.document) {
				return;
			}
		}
	}, [preloader]);

	// splash screen lasts 3 secs
	const [timer, setTimer] = useState(3);
	const id = useRef(null);

	useEffect(() => {
		id.current = window.setInterval(() => {
			setTimer((time) => time - 1);
		}, 1000);
		return () => clear();
	}, []);

	useEffect(() => {
		if (timer === 0) {
			clear();
		}
	}, [timer]);

	const clear = () => {
		window.clearInterval(id.current);
		setPreload(false);
	};

	// use Locomotive scroll after splash screen
	useLocoScroll(!preloader);

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
