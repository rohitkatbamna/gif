export const dummydata1 = {
	text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis magna etiam tempor orci eu lobortis elementum. Risus pretium quam vulputate dignissim suspendisse in est ante in.",
	gifurl:
		"https://media3.giphy.com/media/D7iOxcaMv82RTpCNpx/giphy.gif?cid=5e6b99a1ikgelvtgrwbljrcyxzx5ncrh9pl7ewn83q4uvuo9&rid=giphy.gif&ct=g",
	giftitle: "April Fools Day ",
};
export const dummydata2 = {
	text: " Facilisis magna etiam tempor orci eu lobortis elementum. Risus pretium quam vulputate dignissim suspendisse in est ante in",
	gifurl:
		"https://media3.giphy.com/media/KfCDL1znSLtoTR4JW4/giphy.gif?cid=5e6b99a1gj79b4jn2i390ce6cgn3jfyym8gbw0to8h5364zq&rid=giphy.gif&ct=g",
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
	console.log(url);
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
