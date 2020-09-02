const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');
const command = (';cat')
    module.exports = {
        name: 'cat',
        command: 'cat',
        description: 'Look at pictures of cute cats',
        execute(client, message, args) {
            fetch('https://aws.random.cat/meow').then(response => response.json());
            if (command === ';cat') {
                const { file } =  fetch('https://aws.random.cat/meow').then(response => response.json());
            
                message.channel.send(file);
            }        
        }
    };