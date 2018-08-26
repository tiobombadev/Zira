module.exports.run = async (client, message, args) => {
}
const Discord = require('discord.js');

const cooldown = new Set();

exports.run = function (client, message) {
  /*
    Command's cooldown due to spam issues
  */
    const fetch = require('snekfetch');
    /*
      Fetch data from the restful API
    */
    fetch.get('https://aws.random.cat/meow').then(cat => {
        const embed = new Discord.RichEmbed()
        .addField('Gatinhos!! :cat:','Se dizer que isso não é uma fofura, retire o que disse.')
        .setImage(`${cat.body.file}`);
        message.channel.send({embed}).catch(e => logger.error(e))
    }).catch(err => {
        if (err) {
            message.channel.send('Opa! Algo deu errado...');
        }
    });
};
module.exports.help = {
    name: 'cat'
};