import React from "react";
import "../scss/post.scss";

function Post({ image, text, title }) {
	return (
		<div
			className="card shadow-sm post_all_of_it"
			style={{ borderRadius: "18px" }}>
			<img src={image} alt={title} className="card-img-top" />
			<div className="card-body">
				<h6 className="mt-3">{text}</h6>
			</div>
		</div>
	);
}
export default Post;
