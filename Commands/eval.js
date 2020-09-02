try{
var { prefix, owner } = require("../OutcastAssets/config.json");
}catch(err)        
	{module.exports = { 
            name: 'eval',
	        cooldown: 0,
            description: 'Developer Command.',
            execute(message, args){
              if (message.content === prefix + "eval") {
              if(message.author.id !== owner) return;
              try {
                const code = args.join(" ");
                let evaled = eval(code);
 
                if (typeof evaled !== "string")
                evaled = require("util").inspect(evaled);
 
                message.channel.send(clean(evaled), {code:"xl"});
              } catch (err) {
                    message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
      		    }    
   	        }
        }
    }   
};