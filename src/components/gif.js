import React, { useState, useEffect } from "react";

function Gif() {
	const [gif, setGif] = useState([]);
	const [offset, setOffset] = useState(0);
	const [search, setSearch] = useState("");
	const api = "sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh";
	let searchvalue;
	const givedata = {
		method: "GET",
	};
	let trendurl = `https://api.giphy.com/v1/gifs/trending?api_key=${api}&limit=5&offset=${offset}`;
	let searchurl = `https://api.giphy.com/v1/gifs/search?api_key=${api}&q=${search}&limit=5&offset=${offset}`;
	let url = search === "" ? trendurl : searchurl;
	function Fetching() {
		console.log("Begin Fetching");
		console.log(searchurl);
		fetch(url, givedata)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setGif(data.data);
			});
	}
	function handleChange(event) {
		searchvalue = event.target.value;
	}
	function handleSubmit() {
		setSearch(searchvalue);
		setOffset(0);
		document.getElementById("inputext").value = "";
	}
	useEffect(() => {
		Fetching();
	}, [offset, search]);
	if (gif[0] === undefined) {
		return (
			<div className="container-fluid mt-2">
				<div className="row">
					<input
						type="text"
						placeholder="Search.."
						className="col-4 ms-3 mb-4"
						onChange={handleChange}
						id="inputext"
					/>
					<button
						type="button"
						className="btn btn-primary col-4 ms-2"
						onClick={handleSubmit}>
						Search
					</button>
				</div>
				<div className="row">
					<h6 className="col mt-3 fw-bold fs-4">Found Nothing Search Again</h6>
				</div>
			</div>
		);
	}
	return (
		<div className="container-fluid mt-2">
			<div className="row">
				<input
					type="text"
					placeholder="Search.."
					className="col-4 ms-3 mb-4"
					onChange={handleChange}
					id="inputext"
				/>
				<button
					type="button"
					className="btn btn-primary col-4 ms-2"
					onClick={handleSubmit}>
					Search
				</button>
			</div>
			<div className="row">
				{gif.map((gifobj) => {
					return (
						<div className="col m-1">
							<img
								src={gifobj.images.preview_gif.url}
								height={100}
								width={200}
								alt={gifobj.title}
							/>
						</div>
					);
				})}
			</div>
			<div className="row ms-auto me-auto">
				<button
					type="button"
					className="btn btn-danger col-2 mt-3 me-2"
					onClick={() => setOffset((prev) => (prev === 0 ? prev : prev - 5))}
					disabled={offset === 0 ? true : false}>
					Prev
				</button>
				<button
					type="button"
					className="btn btn-primary col-2 mt-3"
					onClick={() => setOffset((prev) => prev + 5)}>
					Next
				</button>
			</div>
		</div>
	);
}
export default Gif;
