const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async() =>{
 console.log(`${bot.user.username} is online!`);
bot.user.setActivity(`Minecraft`);
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  //!say Hello
if(cmd === `${prefix}hello`){
  return message.channel.send("Hello!");
}

//!Member Count

if(cmd === `${prefix}membercount`){
     let sicon = message.guild.iconURL;
     let serverembed = new Discord.RichEmbed()
     .setDescription("Members:")
     .setColor("#75aaff")
     .addField("Member Count", message.guild.memberCount);

return message.channel.send(serverembed);
}
//!serverdate
     if(cmd === `${prefix}serverdate`){
          let sicon = message.guild.iconURL;
          let serverembed = new Discord.RichEmbed()
          .setDescription("servercreatetime:")
          .setColor("#75aaff")
          .setThumbnail(sicon)
          .addField("createdAt", message.guild.createdAt)

     return message.channel.send(serverembed);
   }
//מה נשמע
if(message.content == 'מה נשמע?'){
 message.channel.sendMessage('אחלה מה איתך?');
}

if(message.content == 'מצויין'){
 message.channel.sendMessage(`מעולה !`);
}

if(message.content == 'תגיד מי יצר אותך?'){
 message.channel.sendMessage(`שון המלך מה זאת אומרת?`);
}

if(message.content == 'בוקר טוב!'){
 message.channel.sendMessage(`בוקר טוב גם לך! , איך עבר עליך הבוקר?`);
}

if(message.content == 'גל'){
  message.channel.sendMessage(`הומו`);
}

if(message.content == 'מה למה?'){
 message.channel.sendMessage(`כי הוא ביקש בוט שמקלל אז הוא קיבל אחד`);
}

if(message.content == 'גל המלך'){
 message.channel.sendMessage(`נא הוא סתם לוזר`);
}

if(message.content == 'שון המלך'){
 message.channel.sendMessage(`איך ידעת את זה?`);
}

   if(message.content == 'אליאור'){
    message.channel.sendMessage('גנב מדופלם');
   }

   //bot info command
  if(cmd === `${prefix}botinfo`){

  let bicon = bot.user.displayAvatarURL;
  let botembed = new Discord.RichEmbed()
  .setDescription("Bot Information")
  .setColor("#4286f4")
  .setThumbnail(bicon)
  .addField("Bot Name", bot.user.username)
  .addField("Created On", bot.user.createdAt)
  .addField("Made By", "<@461151799924228108>");

  return message.channel.send(botembed);
   }


});


bot.login(process.env.BOT_TOKEN);
