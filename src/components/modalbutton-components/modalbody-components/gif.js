import React, { useState, useEffect } from "react";
import { Fetching } from "../../../utils/data";

function Gif({ setGifurl, setGifalt }) {
	const [gif, setGif] = useState([]);
	const [offset, setOffset] = useState(0);
	const [search, setSearch] = useState("");
	const [count, setCount] = useState(NaN);
	let searchvalue;
	function handleChange(event) {
		searchvalue = event.target.value;
	}
	function handleSubmit() {
		setSearch(searchvalue);
		setOffset(0);
		document.getElementById("inputext").value = "";
	}
	async function returnData(offset, search) {
		let newdata = await Fetching(offset, search);
		setGif(newdata.data);
		setCount(newdata.pagination.total_count);
	}
	useEffect(() => {
		returnData(search, offset);
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
			<div className="row">
				{" "}
				<div className="col">
					{search === "" ? <p className="fw-bold">Trending Results</p> : <></>}
				</div>
			</div>
			<div className="row">
				{gif.map((gifobj) => {
					return (
						<div className="col-6 mt-1">
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
