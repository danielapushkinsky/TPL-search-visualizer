const letterInterval = 300;

function addLeter(letter){
	const search = document.querySelector('#search');
	search.innerHTML = search.innerHTML + letter;
}

function setWord(word){
	document.querySelector('#search').innerHTML = '';
	for (let i = 0; i < word.length; i++){
		setTimeout(addLeter, letterInterval * i + Math.floor(Math.random() * 150), word[i]);
	}
}

function setWords(data){
	let timePassed = 0;
	for (let i = 0; i < data.length; i++){
		setTimeout(setWord, timePassed, data[i]); // Line up setWord calls with an equal interval for every word in data set
		timePassed += letterInterval * data[i].length + 2500; // Time it takes to type word + 2500ms
	}

	setTimeout(getData, Math.max(20000, timePassed)); // api gets updated every 20s, so make a call every 20s or when you run out of data
}

function getData(){
	const proxyurl = "https://cors-anywhere.herokuapp.com/";
	const url = "https://dashboard.tpllabs.ca/fetch_data"; // site that doesn’t send Access-Control-*
	fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://dashboard.tpllabs.ca/fetch_data
		.then(response => response.json())
		.then(contents => {
				var data = contents.data;
				console.log(data);
				setWords(data);
			})
		.catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
}

// Get data as soon as script is loaded
getData();
