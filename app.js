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
		name: 'None',
	},
];

let money = 0;
let toolLevel = 0;
let currentTool = tools[toolLevel];
let nextTool = tools[toolLevel + 1];

const checkWin = () => {
	if (nextTool.name === 'None' && money > 1000) {
		if (confirm('You have won lah. Want to play again?') === true) {
			money = 0;
			toolLevel = 0;
			currentTool = tools[toolLevel];
			nextTool = tools[toolLevel + 1];
			$('#money').text('$' + money);
			$('#current-tool').text(
				'You are currently using your ' +
					currentTool.name.toLowerCase() +
					' to mow the lawn.'
			);
			$('#next-tool').text('Next upgrade: ' + nextTool.name);
		} else {
			alert('Fine. Arrogant.');
		}
	}
};

const upgradeTool = () => {
	if (nextTool.price > money) {
		alert(
			'You do not have enough money to purchase the next tool, continue working, peasant.'
		);
	} else {
		money = money - nextTool.price;
		$('#money').text('$' + money);

		toolLevel += 1;
		currentTool = tools[toolLevel];
		$('#current-tool').text(
			'You are currently using your ' +
				currentTool.name.toLowerCase() +
				' to mow the lawn.'
		);

		nextTool = tools[toolLevel + 1];
		$('#next-tool').text('Next upgrade: ' + nextTool.name);
	}
};

const useTool = () => {
	money += currentTool.moneyEarned;
	$('#money').text('$' + money);
	checkWin();
};

const main = () => {
	$('#money').text('$' + money);
	$('#current-tool').text(
		'You are currently using your ' +
			currentTool.name.toLowerCase() +
			' to mow the lawn.'
	);
	$('#next-tool').text('Next upgrade: ' + nextTool.name);
	$('#use-tool').on('click', useTool);
	$('#upgrade-tool').on('click', upgradeTool);
};

$(main);
