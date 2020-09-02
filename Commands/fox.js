const { RichEmbed } = require('discord.js');
const { fetch } = require('node-fetch');

module.exports = {
    name: 'fox',
    description: 'Get random fox images',
    execute(client, message, args) {
        const link = "https://randomfox.ca/floof/";
        fetch(link)
            .then(res => res.json)
            .then((body) => {
                let embed = new RichEmbed()
                .setColor("ff0000")
                .setImage(body.link);
                message.channel.send(embed);
            })
    },
};