import React, { useRef, useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image"
import cn from "classnames";

import useOnScreen from "./../hooks/useOnScreen";

function ProjectTeaser({
	imageUrl,
	header,
	projectName,
	summary,
	link,
	tech,
	updateActiveImage,
	index,
}) {
	const ref = useRef(null);
	const onScreen = useOnScreen(ref, "-25%");
	const imageSrc = imageUrl

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
			<div></div>
			<div className={"project-teaser"}>
				<div className="project-info">
					<h1 className="project-info-header">{header}</h1>
					<h2 className="project-info-name">{projectName}</h2>
					<p className="project-info-summary">{summary}</p>
				</div>
				<div
					className="project-image"
					style={{ backgroundImage: `url(${imageUrl})` }}
				>
				
				</div>
			</div>
			<div></div>
		</div>
	);
}

export default ProjectTeaser;
