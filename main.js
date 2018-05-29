document.addEventListener('DOMContentLoaded', function() {

const main = document.querySelectorAll('.main');
const button = document.getElementById('generateButton');

function randomNumber(x) {
	return Math.floor(Math.random() * x);
};

function randomColor() {
	let r = randomNumber(256);
	let g = randomNumber(256);
	let b = randomNumber(256);
	return "rgba("+r+","+g+","+b+", 1)";
};

function rgb2hex(rgb){
 rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
 return (rgb && rgb.length === 4) ? "#" +
  ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
};


function palette(x) {
	let colors = [];
	for (let i=0; i<x; i++) {
		colors.push(randomColor());
	}
	
	for (let j=0; j<main.length; j++) {
	
		for (let i=0; i<100; i++) {
			main[j].innerHTML += '<div class="bars" id="bar'+i+'" style="background:'+colors[i % x]+'"></div>';		
		}
	}

};


button.addEventListener('click', function() {
	for (let j=0; j<main.length; j++) {
		main[j].innerHTML = "";
	}
	palette(3);
});


palette(3);




});