var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';

const client = new Discord.Client();

client.on('ready', () => {

    console.log('I am ready!');

});

client.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    var ran = Math.floor(Math.random() * 6);
    message = message.toLowerCase();
    if (message.includes("?")) {
      bot.sendMessage({
         to: channelID,
         message: 'Any other excellent questions'
      });
     }
     if(message.includes("pumping lemma")){
        bot.sendMessage({
           to: channelID,
           message: 'DRINK!'
        });
     }
     if(message.includes("mission failed")){
        bot.uploadFile({
           to: channelID,
           file: "mission.mp3"
        });
     }
     if(message.includes("study guide")){
        bot.uploadFile({
           to: channelID,
           file: "2019-05-15_12-39.pdf"
        });
     }
     if(message.includes("motivation")) {
        if(ran == 0){
           bot.uploadFile({
              to: channelID,
              file: "positive.png"
           });
        }
        else if(ran == 1){
           bot.uploadFile({
              to: channelID,
              file: "positive2.jpg"
           });
        }
        else if(ran == 2){
           bot.uploadFile({
              to: channelID,
              file: "positive3.jpg"
           });
        }
        else if(ran == 3){
           bot.uploadFile({
              to: channelID,
              file: "positive4.jpg"
           });
        }
        else if(ran == 4){
           bot.uploadFile({
              to: channelID,
              file: "positive5.png"
           });
        }
        else if(ran == 5){
           bot.uploadFile({
              to: channelID,
              file: "positive6.jpg"
           });
        }
     }
});

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
