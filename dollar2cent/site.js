const appForm = document.querySelector('#app form');

const convertToCents = value => parseFloat(value) * 100;

const sortCoins = value => {
	let total = value;
	let quarters = 0;
	let dimes = 0;
	let nickels = 0;


	if(total >= 25){
		quarters = parseInt(total/25);
		total -= 25*quarters
	}

	if(total >=10){
		dimes = parseInt(total/10);
		total -= 10*dimes;
	}

	if(total >= 5){
		nickels = parseInt(total/5);
		total -= 5*nickels
	}

	return [quarters, dimes, nickels, total];
}

const dollar2cent = evt => {
	evt.preventDefault();

	const inputValue = document.querySelector('#input_dollar').value,
				result = document.querySelector('#result'),
				resultCoins = document.querySelector('#result-moedas');

	const centsValues = convertToCents(inputValue);

	result.innerHTML = centsValues;

	const sortedCoins = sortCoins(centsValues);

	const [
		quarters,
		dimes,
		nickels,
		pennies,
	] = sortCoins(centsValues);

	resultCoins.innerHTML = `Quarters: ${quarters}, Dimes: ${dimes}, Nickels: ${nickels}, Pennies: ${pennies}`;
}

appForm.addEventListener('submit', dollar2cent);
