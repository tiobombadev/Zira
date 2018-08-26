const ms = require('ms');
exports.run = (client, message, args) => {
    message.delete();
    if (!client.lockit) client.lockit = [];
    let time = args.join(' ');
    let validUnlocks = ['release', 'off'];
    if (!time) return message.reply('é obrigatório colocar a quantidade de **segundos/minutos/horas/dias** para poder usar o comando.');

    if (validUnlocks.includes(time)) {
        message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: null
        }).then(() => {
            message.channel.sendMessage('Chat desbloqueado.');
            clearTimeout(client.lockit[message.channel.id]);
            delete client.lockit[message.channel.id];
        }).catch(error => {
            console.log(error);
        });
    } else {
        message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false
        }).then(() => {
            message.channel.sendMessage(`Chat bloqueado por ${ms(ms(time), { long: true })}`).then(() => {

                client.lockit[message.channel.id] = setTimeout(() => {
                    message.channel.overwritePermissions(message.guild.id, {
                        SEND_MESSAGES: null
                    }).then(message.channel.sendMessage('Chat desbloqueado.')).catch(console.error);
                    delete client.lockit[message.channel.id];
                }, ms(time));

            }).catch(error => {
                console.log(error);
            });
        });
    }
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['ld'],
    permLevel: 2
};

exports.help = {
    name: 'lockdown',
    description: 'This will lock a channel down for the set duration, be it in hours, minutes or seconds.',
    usage: 'lockdown <duration>'
};