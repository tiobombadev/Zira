module.exports.run = async(client, message, args) =>{
  message.delete(); 
  if(!message.member.roles.some(r=>["Staff"].includes(r.name)) )
      return message.reply("Você precisa do cargo `Staff` para poder banir alguém.");
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Mencione um membro para poder banir. ");
    if(!member.bannable) 
      return message.reply("Eu não posso banir quem tem o mesmo cargo que eu.");

    let reason = args.slice(1).join(' ');
    if(!reason)
      return message.reply("Coloque o motivo do banimento.");
    
    await member.ban(reason)
      .catch(error => message.reply(`Desculpe, ${message.author} Eu não consegui banir o membro por causa de: ${error}`));
}
