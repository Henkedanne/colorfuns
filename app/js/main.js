var button = document.querySelector('button');
var body = document.querySelector('body');
var wrapper = document.querySelector('.wrapper');
var hex_value = document.querySelector('#hex-value');

function randomBg() {
	var randColor = '#' + Math.floor(Math.random()* 16777215).toString(16);
	
	body.style.background = randColor;
	
	hex_value.innerHTML = randColor;
}

button.addEventListener('click', randomBg);