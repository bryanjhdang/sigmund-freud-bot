const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('mother')
		.setDescription('Replies with how much he loves his mother.'),
	async execute(interaction) {
		await interaction.reply('I LOVE MY MOM!');
	},
};