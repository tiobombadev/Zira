module.exports.run = async(client, message, args) =>{
  message.delete();  
  message.reply(`Enviei meus ``Comandos`` no seu privado`);
  message.author.send({embed: {
        color: 12584993,
        author: {
          name: `${message.author.tag}`,
          icon_url: message.author.avatarURL
        },
        title: "Informações - Zira™",
        url: " ",
        description: "\/",
        fields: [{
            name: "Ajuda",
            value: "Quer saber alguns comandos meus? Veja abaixo! (lembrando que os comandos de moderação precisam do cargo `Staff`.)"
          },
          {
            name: "Moderação",
            value: 
`**z!ban** = Irá banir o membro mencionado (Necessita da menção do usuário e motivo) 
**z!unban** = Irá desbanir o membro já banido (Precisa da menção e motivo)
**z!mute** = Irá mutar o membro mencionado (Precisa da menção e motivo)
**z!unmute** = Irá desmutar o membro já mutado (o membro precisa estar mutado para poder desmutar)
**z!limpar** = Limpará as mensagens (quantidade para colocar: 2 à 100 mensagens)
**z!kick** = Irá kickar o membro mencionado (Necessita da menção do usuário e motivo) 
**z!lockdown** = Irá fechar o chat. **(Poderá ter bugs!)**`
          
},
          {
            name: "Informação & Diversão",
            value: 
`**z!ping** = Caso queira ver o ping
**z!say** = O bot irá dizer a seguinte frase
**z!fotografia** = Irá mandar fotos aleatórias de: Artes, lugares e etc...
**z!serverinfo** = Cachorrinhos!!
**z!botinfo** = Irá mandar informações do bot.
**z!cat** = Gatinhos!!
`
          
},
          {
            name: "Sobre mim",
            value: "Bem, fui criado  programado pelos <@350772260031954944> <@446430624149143564> <@479364245914517524> com o objetivo de ajuda e diverti todo mundo!"
          },
          {
            name: "Zira BOT",
            value: `z!discord | Para entrar no meu grupo!`

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