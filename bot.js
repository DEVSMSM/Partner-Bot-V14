const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('GG MEN')
})

app.listen(3000)

const { Client } = require('discord.js');
require('@discordjs/voice');
const client = new Client({ partials: ["CHANNEL", "MESSAGES", "GUILD_MEMBERS", "DIRECT_MESSAGES"], intents: 32767 });
const db = require('pro.db');
const ms = require('ms');
const { token , joinvc, partner, link, prefix}  = require('./config.json');
client.on('ready',async () => {  await console.log(client.user.tag);})
client.on('ready', async () => {
 
 client.user.setActivity(`Free Ads Send Your Link Server`, { type:'WATCHING' })
});

//ZEROCODES//https://discord.gg/RMEQSbMtEk//ZEROCODES//
////////

client.on("messageCreate", (message) => {
    if (message.content === "Reklam") {
        message.reply(`رێکلام لە تایبەت بۆم بنێرە`);
    }
    if (message.content === "رێکلام هەیە") {
        message.reply(`رێکلام لە تایبەت بۆم بنێرە`);
    }
    if (message.content === "ريكلام") {
        message.reply(`رێکلام لە شەخسی بۆم بنێرە`);
    }
  if (message.content === "ریکلام") {
        message.reply(`رێکلام لە تایبەت بۆم بنێرە`);
  }
  if (message.content === "reklam haya") {
        message.reply(`رێکلام لە تایبەت بۆم بنێرە`);
}
  if (message.content === "Reklam haya") {
        message.reply(`رێکلام لە تایبەت بۆم بنێرە`);
  }
  if (message.content === "Reklam?") {
        message.reply(`رێکلام لە تایبەت بۆم بنێرە`);
    }
  if (message.content === "REKLAM") {
        message.reply(`رێکلام لە تایبەت بۆم بنێرە`);
  }
  if (message.content === "reklam?") {
        message.reply(`رێکلام لە تایبەت بۆم بنێرە`);
    }
if (message.content === "Reklam ?") {
        message.reply(`رێکلام لە تایبەت بۆم بنێرە`);
}
if (message.content === "reklam") {
        message.reply(`رێکلام لە تایبەت بۆم بنێرە`);
}
if (message.content === "ریکلام هەیە") {
        message.reply(`رێکلام لە تایبەت بۆم بنێرە`);
    }
if (message.content === "Reklam agornawa") {
        message.reply(`رێکلام لە تایبەت بۆم بنێرە`);
    }
if (message.content === "reklam agornawa") {
        message.reply(`رێکلام لە تایبەت بۆم بنێرە`);
    }
	if (message.content === "Ad") {
        message.reply(`Send Link in Dm`)
}
if (message.content === "ads") {
        message.reply(`Send Link in Dm`)
}
if (message.content === "partner") {
        message.reply(`Send Link in Dm`)
}
if (message.content === "Partner") {
        message.reply(`Send Link in Dm`)
}
if (message.content === "اعلان") {
        message.reply(`ارسل بل خاص`)
}

});
//ZEROCODES//https://discord.gg/RMEQSbMtEk//ZEROCODES//
//////////////
client.on("messageCreate", async message => {
  if (message.channel.type === "dm") return;
  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.member)
    message.member = await message.guild.fetchMember(message);

  if (message.content.match(new RegExp(`^<@!?${client.user.id}>`))) {
    return message.channel.send(`**Dm Me For Ads**`);
  }
});

//ZEROCODES//https://discord.gg/RMEQSbMtEk//ZEROCODES//
//////////////

client.on('messageCreate',async (message) => {
    if (message.author.bot) return;
    if (message.channel.type == 'DM') {
      
    let share = await client.channels.cache.get(partner);
    let args = await message.content.split(' ');
    let cool = await db.get(`cool_${message.author.id}`);

    if(!share) return;
    if (cool > Date.now()) {
        return await message.author.send({content : 'Sorry You Can Send Your Ad Again After 30m '}).catch(async (err) => {
            await message.channel.send({content : `${message.author} Sorry You Can Send Your Ad Again After 30m `})
        }).catch(err => undefined);
    }
    let time = await Date.now() + ms('30m');
    try {
    await client.fetchInvite(args[0]).then(async (invite) => {
        await db.set(`cool_${message.author.id}`,time);
        await share.send({content: `${invite}\n **📨 Posted By** ${message.author}`});
        await message.channel.send({content : `
> 📪 **Posted In ${share}**
> 📮 **Post This Link in Your Server To** ${link}`}).catch(async (err) => {
            await message.channel.send({content : `> **${message.author} You Server Posted in ${share}**`});
        })
    }).catch(async (err) => {
        await message.channel.send({content: '> **:x: |  Invalid Link Try Again!**'});
    })
   } catch (err) {
       return;
    }}
})
//ZEROCODES//https://discord.gg/RMEQSbMtEk//ZEROCODES//





const discordVoice = require('@discordjs/voice');

 
client.on('messageCreate', async (message) => {
  if(message.author.id !== '349942964904001546' )
  return;
  if(message.content.startsWith(prefix + "join")) {const player = discordVoice.createAudioPlayer();
const resource = discordVoice.createAudioResource(`https://youtu.be/56lkofpjOAs`); // مكان الصوت . 
                    
const connection = discordVoice.joinVoiceChannel({
  channelId: "933151483103436830",
  guildId: message.guild.id,
  adapterCreator: message.guild.voiceAdapterCreator,
});

player.play(resource);
connection.subscribe(player);

  }
}) 


//https://discord.gg/RMEQSbMtEk//ZEROCODES//

client.login(token)
