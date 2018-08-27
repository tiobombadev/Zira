const Discord = require('discord.js');
module.exports.run = (client, message, args) => {
  if (!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.reply("Eu não tenho a permissão `ADMINISTATOR`, então descarte este comando, ou ative!!!!");
  message.delete();
  if(!args[0]){
    const comousar = new Discord.RichEmbed()
        .setTitle("h!att")
        .setDescription(`**Descrição:** Postar alguma atualização do servidor.`);
    message.channel.send({embed: comousar});
    return;
}
