module.exports.run = async(client, message, args) =>{
    message.delete();  
    message.reply(`Olhe seu privado , o grupo está lá xD!`);
    message.author.send({embed: {
          color: 12584993,
          author: {
            name: `${message.author.tag}`,
            icon_url: message.author.avatarURL
          },
          title: "Discord - Zira™",
          url: " ",
          description: "",
          fields: [{
              name: "Meu Grupo!",
              value: "https://discord.gg/SJYjvN2"
            },
            
             
            {
            
            
              name: "Sobre mim",
              value: "Bem, fui criado  programado pelos <@350772260031954944> <@446430624149143564> <@479364245914517524> com o objetivo de ajuda e diverti todo mundo!"
            },
            {
              name: "Zira BOT",
              value: `Ajude a chegarmos a 100 Membros <3`
  
            }, 
          
          ],
          timestamp: new Date(),
          footer: {
            icon_url: client.user.avatarURL,
            text: "© Zira™"
          }
        }
      });
  }