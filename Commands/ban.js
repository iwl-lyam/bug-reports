module.exports = {
  name: "ban",
  description: "Ban's a member",
  cooldown: 0,
  execute(message) {
    if (message.content.startsWith('Outcast ban')) {
      if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Error: Missing Permissions (`KICK_MEMBERS`)");
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        // If the member is in the guild
        if (member) {
          member
            .ban({
              reason: 'Reason N/A.',
            })
            .then(() => {
              message.reply(`Successfully banned ${user.tag}`);
            })
            .catch(err => {
              message.reply('I was unable to ban the member');
              console.error(err);
            });
        } else {
          message.reply("That user isn't in this guild! Try using ;hackban instead.");
        }
      } else {
        // Otherwise, if no user was mentioned
        message.reply("You didn't mention the user to ban!");
      }
    }
  }
};