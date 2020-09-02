const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
        module.exports = { 
            name: 'invite',
            description: 'Invite Outcast to your server',
            cooldown: 5,
            execute(message, args){
            if (message.content === 'Outcast invite') {
            const embed = new MessageEmbed()
			embed.setTitle("Invite Outcast To Your Server"),
			embed.addField("Stable Release:", "https://cutt.ly/bloxtel_invite")
            embed.addField("Alpha Release", "https://cutt.ly/bloxtel_invite_alpha")
            embed.setColor("ff0000")
            embed.setFooter("Outcast V3", "https://cdn.discordapp.com/avatars/717033979760345198/b6efe83ce84eb7b1d63c72fbdb0de5f0.png?size=1024")
            embed.setTimestamp("")
            message.channel.send(embed)
        }
    }
};