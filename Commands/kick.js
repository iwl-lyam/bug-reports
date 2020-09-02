module.exports = {
	name: 'kick',
	description: 'Kicks a member out of a server.',
	execute(message) {
		if (message.content.startsWith('Outcast kick')) {
			if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Error: Missing Permissions (`KICK_MEMBERS`)");
			const user = message.mentions.users.first();
			if (user) {
				const member = message.guild.member(user);
				if (member) {
					member
						.kick('Optional reason that will display in the audit logs')
						.then(() => {
							message.reply(`Successfully kicked ${user.tag}`);
						})
						.catch(err => {
							message.reply('I was unable to kick the member. Please check that the member does not have ADMINISTRATOR');
							// Log the error
							console.error(err);
						});
				} else {
					// The mentioned user isn't in this guild
					message.reply("That user isn't in this guild!");
				}
				// Otherwise, if no user was mentioned
			} else {
				message.reply("You didn't mention the user to kick!");
			}
		}
	},
};