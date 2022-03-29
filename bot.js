const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
const { Client } = require('discord.js');
require('discord-reply');
require('@discordjs/voice');
const client = new Client({ partials: ["CHANNEL"], intents: 32767 });
const db = require('pro.db');
const ms = require('ms');
const config = require('./config.json');
const prefix = config.prefix;
client.on('ready',async () => {  await console.log(client.user.tag);})
client.on('ready', async () => {
 
 client.user.setActivity(`رێکلام بۆ من بنێرە`, { type:'WATCHING' })
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
    return message.channel.send(`**بۆ رێکلام لە تایبەت بۆم بنێرە**`);
  }
});

//ZEROCODES//https://discord.gg/RMEQSbMtEk//ZEROCODES//
//////////////

client.on('messageCreate',async (message) => {
    if (message.author.bot) return;
    if (message.channel.type == 'DM') {
      
    let share = await client.channels.cache.get('IDCHANNEL'); //Id Channel Partner lera dane
    let args = await message.content.split(' ');
    let cool = await db.get(`cool_${message.author.id}`);

    if(!share) return console.log('ژووری رێکلام کار ناکات');
    if (cool > Date.now()) {
        return await message.author.send({content : 'ببورە بۆ ماوەی دوو کاتژمێری تر ئەتوانی دوبارە رێکلام بکەی '}).catch(async (err) => {
            await message.channel.send({content : `${message.author} بۆ ماوەی نیو کاتژمێری تر ئەتوانی دوبارە رێکلام بکەیت`})
        }).catch(err => undefined);
    }
    let time = await Date.now() + ms('2h');
    try {
    await client.fetchInvite(args[0]).then(async (invite) => {
        await db.set(`cool_${message.author.id}`,time);
        await share.send({content: `${invite}\n\` رێکلام کرا لەلایەن\` ${message.author}`});
        await message.channel.send({content : `> ** رێکلام کرا لە ژووری ${share} تۆش بیکە **
https://discord.gg/LinkServert :white_check_mark:`}).catch(async (err) => {
            await message.channel.send({content : `> **${message.author} لینک سێرڤەرت دانرا لە بەشی ${share}**`});
        })
    }).catch(async (err) => {
        await message.channel.send({content: '> **:x: | ئەم لینکە هەڵەیە دوبارە بکەوە  !**'});
    })
   } catch (err) {
       return;
    }}
})
//ZEROCODES//https://discord.gg/RMEQSbMtEk//ZEROCODES//
const discordVoice = require('@discordjs/voice');

 
client.on('messageCreate', async (message) => {
  if(message.author.id !== 'UserId' )// ID Xot Lera dane 
  return;
  if(message.content.startsWith(prefix + "wara")) {const player = discordVoice.createAudioPlayer();
const resource = discordVoice.createAudioResource(`https://youtu.be/56lkofpjOAs`);
                    
const connection = discordVoice.joinVoiceChannel({
  channelId: "", // Id Voice Lera Dane
  guildId: message.guild.id,
  adapterCreator: message.guild.voiceAdapterCreator,
});

player.play(resource);
connection.subscribe(player);

  }
}) 



//https://discord.gg/RMEQSbMtEk//ZEROCODES//

client.login(config.token)// Token Botakat La Bashi config.json dane
