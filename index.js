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
    console.log(`O meu prefixo é ${prefix}`);

client.on('message', message => {
    if(message.content.toLowerCase() === 'z!invite')
    message.channel.send('Meu Convite: https://discordapp.com/oauth2/authorize?client_id=481234648626626580&scope=bot&permissions=2146958847');

});
client.on('message', message => {
    if(message.content == '<@481234648626626580>'){
      var embed = new Discord.RichEmbed()
      .setDescription(`**${message.author}**, meu prefix é \`z!\` \n Duvidas Entre Em Meu Grupo \`z!discord\`.`)
      message.channel.send(embed)
    }
  });
client.on('message', message => {
    if(message.content.toLowerCase() === 'z!convidar')
    message.channel.send('Meu Convite: https://discordapp.com/oauth2/authorize?client_id=481234648626626580&scope=bot&permissions=2146958847');

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


