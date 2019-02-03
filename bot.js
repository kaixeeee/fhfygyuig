const settings = require("./config.json"); 
const Discord = require('discord.js');
const initcmd = settings.initcmd;
const id = settings.id;
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Hi ${client.user.tag} , This Code by : Kahrbaa `);
  console.log('')
  console.log(`i Have  [ " ${client.guilds.size} " ]`);
});

const developers = id
const adminprefix = initcmd;
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.send("**:white_check_mark: | The Playing Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else 
  if (message.content.startsWith(adminprefix + 'wat')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send("**:white_check_mark: | The Watching Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else 
  if (message.content.startsWith(adminprefix + 'lis')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send("**:white_check_mark: | The Listening Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else 
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/i_kahrba999");
      message.channel.send("**:white_check_mark: | The Streaming Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'السلام عليكم') {
              message.channel.send('**:RainbowYaaay: وعليكم السلام ورحمة الله وبركاته**');
              message.channel.sendFile("https://cdn.discordapp.com/attachments/339361862997114890/398376746333896705/3dlat.com_14032686841.gif");
               
 
            }
});

 

 
 

 
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'هاي') {
              message.channel.send('**هآيآت , ي حب**');
              message.channel.sendFile("https://cdn.discordapp.com/attachments/339361862997114890/398376746333896705/3dlat.com_14032686841.gif");
               
 
            }
});
 
  

 
 
 
 
 
 
 
 
 
 
 
 
 
  
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === '.') {
              message.channel.send('..');
              message.channel.sendFile("https://cdn.discordapp.com/attachments/339361862997114890/398376746333896705/3dlat.com_14032686841.gif");
               
 
            }
});
 
 
 
 
  
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'هلا') {
              message.channel.send('**أهلين , :rose:**');
              message.channel.sendFile("https://cdn.discordapp.com/attachments/339361862997114890/398376746333896705/3dlat.com_14032686841.gif");
               
 
            }
});
 
 
  
  
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'كايكس') {
              message.channel.send('هلا , كيف أساعدك؟');
              message.channel.sendFile("https://cdn.discordapp.com/attachments/339361862997114890/398376746333896705/3dlat.com_14032686841.gif");
               
 
            }
});
 
 
 


 
 
 
 
 
 

client.login(settings.token);
