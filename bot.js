// bot.js
// A discord bot for our robotics team server.

// Set up:
const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');
const fs = require('fs');

client.on('ready', () => {
  console.log(`logged in as ${client.user.tag}!`);
});

client.login(auth.token);

// Respond to the most recent message:
client.on('message', msg => {
  
  if (msg.content === 'rage') {
		// This command send a message with a randomized keyboard smash.
		
		// Contains all the letters on the middle row of the QWERTY keyboard.
		var keyboard = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
		var keyboardSmash = "";

    // 33% of the time it is upper case, 33% of the time it is lower case, 33% of the time it is a random combination of upper and lower case.
    var lowerUpper = Math.floor(Math.random() * 3);
		
		// Randomizes the length of the string from 5-25.
		var lenSmash = (Math.floor(Math.random() * 20) + 5);
		var i;
		for (i = 0; i < lenSmash; i++) {
			// Adds the new randomized letter to the end of the keyboardSmash string.
      if(lowerUpper == 1 && Math.floor(Math.random()*2)==0){
        keyboardSmash = keyboardSmash + keyboard[Math.floor(Math.random() * keyboard.length)].toUpperCase();
      } else {
        keyboardSmash = keyboardSmash + keyboard[Math.floor(Math.random() * keyboard.length)];
      }
		}
		
		if (lowerUpper == 0) {
			keyboardSmash = keyboardSmash.toUpperCase();
		}
		
		// Sends the message.
		msg.channel.send(keyboardSmash);
	}
  
  // Runs if lit is anywhere in the sentence
  if (msg.content.includes("lit")) {
    // Makes sure that the bot does not respond to itself.
    if (msg.author.bot) return;
    // Sends the message.
    msg.channel.send('lit lit lit :fire:');
  }
  
  if (msg.content === 'jannah shut up'){
    msg.channel.send("yeah, she should stop sending so many messages in a row...");
  }
  
  if (msg.content.includes('email')) {
    // Makes sure that the bot does not respond to itself.
    if (msg.author.bot) return;
    // Sends the message.
    msg.channel.send('email them to the GRAVE :skull:');
  }
  
});
