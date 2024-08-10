
import TelegramBot from "node-telegram-bot-api";

const token = process.env.TELEGRAM_BOT_TOKEN;

if (!token) {
    console.error("Telegram bot token is missing. Please set the TELEGRAM_BOT_TOKEN environment variable.");
    process.exit(1);
}

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id;
    const username = msg.from.username || 'unknown';

    const buttonUrl = `https://wasquo-coin.vercel.app?user_id=${encodeURIComponent(userId)}&username=${encodeURIComponent(username)}`;
    const message = 'Welcome to the bot!';

    bot.sendMessage(chatId, message, {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Visit Web App', url: buttonUrl }]
            ]
        }
    }).catch(error => {
        console.error("Failed to send message:", error);
    });
});

export default function handler(req, res) {
    res.status(200).json({ message: 'Telegram bot is running' });
}
