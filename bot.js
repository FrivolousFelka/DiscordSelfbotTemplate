const { Client, MessageEmbed } = require('discord.js-selfbot');
const client = new Client();

let token = "";


let prefix = ">";
let setaction = "";

console.log('[Selfbot] Selfbots are against Discord TOS, use wisely');
console.log('[Selfbot] Running on Discord API version ' + Client.version);

client.on('ready', () => {
     console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity(setaction);
});


client.on('message', msg => {
    if (msg.author.id !== client.user.id) return;

    const args = msg.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        msg.edit('Pong!');
    }
});

client.login(token);