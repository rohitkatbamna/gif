import React from "react";
import "../scss/post.scss";

function Post({ image, text, title }) {
	return (
		<div
			className="card shadow post_all_of_it"
			style={{ borderRadius: "18px" }}>
			<div className="card-body">
				<img src={image} alt={title} />
				<h1 className="text-left">{text}</h1>
			</div>
		</div>
	);
}
export default Post;
