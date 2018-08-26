module.exports.run = async (client, message, args) => {
}
    const Discord = require('discord.js');    

    exports.run = (client, message, args) => {
        let reason = args.slice(1).join(' ');
        let user = message.mentions.users.first();
        let modlog = client.channels.find('name', 'puniçoes');
        let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Silenciado');
        if (!modlog) return message.reply('eu não achei o canal de texto `#puniçoes`, crie para eu poder mutar alguém.').catch(console.error);
        if (!muteRole) return message.reply('eu não achei o cargo `Silenciado`, crie para eu poder mutar alguém.').catch(console.error);
        if (reason.length < 1) return message.reply('você precisa de um motivo para poder mutar alguém.').catch(console.error);
        if (message.mentions.users.size < 1) return message.reply('mencione um membro desejado para mutar.').catch(console.error);
        const embed = new Discord.RichEmbed()
          .setColor(0x00AE86)
          .setTimestamp()
          .addField('Ação:', 'Mute')
          .addField('Usuário punido:', `${user.username}#${user.discriminator}`)
          .addField('Staff:', `${message.author.username}#${message.author.discriminator}`);
      
        if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('eu não tenho as permissões `Atribuir Cargos` para eu mutar alguém.').catch(console.error);
      
        if (message.guild.member(user).roles.has(muteRole.id)) {
          message.guild.member(user).removeRole(muteRole).then(() => {
            client.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
          });
        } else {
          message.guild.member(user).addRole(muteRole).then(() => {
            client.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
          });
        }
      
      };
      
      exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: [],
        permLevel: 0
      };
      
      exports.help = {
        name: 'mute',
        description: 'mutes or unmutes a mentioned user',
        usage: 'un/mute [mention]'
      };