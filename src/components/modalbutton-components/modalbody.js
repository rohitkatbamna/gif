import React, { useState } from "react";
import profileimg from "../../assets/user.png";
import "../../scss/modalbody.scss";
import Gif from "./modalbody-components/gif";

function Modalbody({
	setPostobj,
	setTextmsg,
	setGifurl,
	setGifalt,
	gifurl,
	gifalt,
}) {
	const [wantgif, setWantgif] = useState(false);
	function handleChange(event) {
		setTextmsg(event.target.value);
	}

	return (
		<>
			<div className="modal_body_all_of_it">
				<img
					src={profileimg}
					alt="default profile face freepik"
					height="50"
					width="50"
				/>
				<input type="text" onChange={handleChange} id="posttext" />
			</div>
			{gifurl === "" ? (
				<></>
			) : (
				<img
					src={gifurl}
					alt={gifalt}
					className="mt-5"
					height="auto"
					width="300"
				/>
			)}
			<div className="mt-5 text-center">
				<button
					type="button"
					className="btn btn-primary"
					onClick={() => setWantgif(wantgif ? false : true)}>
					Gif
				</button>
				{wantgif ? <Gif setGifurl={setGifurl} setGifalt={setGifalt} /> : <></>}
			</div>
		</>
	);
}
export default Modalbody;
