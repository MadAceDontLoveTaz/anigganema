const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'play.pika-network.net',
  port: 25565,
  username: 'MadAceAlt69',
  version: '1.8',
  auth: 'offline',
  'offline': true
});

bot.once('spawn', () => {
  bot.chat(`/register pedal1 pedal1`);
  setTimeout(() => {
    bot.chat(`/server opfactions`);
  }, 4000);
});

bot.on('message', (message) => {
  console.log(`[${bot.username}]: ${message}`);
  
  if (message.toString().includes('/login pedal1')) {
    bot.chat(`/login pedal1`);
  }
  
  if (message.toString().includes('PikaNetwork » Successful login!')) {
    setInterval(() => {
      bot.chat('/home');
    }, 60000);
  }
});

bot.on('kicked', (reason) => {
  console.log(`[${bot.username}] Kicked: ${reason}`);
  setTimeout(() => {
    bot = mineflayer.createBot({
      host: 'play.pika-network.net',
      port: 25565,
      username: 'MadAceAlt69',
      version: '1.8',
      auth: 'offline',
      'offline': true
    });
  }, 5000);
});

bot.on('end', () => {
  console.log(`[${bot.username}] Disconnected from server.`);
  setTimeout(() => {
    bot = mineflayer.createBot({
      host: 'play.pika-network.net',
      port: 25565,
      username: 'MadAceAlt69',
      version: '1.8',
      auth: 'offline',
      'offline': true
    });
  }, 5000);
});
