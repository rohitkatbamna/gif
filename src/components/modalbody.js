import React from "react";
import profileimg from "../assets/user.png";
import "../scss/modalbody.scss";

function Modalbody() {
	return (
		<div className="modal_body_all_of_it">
			<img
				src={profileimg}
				alt="default profile face freepik"
				height="50"
				width="50"
			/>
			<div class="form-floating">
				<textarea
					class="form-control"
					placeholder="Leave a comment here"
					id="floatingTextarea2"
					style={{ height: "10vw" }}></textarea>
				<label for="floatingTextarea2">Something on your mind...</label>
			</div>
		</div>
	);
}
export default Modalbody;
