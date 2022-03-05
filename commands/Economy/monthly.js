const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
const db = require("quick.db");
module.exports = {
  name: "monthly",
  permissions: ["SEND_MESSAGES"],
  clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  aliases: [],
  cooldown: 2628000,
  description: "daily Xocoins",
  async execute(client, message, cmd, args, Discord) {
    const randomNumber = Math.floor(Math.random() * 100000) + 5000; await db.add(`${message.author.username}_monthly_collected`, 1)
    const fetchd = await db.get(`${message.author.username}_monthly_collected`)
    const embed = new Discord.MessageEmbed().setTimestamp().setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**You Received \`${randomNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\`Monthly Xocoins!💸**`).setColor(`${color}`).setFooter(`Total Monthly\`s Collected:${fetchd.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`)
    message.lineReplyNoMention({ embed: embed });
    client.add(message.author.id, randomNumber)
  },
};