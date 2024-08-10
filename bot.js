const TelegramBot = require('node-telegram-bot-api');

const token = "7464071401:AAGhBXQJZJaGmfgUXH-y081GCJL8rBsBaVo"

const bot = new TelegramBot(token, {polling:true})

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const message = msg.text;

    if(message === '/start') {
        bot.sendMessage(chatId, 'welcome to the bot')
    }
})