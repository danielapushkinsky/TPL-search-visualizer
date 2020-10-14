const letterInterval = 200;
const colors = ['#4285F4', '#DB4437', '#F4B400', '#0F9D58'];
const directions = ['left', 'right', 'up', 'down'];
var colorChosen = 0;

function addLeter(letter){
	const search = document.querySelector('#search');
	search.innerHTML = search.innerHTML + letter;
}

function setWord(word){
	document.querySelector('#search').innerHTML = '';
	for (let i = 0; i < word.length; i++){
		setTimeout(addLeter, letterInterval * i + Math.floor(Math.random() * letterInterval/2), word[i]);
	}
}

function setColorSlide(directionChosen){
	var everyt = document.getElementsByClassName('slide')[0];
	let oldColor = colorChosen;
	colorChosen = Math.floor(Math.random() * 4);     // returns a random integer from 0 to 9
	while (colorChosen == oldColor) {
		colorChosen = Math.floor(Math.random() * 4);
	}

	document.body.style.backgroundColor = colors[colorChosen];
	
  	everyt.classList.add(directions[directionChosen]);
}

function clearColorSlide(directionChosen){
	var everyt = document.getElementsByClassName('slide')[0];
	everyt.style.backgroundColor = colors[colorChosen];
  	everyt.classList.remove(directions[directionChosen]);
}

function setWords(data){
	let timePassed = 0;
	let directionChosen = 0;
	for (let i = 0; i < data.length; i++){
		setTimeout(setWord, timePassed, data[i]); // Line up setWord calls with an equal interval for every word in data set		
		
		timePassed += letterInterval * data[i].length + 2500; // Time it takes to type word + 2500ms

		directionChosen = Math.floor(Math.random() * 4);
		
		setTimeout(setColorSlide, timePassed, directionChosen);
		timePassed += 2000;
		setTimeout(clearColorSlide, timePassed, directionChosen);
	}
	setTimeout(getData, Math.max(20000, timePassed)); // api gets updated every 20s, so make a call every 20s or when you run out of data
}

function getData(){
	const proxyurl = "https://tranquil-cove-30806.herokuapp.com/"; //
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
