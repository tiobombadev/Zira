module.exports.run = async (client, message, args) =>{
    if(message.member.id == "350772260031954944") {
    
        let args = message.content.split(' ').slice(1).join(' ');
  
        if(!args){
          message.reply("Insira o status de streaming");
        }
  
        client.user.setActivity(`${args}`, {
          type: 'STREAMING',
          url: 'https://twitch.tv/magnataeffects',
        });
        message.reply('alterado.');
      } else {
        message.reply("apenas o criador do bot, pode utilizar este comando.")
      }
  
}