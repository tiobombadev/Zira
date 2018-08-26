module.exports.run = async (client, message, args) => {
}
exports.run = function (client, message) {
    const puppy = require('random-puppy');
    puppy()
    .then(url => {
        message.channel.send(url);
    });
};
module.exports.help = {
    name: 'puppy'
};