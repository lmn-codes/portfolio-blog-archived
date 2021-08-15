import React from "react";

function SplitText({string}) {
	return (
		<span>
			{string.split("").map(function(char, index) {
				// start animation after this amount of time
				let style = { "animation-delay": 1.25 + index / 10 + "s" };
				return (
					<span aria-hidden="true" key={index} style={style}>
						{char}
					</span>
				);
			})}
		</span>
	);
}

export default SplitText;
