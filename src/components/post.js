import React from "react";
import "../scss/post.scss";

function Post({ image, text, title }) {
	return (
		<div
			className="card shadow-sm post_all_of_it"
			style={{ borderRadius: "18px" }}>
			<img src={image} alt={title} className="card-img-top" />
			<div className="card-body">
				<p className="mt-3 fs-5" style={{ fontWeight: "600" }}>
					{text}
				</p>
			</div>
		</div>
	);
}
export default Post;
