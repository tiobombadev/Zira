module.exports.run = async(client, message, args) =>{


  const sayMessage = args.join("p!say");
// Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
message.delete().catch(O_o=>{}); 
// And we get the bot to say the thing: 
message.channel.send('sayMessage');
}
module.exports.run = async(client, message, args) =>{


  const sayMessage = args.join("p!say");
// Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
message.delete().catch(O_o=>{}); 
// And we get the bot to say the thing: 
message.channel.send('sayMessage');
}
