import React, { useState } from "react";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import "../../scss/comment.scss";

function Commentsection() {
	const [likecounter, setLikecounter] = useState(0);
	const [dislikecounter, setDislikecounter] = useState(0);
	return (
		<div className="comment_section_all_of_it">
			<button
				type="button"
				className="btn btn-primary m-3"
				onClick={() => setLikecounter((prev) => prev + 1)}>
				<img
					src={like}
					alt="like button freepik"
					className="comment_section_image"
				/>
			</button>
			<h1 className="comment_section_counter">{likecounter}</h1>
			<button
				type="button"
				className="btn btn-danger m-3"
				onClick={() => setDislikecounter((prev) => prev + 1)}>
				<img
					src={dislike}
					alt="like button freepik"
					className="comment_section_image"
				/>
			</button>
			<h1 className="comment_section_counter">{dislikecounter}</h1>
		</div>
	);
}
export default Commentsection;
