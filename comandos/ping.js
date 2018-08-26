exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
    const msg = await message.channel.send("Pong :p");
    msg.edit(':ping_pong:Pong! Seu ping: `' + `${msg.createdTimestamp - message.createdTimestamp}` + 'ms`');
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "User"
  };
  
  exports.help = {
    name: "ping",
    category: "Miscelaneous",
    description: "ping pong!, as not in Ping Pong game,",
    usage: "ping"
  };