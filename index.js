```js id="x4n7pm"
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', message => {
  if (message.author.bot) return;

  // Ping Role Command
  if (message.content === '!event') {
    message.channel.send('<@&ROLE_ID> Event is starting!');
  }

  // Sticky Message
  if (message.channel.id === 'CHANNEL_ID') {
    message.channel.send('📌 Please follow the server rules.');
  }
});

client.login(process.env.TOKEN);
```
