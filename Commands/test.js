module.exports = {
    name: 'test',
    description: 'A test command.',
    execute(message) {
        message.channel.send(`Hi.`);
    },
};