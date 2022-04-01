import React from "react";

function Post({ image, text, title }) {
	return (
		<div className="card shadow" style={{ borderRadius: "18px" }}>
			<div className="card-body">
				<img src={image} alt={title} height="auto" width="auto" />

				<h6 className="text-left">{text}</h6>
			</div>
		</div>
	);
}
export default Post;
