const dotenv = require('dotenv')
dotenv.config()

const { Client, SlashCommandBuilder, GatewayIntentBits } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.MessageContent
  ]
})

client.login(process.env.DISCORD_TOKEN);

client.on("messageCreate", async (message) => {
  console.log(message)

  if (!message?.author.bot) {
    message.author.send(`Echo ${message.content}`)
  }
});