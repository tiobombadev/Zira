module.exports.run = async (client, message, args) => {
}
const Discord = require('discord.js');

exports.run = (client, message) => {
    let arg = message.content.split(' ').slice(1).join(' ');
    const OWStats = require('overwatch-stats');
    /*
      Checking for username
    */
    if (!arg) {
        return message.reply('insira seu Battletag');
    }
    /*
      Checking for discriminator
    */
    if (!arg.includes('#')) {
        return message.reply('esta battletag é inválida, confira se não falta algum número ou #');
    }
    /*
    Checking discriminator validation
    */
    if (arg.split('#').length > 6) {
        return message.reply('não preciso repetir novamente, né?');
    }
    /*
    Loading username stats
    */
    OWStats.load(arg)
    .then(data => {
      /*
        If user is not valid handle the error
      */
        if (!data.body.eu.stats.quickplay.overall_stats.avatar) {
            return message.reply('esta battletag não existe.');
        }

        const embed = new Discord.RichEmbed()
      .setAuthor(`Status de ${arg}`, data.body.eu.stats.quickplay.overall_stats.avatar)
      .addField(`Quickplay ${arg}`, `**Jogos:** ${data.body.eu.stats.quickplay.overall_stats.games}
**Vitórias:** ${data.body.eu.stats.quickplay.overall_stats.wins}
**Derrotas:** ${data.body.eu.stats.quickplay.overall_stats.losses}
**Camada:** ${data.body.eu.stats.quickplay.overall_stats.tier}\n\
**Prestigio:** ${data.body.eu.stats.quickplay.overall_stats.prestige}
`)
      .setThumbnail(data.body.eu.stats.quickplay.overall_stats.avatar);
        message.channel.send({embed}).catch(console.error);
    }).catch(err => {
      /*
      Catching unhalded promise rejection
      */
        message.channel.send('Não achei ' + arg);
    });
};
module.exports.help = {
    name: 'ow'
};