import React, { useState, useEffect } from "react";

function Gif({ setGifurl, setGifalt }) {
	const [gif, setGif] = useState([]);
	const [offset, setOffset] = useState(0);
	const [search, setSearch] = useState("");
	const [count, setCount] = useState(NaN);
	const api = "8QAZzSOAbMjRpzfBntWo0LbdR8qhoQGH";
	let searchvalue;
	let countvalue;
	const givedata = {
		method: "GET",
	};
	let trendurl = `https://api.giphy.com/v1/gifs/trending?api_key=${api}&limit=5&offset=${offset}`;
	let searchurl = `https://api.giphy.com/v1/gifs/search?api_key=${api}&q=${search}&limit=5&offset=${offset}`;
	let url = search === "" ? trendurl : searchurl;
	function Fetching() {
		console.log("Begin Fetching");
		fetch(url, givedata)
			.then((response) => response.json())
			.then((responseData) => {
				setCount(responseData.pagination.total_count);
				console.log(count);
				setGif(responseData.data);
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
	console.log(count, offset);
	useEffect(() => {
		Fetching();
		// eslint-disable-next-line react-hooks/exhaustive-deps
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
					{offset > count ? (
						<h6 className="col mt-3 fw-bold fs-4">
							End of line Serach something Else
						</h6>
					) : (
						<h6 className="col mt-3 fw-bold fs-4">
							Found Nothing Search Again
						</h6>
					)}
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
			{url === trendurl ? <p>Trending Gifs</p> : <></>}
			<div className="row">
				{gif.map((gifobj) => {
					return (
						<div className="col m-1">
							<img
								src={gifobj.images.preview_gif.url}
								height={100}
								width={200}
								alt={gifobj.title}
								onClick={() => {
									setGifurl(gifobj.images.original.url);
									setGifalt(gifobj.title);
								}}
								style={{ cursor: "pointer" }}
							/>
						</div>
					);
				})}
			</div>
			<div className="row">
				<div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-3">
					<button
						type="button"
						className="btn btn-danger mt-3 me-2"
						onClick={() => setOffset((prev) => (prev === 0 ? prev : prev - 5))}
						disabled={offset === 0 ? true : false}>
						Prev
					</button>
				</div>
				<div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-3">
					<button
						type="button"
						className="btn btn-primary mt-3"
						onClick={() => setOffset((prev) => prev + 5)}>
						Next
					</button>
				</div>
			</div>
		</div>
	);
}
export default Gif;
