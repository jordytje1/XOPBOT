const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
module.exports = {
    name: 'findbug',
    aliases: ['bugsearch', 'findbugs', 'fb'],
    permissions: ["ADMINISTRATOR"],
    clientpermissions: ["ADMINISTRATOR"],
    cooldown: 4200,
    description: 'kill a user',
    async execute(client, message, cmd, args, Discord) {
        const randomNumber = Math.floor(Math.random() * 100) + 1; const randomNumber2 = Math.floor(Math.random() * 50) + 1; const randomNumber3 = Math.floor(Math.random() * 150) + 1; const randomNumber4 = Math.floor(Math.random() * 20) + 1; const randomNumber5 = Math.floor(Math.random() * 10) + 1; const randomNumber6 = Math.floor(Math.random() * 5) + 1; const randomNumber7 = Math.floor(Math.random() * 200) + 1; const findbugembed = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**XOPBOT Looked For Bugs On ${message.guild.name}**\nOn Bot Commands He Found **${randomNumber} Bugs**\n\On Roles He Found **${randomNumber2} Bugs**\n\On Message He Found **${randomNumber3} Bugs**\n\On Streaming He Found **${randomNumber4} Bugs**\nOn Voice He Found **${randomNumber5} Bugs**\nOn Server He Found **${randomNumber6} Bugs**\nOn Bot Response He Found **${randomNumber7} Bugs**`)
        return message.lineReplyNoMention({ embed: findbugembed })
    }
}