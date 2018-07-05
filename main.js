document.addEventListener('DOMContentLoaded', function() {

	const main = document.querySelectorAll('.main');
	const recipes = document.getElementById('recipes');
	const button = document.getElementById('generateButton');
	const dropdown = document.getElementById('dropdown');
	let currentNumber = dropdown.value;
	const randomNumber = x => Math.floor(Math.random() * x);
	const convertToHex = x => parseInt(x).toString(16);

	//Generates a random color in both rgb and 6-digit hex code.
	function randomColor() {
		let r = randomNumber(256);
		let g = randomNumber(256);
		let b = randomNumber(256);	
		let rgb = "rgba("+r+","+g+","+b+", 1)";
		let hexcode = "#"+convertToHex(r)+convertToHex(g)+convertToHex(b);
		return {"rgb":rgb, "hex":hexcode};
	};

	//Creates palette and adds recipes to the recipe holder.
	function palette(x) {

		//Clears the recipes in the recipe holder.
		recipes.innerHTML = '';

		//Creates new colors and stores them in an array.
		let colors = [];
		for (let i=0; i<x; i++) {
			colors.push(randomColor());
		}

		//Appends the new recipes to the holder.
		for (let i=0; i<colors.length; i++) {
			let colorRecipe = document.createElement('div');
			let colorRecipeContent = document.createTextNode(colors[i].rgb+' // '+colors[i].hex);
			colorRecipe.style.color = colors[i].rgb;
			colorRecipe.appendChild(colorRecipeContent);
			recipes.appendChild(colorRecipe);
		}
	
		//Appends bars of those colors to both the vertical and horizontal holders.
		for (let j=0; j<main.length; j++) {
			main[j].innerHTML = "";
			for (let i=0; i<100; i++) {
				let bar = document.createElement('div');
				bar.setAttribute('class','bars');
				bar.style.background = colors[i % x].rgb;
				main[j].appendChild(bar);		
			}
		}
	};

	//Executes the function so there's a palette upon page load.
	palette(currentNumber);

	//Generates new palette upon button click.
	button.addEventListener('click', function() {
		palette(currentNumber);
	});

	//Generates new palette upon dropdown change.
	dropdown.addEventListener('change', function() {
		currentNumber = dropdown.value;
		palette(currentNumber);
	});

});