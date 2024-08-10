import TelegramBot from 'node-telegram-bot-api';

const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token);

// Set webhook to your Vercel deployment URL
bot.setWebHook(`https://wasquo-coin.vercel.app/api/webhook`);

export default function handler(req, res) {
    if (req.method === 'POST') {
        bot.processUpdate(req.body); // Process incoming updates from Telegram
        res.status(200).json({ message: 'Webhook received' });
    } else {
        res.status(405).end(); // Method Not Allowed for non-POST requests
    }
}

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const message = msg.text;

    if (message === '/start') {
        bot.sendMessage(chatId, 'Welcome to the bot');
    }
});
