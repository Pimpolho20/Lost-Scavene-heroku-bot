const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login('NDc5NDE5ODk2NDUxODI1NjY1.DlZCPw.yGEY62AUnzBYcpTtILTO0fMnqAs');

bot.on('message', message => {
let responseObject = {
    "!munição": "5.56=M16,Scar-L,WASR / 7.62=AKM,Korobov / .357=Sniper,Desert Eagle,Winchester,Lee-Enfield / .50=Colt, Cruzelion,Pioneer,Sten / .308 =Model70,Accuracy / .41=Heckler,Ingram, Zaurus, Thompson / Shotgun Shells=Shotgun,SPAS,Sawnoff Shotgun / 9mm =MP5,Tec9,Glock-19,Glock-19 SD / .380=Ruger,Taurus / Rockets=RPG",
    "!fórum": "http://lostscavenge.forumeiros.com",
    "!ip": "198.50.195.143:7792",
    "!relaxed": "Relaxado*",
    "!crafts": "https://i.imgur.com/gJ555Vd.png",
    "!crafts2": "https://i.imgur.com/iZVTUD9.png",
    "!objetivo": "https://i.imgur.com/XfyXXQX.png",
    "!regras": "https://i.imgur.com/XfyXXQX.png",
    };

    if(responseObject[message.content]){
  message.channel.send(responseObject[message.content]);
}
});

// THIS MUST BE THIS WAY
client.login(process.env.BOT_TOKEN);
