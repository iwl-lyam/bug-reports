const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
        module.exports = { 
            name: 'botinfo',
            description: 'Look at info on me.',
            cooldown: 5,
            execute(message, args){
            if (message.content === 'Outcast botinfo') {
            const embed = new MessageEmbed()
			embed.setTitle("Bot Info"),
			embed.addField("Version:", "3.0")
			embed.addField("Developer:", "Asher#7028")
			embed.addField("Version Type:", "Beta")
			embed.addField("Last Updated:", "7/20/20")
			embed.addField("Library:", "Discord.js v12")
			embed.addField("Current Host Platform:", "Self-Hosted via Outcast-1")
            embed.setColor("ff0000")
            embed.setFooter("Outcast V3", "https://cdn.discordapp.com/avatars/717033979760345198/b6efe83ce84eb7b1d63c72fbdb0de5f0.png?size=1024")
            embed.setTimestamp("")
            message.channel.send(embed)
        }
    }
};