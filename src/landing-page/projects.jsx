import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import projects from "./../libraries/projects-library";
import ProjectTeaser from "./../components/project-teaser";

function Projects() {
	const [activeProject, setActiveProject] = useState(1);

	const ref = useRef(null);

	useEffect(() => {
		// This does not seem to work without a settimeout
		// console.log(ref.current.offsetWidth);
		// console.log(ref.current.clientWidth);
		// console.log({ current: ref.current });

		setTimeout(() => {
			let sections = gsap.utils.toArray(".project-wrapper");

			gsap.to(sections, {
				xPercent: -100 * (sections.length - 1),
				ease: "none",
				scrollTrigger: {
					start: "top top",
					pin: true,
					// scrub: 1,
					// markers:true,
					scrub: 0.5,
					snap: 1 / (sections.length - 1),
					trigger: ref.current,
					scroller: "#main-container",
					end: () => `+=${ref.current.offsetWidth}`,
				},
			});
			ScrollTrigger.refresh();
		});
	}, []);
	const handleUpdateActiveImage = (index) => {
		setActiveProject(index + 1);
	};

	return (
		<section
			data-scroll-section
			id="projects-section"
			className="projects section wrapper"
		>
			<div className="projects-container" ref={ref}>
				<div className="project-teaser-counter">
					<span>{activeProject}</span>
					<span className="divider"></span>
					<span>{projects.length}</span>
				</div>

				{/* render the projects */}
				{projects.map((project, index) => {
					return (
						<ProjectTeaser
							key={project.projectName}
							index={index}
							{...project}
							updateActiveImage={handleUpdateActiveImage}
						/>
					);
				})}
			</div>
		</section>
	);
}

export default Projects;
