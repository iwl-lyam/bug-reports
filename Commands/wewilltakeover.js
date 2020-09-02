const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
        module.exports = { 
            name: 'wewilltakeover',
        	cooldown: 0,
            description: 'Learn what commands I have to offer!',
            execute(message, args){
            if (message.content === 'Outcast wewilltakeover') {
            const embed = new MessageEmbed()
            embed.setTitle("666"),
            embed.addField("666", "666")
            embed.addField("666", "666")
            embed.addField("666", "666")
            embed.addField("666", "666")     
            embed.setColor("ff0000")
            embed.setFooter("666", "https://cdn.discordapp.com/avatars/717033979760345198/b6efe83ce84eb7b1d63c72fbdb0de5f0.png?size=1024")
            embed.setTimestamp("666:0")
            message.channel.send(embed)
        }
    }
};