module.exports.run = async (client, message, args) =>{
    if(message.member.id == "350772260031954944") {
    
        client.user.setStatus("dnd");
           
           message.reply('status **ocupado** adicionado com sucesso.');
         } else {
           message.reply(":x: Você não tem permissão para usar este comando! Apenas o criador do bot.")
         }
}