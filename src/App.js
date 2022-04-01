import React, { useState } from "react";
import Modalbutton from "./components/modalbutton";
import Post from "./components/post";
import "./scss/App.scss";

const dummydata1 = {
	text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis magna etiam tempor orci eu lobortis elementum. Risus pretium quam vulputate dignissim suspendisse in est ante in.",
	gifurl:
		"https://media4.giphy.com/media/FgZN4ztBmBu7w9K6M2/giphy-preview.gif?cid=9f0f64254hfv186y2yr6y901z8wc52xnllc9r4hqb6e2g1iu&rid=giphy-preview.gif&ct=g",
	giftitle: "April Fools Day ",
};

function App() {
	const [postobj, setPostobj] = useState([dummydata1]);
	return (
		<>
			<div className="text-center mt-5">
				<Modalbutton setPostobj={setPostobj} />
			</div>
			<div className="container-fluid">
				<div className="row">
					{postobj.map((obj) => {
						return (
							<div className="col-12 ms-auto me-auto mt-5">
								<div style={{ marginLeft: "15vw", marginRight: "15vw" }}>
									<Post
										image={obj.gifurl}
										text={obj.text}
										title={obj.giftitle}
									/>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}

export default App;
