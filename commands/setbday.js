const bdaySchema = require('../models/bdayprofile');
const moment = require('moment');

module.exports = {
    name: 'setbday',
    aliases: ["set-birthday"],
    cooldown: 20,
    permissions: ["SEND_MESSAGES"],
    async execute(client, message, cmd, args, Discord) {

        const doc = new bdaySchema({ _id: message.author.id });
            if (!args[0]) {
                return message.channel.send(`**${message.author.tag}**, Please Add The Date In DD-MM Format`);
            };
            const date = moment(date, 'DD-MM');
            doc.data.profile.birthday = date.format('Do MMMM');

            return doc.save()
                .then(() => message.channel.send(`**${message.author.tag}**, Your Birthday Has Been Updated To **${date.format('Do MMMM')}**!`))
                .catch(() => message.channel.send(`**${message.author.tag}**, Your Birthday Update Failed!`))
    }
}