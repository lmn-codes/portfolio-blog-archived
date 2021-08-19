import React from "react";
import techs from "./../libraries/techstack-library";

function Techstack() {
	return (
		<div className="techstack-wrapper">
            <p>{techs.length}</p>
			{techs.map(function(tech, index) {
				return (
					<div
                        key={index}
                        className="tech"
					>
                        <img className="tech-logo" src={tech.logo} alt="" />
                        <p>{tech.name}</p>
                    </div>
				);
			})}
		</div>
	);
}

export default Techstack;
