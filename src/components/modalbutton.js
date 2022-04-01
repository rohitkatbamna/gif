import React, { useState } from "react";
import profileimg from "../assets/user.png";
import Modalbody from "./modalbody";

function Modalbutton({ setPostobj }) {
	const [gifurl, setGifurl] = useState("");
	const [textmsg, setTextmsg] = useState("");
	const [gifalt, setGifalt] = useState("");
	function handlePost() {
		document.getElementById("posttext").value = "";
		setPostobj((prev) => [
			...prev,
			{ text: textmsg, gifurl: gifurl, giftitle: gifalt },
		]);
		setGifalt("");
		setGifurl("");
		setTextmsg("");
	}
	return (
		<>
			<button
				type="button"
				className="btn"
				data-bs-toggle="modal"
				data-bs-target="#exampleModal">
				<div className="input-group input-group-lg">
					<span className="input-group-text" id="inputGroup-sizing-lg">
						<img
							src={profileimg}
							alt="defualt user Freepik"
							height="50"
							width="50"
						/>
					</span>
					<input
						type="text"
						className="form-control"
						aria-label="Sizing example input"
						aria-describedby="inputGroup-sizing-lg"
						value="Post Something"
						style={{ cursor: "pointer" }}
					/>
				</div>
			</button>

			<div
				className="modal fade"
				id="exampleModal"
				tabindex="-1"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">
								Compost Post
							</h5>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"></button>
						</div>
						<div className="modal-body">
							<Modalbody
								setPostobj={setPostobj}
								setTextmsg={setTextmsg}
								setGifurl={setGifurl}
								setGifalt={setGifalt}
								gifurl={gifurl}
								gifalt={gifalt}
							/>
						</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-primary"
								data-bs-dismiss="modal"
								onClick={handlePost}>
								Post
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default Modalbutton;
