const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

      if(!message.member.hasPermission("ADMINISTRATOR")) return;
      const embed = new Discord.RichEmbed() 
    .setAuthor('VOTAÇÃO', "https://images-ext-2.discordapp.net/external/YD0gTSbaPkL-QWSIIgLizRMSyrvQHNDg5Q9BIzePKkQ/%3Fv%3D1/https/cdn.discordapp.com/emojis/450640847684370432.gif")
    .setDescription("" + args.join(" "))
    .setColor("#00ffa8")
    .setTimestamp()
    .setFooter(`Votação Feita Por: ${message.author.username}`, message.author.avatarURL); 
        message.delete().catch();
        message.channel.send({
        embed
    }).then(msg => {
        msg.react("👍").then(r => msg.react("👎"))
    });


}
