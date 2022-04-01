import React, { useState, useEffect } from "react";

function Gif() {
	const [gif, setGif] = useState([]);
	const [offset, setOffset] = useState(0);
	const api = "sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh";
	const givedata = {
		method: "GET",
	};
	function Fetching() {
		console.log("Begin Fetching");
		fetch(
			`https://api.giphy.com/v1/gifs/trending?api_key=${api}&limit=5&offset=${offset}`,
			givedata
		)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setGif(data.data);
			});
	}
	useEffect(() => {
		Fetching();
	}, [offset]);

	return (
		<div className="container-fluid">
			<div className="row">
				{gif.map((gifobj) => {
					return (
						<div className="col">
							<img
								src={gifobj.images.original.url}
								height={100}
								width={200}
								alt={gifobj.title}
							/>
						</div>
					);
				})}
			</div>
			<div className="row">
				<button
					type="button"
					className="btn btn-primary col mt-3"
					onClick={() => setOffset((prev) => prev + 5)}>
					Next
				</button>
			</div>
		</div>
	);
}
export default Gif;
