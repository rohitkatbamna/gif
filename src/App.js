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
const dummydata2 = {
	text: " Facilisis magna etiam tempor orci eu lobortis elementum. Risus pretium quam vulputate dignissim suspendisse in est ante in",
	gifurl:
		"https://media1.giphy.com/media/3KC2jD2QcBOSc/giphy.gif?cid=9…5c5v8affaesnmstb0gsmg50zl88ws6blpfb7fk0ti&rid=giphy.gif&ct=g",
	giftitle: "Party minion",
};
function App() {
	const [postobj, setPostobj] = useState([dummydata1, dummydata2]);
	return (
		<>
			<h1 className="text-center mt-3">Write A new Post</h1>
			<div className="text-center mt-2">
				<Modalbutton setPostobj={setPostobj} />
			</div>
			<div className="container-fluid">
				<div className="row">
					{postobj.map((obj) => {
						return (
							<>
								<div className="col-12 ms-auto me-auto mt-5">
									<Post
										image={obj.gifurl}
										text={obj.text}
										title={obj.giftitle}
									/>
								</div>
							</>
						);
					})}
				</div>
			</div>
		</>
	);
}

export default App;
