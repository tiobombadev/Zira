module.exports.run = async (client, message, args) => {}
const Discord = require('discord.js');
exports.run = (client, message, args) => {
    let reason = args.slice(1).join(' ');
    let user = args[0];
    let modlog = client.channels.find('name', 'banimentos');
    if (!modlog) return message.reply('Eu não consegui desbanir o usuário, pois não tem o chat `banimentos`.')
    if (reason.length < 1) return message.reply('Você precisa colocar o motivo para poder desbanir o usuário.');
    if (!user) return message.reply('Você precisa mencionar alguém já banido para desbanir.').catch(console.error);
    message.guild.unban(user);
    
    const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Acão:', 'Unban')
    .addField('Usuário Desbanido:', `${user.username}#${user.discriminator} [ID: ${user.id}]`)
    .addField('Staffer:', `${message.author.username}#${message.author.discriminator}`);
    return client.channels.get(modlog.id).sendEmbed(embed);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 2
};

exports.help = {
    name: 'unban',
    description: 'Unbans the mentioned user from the server.',
    usage: 'ban [user] [reason]'
};