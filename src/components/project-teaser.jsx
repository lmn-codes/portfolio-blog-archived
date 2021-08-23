import React, { useRef, useEffect } from "react";
import cn from "classnames";

import useOnScreen from "./../hooks/useOnScreen";

function ProjectTeaser({
	imageUrl,
	header,
	projectName,
	summary,
	links,
	techs,
	updateActiveImage,
	index,
}) {
	const ref = useRef(null);
	const onScreen = useOnScreen(ref, "-25%");

	useEffect(() => {
		if (onScreen) {
			updateActiveImage(index);
		}
	}, [onScreen, index]);

	return (
		<div
			className={cn("project-wrapper", { "is-reveal": onScreen })}
			ref={ref}
		>
			<div className="project-techstack">
				{techs.map(function(tech, index) {
					return (
						<div className="tech" key={index}>
							<p className="tooltip">{tech.name}</p>
							<img
								className="tech-logo"
								src={tech.logoUrl}
								alt=""
							/>
						</div>
					);
				})}
			</div>
			<div className="project-teaser">
				<div className="project-info">
					<h1 className="project-info-header">{projectName}</h1>
					<h2 className="project-info-title">{header}</h2>
					<p className="project-info-summary">{summary}</p>
					<div className="project-links">
						{links.map(function(link, index) {
							return (
								<div className="project-link" key={index}>
									<a href={link.url} target="_blank">{link.callToAction}</a>
								</div>
							);
						})}
					</div>
				</div>

				<img className="project-image" src={imageUrl} alt="" />
			</div>
		</div>
	);
}

export default ProjectTeaser;
