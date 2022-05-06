const tools = [
	{
		name: 'Teeth',
		price: 'free',
		moneyEarned: 1,
	},
	{
		name: 'A Pair of Rusty Scissors',
		price: 5,
		moneyEarned: 5,
	},
	{
		name: 'Old Lawnmower',
		price: 25,
		moneyEarned: 50,
	},
	{
		name: 'Fancy Battery-Powered Lawnmower',
		price: 250,
		moneyEarned: 100,
	},
	{
		name: 'Team of starving students',
		price: 500,
		moneyEarned: 250,
	},
	{
		name: 'Maxed',
	},
];

let money = 0;
let toolLevel = 0;
let currentTool = tools[toolLevel];
let nextTool = tools[toolLevel + 1];

const errorMsg = () => {
	alert('There are no more upgrades available.');
};

const getName = () => {
	let pName = prompt('Please enter your Player Name');
	$('#pName').text('Player: ' + pName);
};

const updateBackground = () => {
	$('body').css('background-image', 'url(images/' + toolLevel + '.png)');
};

const toggleBtn = () => {
	$('button').toggle();
};

const reset = () => {
	money = 0;
	toolLevel = 0;
	currentTool = tools[toolLevel];
	nextTool = tools[toolLevel + 1];
};

const checkWin = () => {
	if (nextTool.name === 'Maxed' && money >= 1000) {
		if (confirm('You have won lah. Want to play again?') === true) {
			reset();
			display();
		} else {
			alert('Fine. Arrogant. No more upgrades for you anyway.');
			toggleBtn();
		}
	}
};

const display = () => {
	$('#money').text('$' + money);
	$('#current-tool').text(
		'You are currently using your ' +
			currentTool.name.toLowerCase() +
			' to mow the lawn.'
	);
	$('#next-tool').text(nextTool.name);
	updateBackground();
};

const upgradeTool = () => {
	if (nextTool.name === 'None') {
		$('#upgrade-tool').on('click', errorMsg);
	} else if (nextTool.price > money) {
		alert(
			'You do not have enough money to purchase the next tool, continue working, peasant.'
		);
	} else {
		money = money - nextTool.price;

		toolLevel += 1;
		currentTool = tools[toolLevel];

		nextTool = tools[toolLevel + 1];
		display();
	}
};

const useTool = () => {
	money += currentTool.moneyEarned;
	display();
	checkWin();
};

const main = () => {
	display();
	getName();
	$('#use-tool').on('click', useTool);
	$('#upgrade-tool').on('click', upgradeTool);
	$('#reset').on('click', reset).on('click', display);
};

$(main);
