module.exports.run = async(client, message, args) =>{
}
const Discord = require('discord.js')
exports.run = function (client, message, args) {

    let messagecount = parseInt(args.join(' '));

    if(!message.member.roles.some(r=>["Staff"].includes(r.name)) )
    return message.reply("Você precisa do cargo `Staff` para poder limpar o chat.");
    
    message.channel.fetchMessages({
        limit: messagecount
    }).then(messages => message.channel.bulkDelete(messages));

    const embed = new Discord.RichEmbed()
        .setDescription(`Chat Limpo`)

message.channel.send({embed});
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 2
}

exports.help = {
    name: 'purge',
    description: 'Purges X amount of messages from a given channel.',
    usage: 'purge <number>'
}