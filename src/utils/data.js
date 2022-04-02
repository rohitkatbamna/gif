export const dummydata1 = {
	text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis magna etiam tempor orci eu lobortis elementum. Risus pretium quam vulputate dignissim suspendisse in est ante in.",
	gifurl:
		"https://media4.giphy.com/media/FgZN4ztBmBu7w9K6M2/giphy-preview.gif?cid=9f0f64254hfv186y2yr6y901z8wc52xnllc9r4hqb6e2g1iu&rid=giphy-preview.gif&ct=g",
	giftitle: "April Fools Day ",
};
export const dummydata2 = {
	text: " Facilisis magna etiam tempor orci eu lobortis elementum. Risus pretium quam vulputate dignissim suspendisse in est ante in",
	gifurl:
		"https://media1.giphy.com/media/3KC2jD2QcBOSc/giphy.gif?cid=9…5c5v8affaesnmstb0gsmg50zl88ws6blpfb7fk0ti&rid=giphy.gif&ct=g",
	giftitle: "Party minion",
};
const api = "8QAZzSOAbMjRpzfBntWo0LbdR8qhoQGH";
const givedata = {
	method: "GET",
};
function url(search, offset) {
	let trendurl = `https://api.giphy.com/v1/gifs/trending?api_key=${api}&limit=5&offset=${offset}`;
	let searchurl = `https://api.giphy.com/v1/gifs/search?api_key=${api}&q=${search}&limit=5&offset=${offset}`;
	let url = search === "" ? trendurl : searchurl;
	return url;
}
export async function Fetching(search, offset) {
	console.log("Begin Fetching");
	let fetvalue = await fetch(url(search, offset), givedata)
		.then((response) => response.json())
		.then((responseData) => {
			return responseData;
		});
	console.log(fetvalue);
	return fetvalue;
}
