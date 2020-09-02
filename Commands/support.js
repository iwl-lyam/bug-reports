const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
        module.exports = { 
            name: 'support',
        	cooldown: 5,
            description: 'Gain access to a support server invite.',
            execute(message, args){
            if (message.content === ';support') {
            const embed = new MessageEmbed()
            embed.setTitle("Outcast Support Server"),
            embed.addField("Link:", "Click Here!")
            embed.setURL("http://www.bloxtel.tech/discord")
            embed.setFooter("Outcast V3", "https://cdn.discordapp.com/avatars/717033979760345198/b6efe83ce84eb7b1d63c72fbdb0de5f0.png?size=1024")
            embed.setTimestamp("")
            message.channel.send(embed)
        }
    }
};