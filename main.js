document.addEventListener('DOMContentLoaded', function() {

const main = document.querySelectorAll('.main');
const recipes = document.getElementById('recipes');
const button = document.getElementById('generateButton');
const dropdown = document.getElementById('dropdown');
let currentNumber = dropdown.value;


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
			let bar = document.createElement('div');
			bar.setAttribute('class','bars');
			bar.setAttribute('id','bar'+i);
			bar.style.background = colors[i % x];
			main[j].appendChild(bar);		
		}
		
		recipes.innerHTML = '';
		
		for (let i=0; i<colors.length; i++) {
			let colorRecipe = document.createElement('div');
			let colorRecipeContent = document.createTextNode(colors[i]+' // '+rgb2hex(colors[i]));
			colorRecipe.style.color = colors[i];
			colorRecipe.appendChild(colorRecipeContent);
			recipes.appendChild(colorRecipe);
		}
	}

};


button.addEventListener('click', function() {
	for (let j=0; j<main.length; j++) {
		main[j].innerHTML = "";
	}
	palette(currentNumber);
});

dropdown.addEventListener('change', function() {
	currentNumber = dropdown.value;
	for (let j=0; j<main.length; j++) {
		main[j].innerHTML = "";
	}
	palette(currentNumber);
});

palette(currentNumber);




});