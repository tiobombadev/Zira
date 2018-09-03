const Discord = require('discord.js');
const client = new Discord.Client();
const bot = new Discord.Client();
const ownerID = `350772260031954944`;
const prefix = `z!` ;
var comandos = new Discord.Collection();

client.login(process.env.BOT_TOKEN);

client.on("ready", () => {
  console.log("Ativado.");
   let gameloop = require('./comando_dono/loop.js'); // Ativaidae de status!!!!!!!!!!
    gameloop.run(client);
})


    console.log('O Bot foi iniciado com sucesso.'.green);
    console.log(`O meu prefixo Ã© ${prefix}`);



    client.on('guildMemberAdd', member => {
  const bemvindo = member.guild.channels.find('name', 'novos-membros')

  var canalentradaesaida = new Discord.RichEmbed()
    .setColor('00FF00')
    .setAuthor(member.user.tag + '', member.user.displayAvatarURL)
    .setDescription(`:inbox_tray: **|** Bem-vindo **${member.user.tag}** ao servidor!`)
    .setFooter(`Entrou`)
    .setTimestamp()
    return bemvindo.send(canalentradaesaida);
});
// comando criado por PrimoDoBiscoito#0700
client.on('guildMemberRemove', member => {
  const canalsaiu = member.guild.channels.find('name', 'novos-membros')

  var canalentradaesaida = new Discord.RichEmbed()
    .setColor('#FF0000')
    .setAuthor(member.user.tag + '', member.user.displayAvatarURL)
    .setDescription(`:outbox_tray: **|** **${member.user.tag}** saiu do servidor!`)
    .setFooter(`Saiu`)
    .setTimestamp()
    return canalsaiu.send(canalentradaesaida);
});
