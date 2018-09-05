const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

      if(!message.member.hasPermission("ADMINISTRATOR")) return;
      const embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setAuthor('PARTNERS', "https://cdn.discordapp.com/emojis/478003266815262730.gif?v=1")
      .setFooter(`Aviso feito por: ${message.author.username}`, message.author.avatarURL)
      .setDescription("" + args.join(" "));
      message.channel.send("@everyone").then(a=>a.delete(1));
      message.channel.send({embed})
      message.delete().catch();
      message.channel.send(sayMessage);
      

}

module.exports.help = {
  name: "say"
}
