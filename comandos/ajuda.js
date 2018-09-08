module.exports.run = async(client, message, args) =>{
  message.delete();  
  message.reply(`Mandei meus comandos no seu privado.`);
  message.author.send({embed: {
        color: 12584993,
        author: {
          name: `${message.author.tag}`,
          icon_url: message.author.avatarURL
        },
        title: "Informações - Zira™",
        url: " ",
        description: ":warning: Entre em meu grupo , go bater 100 Membros! ::warning: ",
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
`**z!ping** = Caso queira ver o ping do bot
**z!say** = O bot irá dizer a seguinte frase
**z!fotografia** = Irá mandar fotos aleatórias de: Artes, lugares e etc...
**z!puppy** = Cachorrinhos!!
**z!botinfo** = Irá mandar informações do bot.
**z!cat** = Gatinhos!!
**z!votacao** = Fazer uma votação.
**z!aviso** = Fazer um aviso.
**z!conquista** = Fazer uma conquista.
**z!piada** = O Bot irá fazer uma piada.
`
          
},
          {
            name: "Sobre mim",
            value: "Bem, fui criado e programado por: <@350772260031954944> <@446430624149143564> <@479364245914517524>"
          },
          {
            name: "Entre em meu grupo do discord",
            value: `z!discord`

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
