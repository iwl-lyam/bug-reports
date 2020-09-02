const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
        module.exports = { 
            name: 'userinfo',
        	cooldown: 5,
            description: 'Info about a user',
            execute(message, args){
            if (message.content === 'Outcast userinfo') {
            const embed = new MessageEmbed()
            embed.setTitle(``),
            embed.addField("Name", `${message.author.username}`)
            embed.addField("ID", `${message.author.id}`)
            embed.setImage(`${message.author.displayAvatarURL}`)
            embed.setColor("ff0000")
            embed.setFooter("Outcast V3", "https://cdn.discordapp.com/avatars/717033979760345198/b6efe83ce84eb7b1d63c72fbdb0de5f0.png?size=1024")
            embed.setTimestamp("")
            message.channel.send(embed)
        }
    }
};