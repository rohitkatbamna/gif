import React, { useState } from "react";
import Modalbutton from "./components/modalbutton";
import Post from "./components/post";
import "./scss/App.scss";
import { dummydata1, dummydata2 } from "./utils/data";

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
