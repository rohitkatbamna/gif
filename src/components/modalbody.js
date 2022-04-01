import React, { useState } from "react";
import profileimg from "../assets/user.png";
import "../scss/modalbody.scss";
import Gif from "./gif";

function Modalbody() {
	const [wantgif, setWantgif] = useState(false);
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
				</div>
			</div>
			<div className="mt-5">
				<button
					type="button"
					className="btn btn-primary"
					onClick={() => setWantgif(wantgif ? false : true)}>
					Gif
				</button>
				{wantgif ? <Gif /> : <></>}
			</div>
		</>
	);
}
export default Modalbody;
