import React from "react";
import profileimg from "../assets/user.png";
import "../scss/modalbody.scss";
import Gif from "./gif";

function Modalbody() {
	return (
		<>
			<div className="modal_body_all_of_it">
				<img
					src={profileimg}
					alt="default profile face freepik"
					height="50"
					width="50"
				/>
				<div contentEditable="true" style={{ border: "4px solid black" }}>
					<input style={{ border: "none" }} />
					<img src="https://media2.giphy.com/media/AwEhQFqm9KiHGPjdL5/giphy.gif?cid=9f0f6425vyjrhwka3wuturxn4h19e1mlsp3h8elvdmhnw0pv&rid=giphy.gif&ct=g" />
				</div>
			</div>
			<div className="mt-5">
				<h1>Gifs that you might want to select</h1>
				<Gif />
			</div>
		</>
	);
}
export default Modalbody;
