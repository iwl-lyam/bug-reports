const {token} = require('./OutcastAssets/config.json');
const { ShardingManager } = require('discord.js');
const manager = new ShardingManager('./bot.js', {token: token});

manager.spawn(4);
manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));
