let money = 0;
const tools = {
	teeth: {
		price: 'free',
		moneyEarned: 1,
	},
	rustyScissors: {
		price: 5,
		moneyEarned: 5,
	},
};

const useTool = () => {
	money += 1;
	$('#money').text('$' + money);
};

const buyNewTool = () => {};

const main = () => {
	$('#money').text('$' + money);
	$('#use-tool').on('click', useTool);
};

$(main);
