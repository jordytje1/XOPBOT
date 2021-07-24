module.exports = {
    name: 'websiteinvite',
    permissions: ["SEND_MESSAGES"],
    aliases: ['winv', 'webinvite', 'wi'],
    description: "Embeds!",
    execute(client, message, cmd, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
            .setTimestamp()
            .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
            .setColor('#c30202')
            .setTitle('Bot Website Invite')
            .setURL('https://www.xopbot.tk/')
            .setDescription('**This Is The Bot Website Invite Link**')
            .addFields(
                { name: 'Bot Website Invite Link', value: '[Bot Website](https://www.xopbot.tk//)' }

            )
            .setFooter(`Requested By: ${message.author.tag}`, message.author.displayAvatarURL())


        message.channel.send(newEmbed);
    }

}