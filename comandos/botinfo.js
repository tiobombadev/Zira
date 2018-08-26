const Discord = require("discord.js");

exports.run = (client, message, args) => {
    
    const pc = client.emojis.find('name', 'Pc')

    const botinfo = new Discord.RichEmbed()
    .setTitle(':wave: Zira - Info')
    .setTimestamp()
    .setThumbnail(message.author.displayAvatarURl)
    .setFooter('Zira - z!discord')
    .setDescription(`Olá, sou o Zira, sou um :boy::skin-tone-1: menino, sou um simples bot de moderação do discord.
    \n:incoming_envelope: Me invite para seu servidor, utilize **z!invite**.`)

    .addField(`${pc} Guilds`, `**${client.guilds.size}**`, true)
    .addField(":pencil: Canais", `**${client.channels.size}**`, true)
    .addField(":busts_in_silhouette: Usuários", `**${client.users.size}**`, true)
    message.channel.send(botinfo)
}