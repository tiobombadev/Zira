module.exports.run = async (client, message, args) => {
}
exports.run = function (client, message) {
    let Table = require(`cli-table`);
    let table = new Table({
        head: [
            `Meus MS:`,
            `Nome:`,
            `Usuários:`,
            `Bots:`,
            `Total:`
        ], colWidths: [30, 50, 10, 10, 10]
    });
    client.guilds.map(g =>
      table.push(
        [g.id, g.name, g.members.filter(u => !u.user.bot).size, g.members.filter(u => u.user.bot).size, g.members.size]
      ));
    require(`snekfetch`)
    .post(`https://hastebin.com/documents`)
    .set(`Content-Type`, `application/raw`)
    .send(table.toString())
    .then(r =>
       message.channel.send(`Veja em quantos servidores estou, ${message.author.tag}! http://hastebin.com/` + r.body.key));
};
module.exports.help = {
    name: 'serverlist'
};