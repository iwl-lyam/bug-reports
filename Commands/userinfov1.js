const { DiscordAPIError } = require("discord.js");

const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
	module.exports = {
		name: 'olduserinfo',
		description: 'Display info about yourself.',
		execute(message) {
			message.channel.send(`Your username: ${message.author.username}\n
			Your ID: ${message.author.id}`);
		},
};