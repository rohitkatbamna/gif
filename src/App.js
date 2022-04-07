import React, { useState } from "react";
import Modalbutton from "./components/modalbutton";
import Post from "./components/post";
import "./scss/App.scss";
import { dummydata1, dummydata2 } from "./utils/data";

function App() {
	const [postobj, setPostobj] = useState([dummydata1, dummydata2]);
	return (
		<div className="main_app_of_all_it container-fluid">
			<div className="main_app_row_one row">
				<div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 mx-auto">
					<h1 className="mt-3 text-center">What's On Your Mind ?</h1>
					<div className="mt-2 shadow" style={{ borderRadius: "18px" }}>
						<Modalbutton setPostobj={setPostobj} postobj={postobj} />
					</div>
				</div>
			</div>
			<div className="row main_app_row_two">
				{postobj.map((obj) => {
					return (
						<>
							<div className="col-12 ms-auto me-auto mt-5">
								<Post image={obj.gifurl} text={obj.text} title={obj.giftitle} />
							</div>
						</>
					);
				})}
			</div>
		</div>
	);
}

export default App;
