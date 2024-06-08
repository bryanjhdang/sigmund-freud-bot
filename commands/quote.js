const { SlashCommandBuilder } = require('discord.js');
const fs = require('fs');
const path = require('path');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('quote')
		.setDescription('Replies with a random quote.'),
	async execute(interaction) {
		const quotesPath = path.join(__dirname, '..', 'quotes.txt');
		const quotesData = fs.readFileSync(quotesPath, 'utf8');
		const quotes = quotesData.split('\n').filter(line => line.trim() !== '');
		const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
		await interaction.reply(randomQuote);
	},
};