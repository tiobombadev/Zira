const Discord = require('discord.js');
module.exports.run = async (client, message, args) => {
    message.reply(`enviei para você no privado, veja em suas mensagens diretas!`).then(msg => msg.delete(6000));
    const msg1 = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL)
    .setColor('RANDOM')
    .setDescription(`Olá **${message.author.username}**, sou o \`Zira\` Um bot divertido do discord :wave:.
    \n :robot: Meus criadores: <@350772260031954944> , <@446430624149143564> , <@479364245914517524>.
    \n :desktop: Creditos Do Comando: [Clique aqui](https://discord.gg/Q65Q49G)!
    \n :question: Meu servidor de suporte: [Clique aqui](https://discord.gg/SJYjvN2)!
    \n\`Selecione alguma categoria para ver o comando.\`
    \n🔩 **»** Comandos de Moderação
    \n📋 **»** Outros comandos`)
    message.member.send(msg1).then(msg=> {
        msg.react("🔩").then(r => {
            msg.react("📋");

            const comandos = (reaction, user) => reaction.emoji.name === '🔩' && user.id === message.author.id;
            const geral = (reaction, user) => reaction.emoji.name === "📋" && user.id === message.author.id;
            const eqp = msg.createReactionCollector(comandos, { time: 60000});
            const grl = msg.createReactionCollector(geral, { time: 60000});

            eqp.on('collect', r=> {
                const embed = new Discord.RichEmbed()
                .setAuthor("🔩 Comandos de Moderação")
                .setColor('RANDOM')
                .setDescription(`**z!ban** \`<@user>\` \`<motivo>\` - Para banir um membro do servidor.
                \n**z!kick** \`<@user>\` \`<motivo>\` - Para kickar um membro do servidor.
                \n**z!limpar** \`<quantia>\` - Para você limpar o chat.
                \n**z!say** \`<msg>\` - Irá mandar mensagens com o bot.
                \n**z!parceiro** \`<msg>\` - Irá anunciar uma nova parceria com um grupo.
                \n**z!mute** \`<@user>\` \`<motivo>\` - Irá mutar o usuário mencionado.
                \n**z!unmute** \`<@user>\` - Irá desmutar o usuário mencionado.
                \n**z!aviso** \`<@user>\` \`<aviso>\` - Para avisar algum usuário que não respeitou as regras. (comando em criação).
                \n**z!warn** \`<@user>\` \`<motivo>\` - Para avisar algum usuário que não obedeceu as regras.`);
                message.member.send({embed: embed}).then(a=>a.delete(15000));
            })
            grl.on('collect', r=>{
                const glr = new Discord.RichEmbed()
                .setAuthor("📋 Outros comandos")
                .setColor('RANDOM')
                .setDescription(`**z!ajuda** - Onde mostra todos os comandos do bot.
                \n**z!invite** - Link para me adicionar em seu servidor.
                \n**z!convite** - Link par ame adicionar em seu servidor.
                \n**z!botinfo** - Para saber um pouco mais sobre mim.
                \n**z!avatar** - Para você baixar seu avatar.
                \n**z!avatar** \`<@user>\` - Para você baixar o avatar do usuário mencionado.
                \n**z!serverinfo** - Para ver as informações do seu servidor.`)
                message.author.send({ embed: glr }).then(a=>a.delete(15000));
            })
        })
    })
}
//
module.exports.help = {
    name: "ajuda"
}
