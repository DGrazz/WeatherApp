const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=Barcelona';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'a8765e05femsha073d3056235332p1971b0jsnf31f19a1e1e4',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }
};

export async function getTiempo() {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);

	// Extraer location y current de result
    const { location, current } = result;

	return { location, current };

  } catch (error) {
    console.error(error);
  }
}
