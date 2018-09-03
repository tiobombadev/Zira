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
        const bemvindo = member.guild.channels.find('name', 'entrada') //crÃ©ditos PrimoDoBiscoito#0700
        var canalentradaesaida = new Discord.RichEmbed()
       
          .setAuthor(member.user.tag + '', member.user.displayAvatarURL) //crÃ©ditos PrimoDoBiscoito#0700
          .setDescript
