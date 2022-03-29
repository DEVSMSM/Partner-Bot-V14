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


////////

    client.on('messageCreate', async message => {
  if (message.content.startsWith('reklam')) { message.reply('رێکلام لە تایبەت بۆم بنێرە ');
  }
});



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
  if (message.content === "اعلان") {
        message.reply(`دز اعلان بل خاص`);
    }
  if (message.content === "REKLAM") {
        message.reply(`رێکلام لە تایبەت بۆم بنێرە`);
  }
  if (message.content === "Partner") {
        message.reply(`Send Server link In Dm`);
    }
if (message.content === "partner") {
        message.reply(`Send Server Link in Dm`);
}
});
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
//////////////


client.on('messageCreate',async (message) => {
    if (message.author.bot) return;
    if (message.channel.type == 'DM') {
      
    let share = await client.channels.cache.get('933149605212848128'); ///// ID Channel Partner lera dane
    let args = await message.content.split(' ');
    let cool = await db.get(`cool_${message.author.id}`);

    if(!share) return console.log('ژووری رێکلام کار ناکات');
    if (cool > Date.now()) {
        return await message.author.send({content : 'بۆ ماوەی نیو کاتژمێری تر ئەتوانی دوبارە رێکلام بکەیت'}).catch(async (err) => {
            await message.channel.send({content : `${message.author} بۆ ماوەی نیو کاتژمێری تر ئەتوانی دوبارە رێکلام بکەیت`})
        }).catch(err => undefined);
    }
    let time = await Date.now() + ms('1h');//الكول داون تقدر تعدل بكيفك
    try {
    await client.fetchInvite(args[0]).then(async (invite) => {
        await db.set(`cool_${message.author.id}`,time);
        await share.send({content: `${invite}\n\` رێکلام کرا لەلایەن\` ${message.author}`});
        await message.channel.send({content : `> ** رێکلام کرا لە ژووری ${share} تۆش بیکە **
https://discord.gg/RMEQSbMtEk :white_check_mark:`}).catch(async (err) => {
            await message.channel.send({content : `> **${message.author} The link has been posted ${share}**`});
        })
    }).catch(async (err) => {
        await message.channel.send({content: '> **:x: | ئەم لینکە هەڵەیە دوبارە بکەوە  !**'});
    })
   } catch (err) {
       return;
    }}
})

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





client.login(config.token)
