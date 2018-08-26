module.exports.run = async(client, message, args) =>{
}
const Discord = require('discord.js');
const moment = require('moment');

const cooldown = new Set();
exports.run = (client, message) => {
    let args = message.content.split(' ').slice(1).join(' ');
    message.delete();

    if (cooldown.has(message.author.id && message.guild.id)) {
        return message.reply('espere __1 minuto__ para reportar outro bug.');
    }
    if (args.length < 1) {
        return message.reply('você precisa colocar o motivo do bug!');
    }
    cooldown.add(message.author.id && message.guild.id);

    setTimeout(() => {
        cooldown.delete(message.author.id && message.guild.id);
    }, 60000);
    let guild = message.guild;
    const cnl = client.channels.get('422874372739432459');
    message.reply('seu reporte foi enviado com sucesso! Veja sua ficha abaixo:');
    const embed2 = new Discord.RichEmbed()
  .setAuthor(`Bug reportado por: ${message.author.tag}`, message.author.displayAvatarURL)
  .addField('Ficha:', `**Autor:** ${message.author.tag}\n**Servidor:** ${guild.name}\n**Bug:** ${args}`)
  .setThumbnail(message.author.displayAvatarURL)
  .setFooter(`${moment().format('MMMM Do YYYY, h:mm:ss a')}`)
  .setColor(16711728);
    message.channel.send({embed: embed2});
    const embed = new Discord.RichEmbed()
  .setAuthor(`Bug reportado por: ${message.author.tag}`, message.author.displayAvatarURL)
  .addField('Ficha:', `**Autor:** ${message.author.tag}\n**Servidor:** ${guild.name}\n**Bug:** ${args}`)
  .setThumbnail(message.author.displayAvatarURL)
  .setColor(16711728);
  cnl.send({embed})
  .catch(e => logger.error(e))
// In your command
};

module.exports.help = {
    name: 'bugreport'
};