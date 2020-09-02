const { Client, MessageEmbed } = require('discord.js');
var { prefix } = require("../OutcastAssets/config.json")
const client = new Client();
        module.exports = { 
            name: 'help',
        	cooldown: 5,
            description: 'Learn what commands I have to offer!',
            execute(message, args){
            if (message.content ===  prefix + 'help') {
            const embed = new MessageEmbed()
            embed.setTitle("Outcast Help Menu"),
            embed.addField("Prefix:", ";")
            embed.addField("Moderation", "Kick, Ban")
            embed.addField("Utility", "Info, Botinfo, serverinfo, avatar, userinfo ")
            embed.addField("Animals", "Cat, Dog, Fox")     
            embed.setColor("ff0000")
            embed.setFooter("Outcast V3", "https://cdn.discordapp.com/avatars/717033979760345198/b6efe83ce84eb7b1d63c72fbdb0de5f0.png?size=1024")
            embed.setTimestamp("")
            message.channel.send(embed)
        }
    }
};