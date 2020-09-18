const { token } = require('./config.json');
const { Client } = require('discord.js');
const client = new Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION' ] });
const fs = require('fs');

const eventFiles = fs.readdirSync('./events');
for (const eventFile of eventFiles) {
    const event = require(`./events/${eventFile}`);
    const eventName = eventFile.split('.')[0];
    client.on(eventName, event.bind(null, client));
}

client.login(token);