module.exports.run = async (client, message, args) => {
}
    const Discord = require('discord.js');    

    exports.run = (client, message, args) => {
        let reason = args.slice(1).join(' ');
        let user = message.mentions.users.first();
        let modlog = client.channels.find('name', '📬anuncios');
        let muteRole = client.guilds.get(message.guild.id).roles.find('name', '💰 Doadores');
        if(message.member.id == "280370800350199809") {
        if (!modlog) return message.reply('deu errado brother!').catch(console.error);
        if (!muteRole) return message.reply('deu errado brother!').catch(console.error);
        if (reason.length < 1) return message.reply('deu errado brother!').catch(console.error);
        if (message.mentions.users.size < 1) return message.reply('deu errado brother!').catch(console.error);

        const embed = new Discord.RichEmbed()
          .setColor(0x00AE86)
          .setTimestamp()
          .addField('Gente! que maravilha!! Parece que temos um novo doador', `pelo que parece, o nome é: ${user.username}`)
          .addField('Quantia doada:',`${reason} `)
          .addField('Quer fazer parte da lista de doadores?',`doe por apenas 1 R$ para eu conseguir uma host [clicando aqui](http://www.anabot6.webnode.com)`);
      
        if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('deu errado brother!').catch(console.error);
      
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
    }