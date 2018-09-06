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
          .setDescription(`Bem-vindo **${member.user.tag}** ao servidor!`) //crÃ©ditos PrimoDoBiscoito#0700
          .setFooter(`Entrou no servidor.`) //crÃ©ditos PrimoDoBiscoito#0700
          .setThumbnail(member.user.displayAvatarURL) //crÃ©ditos PrimoDoBiscoito#0700
          .setTimestamp() //crÃ©ditos PrimoDoBiscoito#0700
          return bemvindo.send(canalentradaesaida); //crÃ©ditos PrimoDoBiscoito#0700
      });
      client.on('guildMemberRemove', member => {
        const canalsaiu = member.guild.channels.find('name', 'saida') //crÃ©ditos PrimoDoBiscoito#0700
      //crÃ©ditos PrimoDoBiscoito#0700
        var canalentradaesaida = new Discord.RichEmbed() //crÃ©ditos PrimoDoBiscoito#0700
    
          .setAuthor(member.user.tag + '', member.user.displayAvatarURL) //crÃ©ditos PrimoDoBiscoito#0700
          .setDescription(`**${member.user.tag}** saiu do servidor!`) //crÃ©ditos PrimoDoBiscoito#0700
          .setFooter(`Saiu do servidor.`) //crÃ©ditos PrimoDoBiscoito#0700
          .setThumbnail(member.user.displayAvatarURL) //crÃ©ditos PrimoDoBiscoito#0700
          .setTimestamp() //crÃ©ditos PrimoDoBiscoito#0700
          return canalsaiu.send(canalentradaesaida); //crÃ©ditos PrimoDoBiscoito#0700
      });

client.on('message', message => {
    if(message.content.toLowerCase() === 'z!invite')
    message.channel.send('Meu Convite: https://discordapp.com/oauth2/authorize?client_id=481234648626626580&scope=bot&permissions=2146958847');

});
client.on('message', message => {
    if(message.content.toLowerCase() === 'z!discordzira')
    message.channel.send('@everyone \n \n Olá , eu venho le convidar para meu grupo!! \n Meu Condominio com o bot **Shiina** , Entre já <3 \n \n Link: https://discord.gg/SJYjvN2');

});
client.on('message', message => {
    if(message.content == '<@481234648626626580>'){
      var embed = new Discord.RichEmbed()
      .setDescription(`**${message.author}**, meu prefix Ã© \`z!\` \n Duvidas Entre Em Meu Grupo \`z!discord\`.`)
      message.channel.send(embed)
    }
  });
client.on('message', message => {
    if(message.content.toLowerCase() === 'z!convidar')
    message.channel.send('Meu Convite Pra Me Adicionar: https://discordapp.com/oauth2/authorize?client_id=481234648626626580&scope=bot&permissions=2146958847');

});

client.on('message', message => {

    var autor = message.author;
    var msg = message.content.toUpperCase();
    var cont = message.content.slice(prefix.lenght).split('');

    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        let commandFile = require(`./comandos/${command}.js`);
        commandFile.run(client, message, args);
    } catch (err) {
        console.error(err);
    }
    message.delete();

});


