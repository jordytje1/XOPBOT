const Discord = require('discord.js');
const got = require('got');
var cheerio = require("cheerio");
var request = require("request");
//var client = new Discord.Client();

module.exports = {
    name: 'nsimage',
    description: 'Sends an image.',
    aliases: ['searchns'],
    permissions: ["SEND_MESSAGES"],
    cooldown: 3,
	async execute(client, message, cmd, args, Discord) {

            image(message, args);
		
			function image(message, args) {
			
				
				var search = args.join(" "); 
				var options = {
				    url: "http://results.dogpile.com/serp?qc=images&q=" + search,
				    method: "GET",
				    headers: {
				        "Accept": "text/html",
				        "User-Agent": "Chrome",
						"Cookie": "ws_prefs=vr=1&af=None"
				    }
				};
				request(options, function(error, response, responseBody) {
					if (error) {
						
						return;
					}
			
					
			
					$ = cheerio.load(responseBody);
			
					
					var links = $(".image a.link");
			
				
					var urls = new Array(links).fill(0).map((v, i) => links.eq(i).attr("href"));
					console.log(urls);
					if (!urls.length) {
						
						return;
					}
			                var errMessage = "**This Is Not An NSFW Channel**";
			        if (!message.channel.nsfw) {
			        message.react('💢');
			
			      return message.reply(errMessage)
			      .then(msg => {
			      msg.delete({ timeout: 3000 })
			      })
				  
			  }
			                if (!message.channel.nsfw) return message.channel.send('**You Must Use This Command In An NSFW Channel**!') 
			
					 const embed = new Discord.MessageEmbed()
					 .setTimestamp()
					 .setFooter('NSFW Images Provided To You By The Bot Supporters')
					 .setTitle('Mmmm.. Nice :)')
			         .setImage(urls[Math.floor(Math.random() * urls.length)]);
					 message.channel.send(embed)
					
				});
			
			}
		}
	}

//~~Deleted Notes~~
	//urls[Math.floor(Math.random() * urls.length)]
	//( urls[~~(Math.random() * urls.length)]  );

	// client.login(process.env.DISCORD_TOKEN);
	// const prefix = '-';

	// const res = await got("http://results.dogpile.com/serp?qc=images&q=" + args.slice(1).join(" "))

// const arrayOfMatches = res.body.match(/(?<=href=")https?.*?(?=")/gm);

// function grabImage() {
//   const image = arrayOfMatches[Math.floor(Math.random() * arrayOfMatches.length)];

//     if (!/jpg|png|gif/gi.test(image)) return grabImage();
//     else return image;
// }


// const embed = new Discord.MessageEmbed()
//   .setFooter('NSFW Images Provided To You By The Bot Supporters')
//   .setTitle('Mmmm.. Nice :)')
//   .setImage(grabImage());

//   message.channel.send(embed)

// }

// }
