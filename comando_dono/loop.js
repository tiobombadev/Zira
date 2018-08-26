const Discord = require("discord.js");

module.exports.run = async (client) =>{


    const sleep = time => new Promise(resolve => {
        setTimeout(resolve, time)
    })
    var i;
    console.log("")
    console.log("Loop no status do BOT ativo!");
    console.log(" ");

    for (i=0; i<10;){
        
        client.user.setPresence({ game: { name: `para ${client.guilds.size} servidores! Obrigado por me usarem!`, url: "https://www.twitch.tv/viniciussz_", type: 1} });
        await sleep(60000)
        client.user.setPresence({ game: { name: "h!invite | h!ajuda", type: 0 } });
        await sleep(60000)
        client.user.setPresence({ game: { name: `${client.users.size} pessoas! 😍`, type: 3} });
        await sleep(60000)
        client.user.setPresence({ game: { name: `Me adicione em seu servidor, use h!invite`, url: "https://www.twitch.tv/viniciussz_", type: 2} });
        await sleep(60000)
        client.user.setPresence({ game: { name: `Está precisando de um suporte maior ? Entre aqui: https://discord.gg/Q65Q49G`, url: "https://www.twitch.tv/viniciussz_", type: 3} });
       
    }
   

}
