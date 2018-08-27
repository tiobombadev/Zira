const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

      if(!message.member.hasPermission("SEND_MESSAGE")) return;
      const sayMessage = args.join(" ");
      message.delete().catch();
      message.channel.send(sayMessage);

}
