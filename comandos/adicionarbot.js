const Discord = require('discord.js');

module.exports.run = async (client, message, args, prefix) => {

    let mensagemdobotkrl = args.join(' ');
    if(!mensagemdobotkrl) return message.channel.send(message.author, ajuda).then(msg => msg.delete(7000));

    message.delete().catch(O_o=>{});
    const adicionarbotkrl = new Discord.RichEmbed()
        .setTitle("Adicionar Bot | Cookie Land")
        .setThumbnail(message.author.avatarURL)
        .setColor('RANDOM')
        .addField("Criador do bot solicitado:", message.author)
        .addField("Informações:", `\n` + mensagemdobotkrl)
        .setTimestamp()
        .setFooter("Zira - AdicionarBot")
        client.guilds.get('483799066342588417').channels.get('483814950981337089').send(adicionarbotkrl)

}

module.exports.help = {
    name: "adicionarbot"
}
