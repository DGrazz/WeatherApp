const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=Barcelona';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a8765e05femsha073d3056235332p1971b0jsnf31f19a1e1e4',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}