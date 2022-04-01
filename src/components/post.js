import React from "react";
import "../scss/post.scss";

function Post({ image, text, title }) {
	return (
		<div
			className="card shadow post_all_of_it"
			style={{ borderRadius: "18px" }}>
			<div className="card-body">
				<img src={image} alt={title} />
				<h6 className="text-left">{text}</h6>
			</div>
		</div>
	);
}
export default Post;
