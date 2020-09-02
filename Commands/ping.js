const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
        module.exports = { 
            name: 'ping',
        	cooldown: 0,
            description: 'Learn what commands I have to offer!',
            async execute(client, message, embed, args) {
            if (message.content === 'Outcast ping') {
            const m = await message.channel.send("Ping!");
            const embed = new MessageEmbed()
            embed.setTitle("Outcast"),
            embed.addField("Bot Latency:", "Broken"),
            embed.addField("API Latency:", `${Math.round(client.ping)} ms.`),    
            embed.setColor("ff0000"),
            message.channel.send(embed)
        }
    }
};