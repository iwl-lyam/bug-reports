module.exports = {
	name: 'serverinfo',
	description: 'Display info about this server.',
	execute(message) {
		message.channel.send(`Server name: ${message.guild.name}\n
	Total members: ${message.guild.memberCount}`);
	},
};
