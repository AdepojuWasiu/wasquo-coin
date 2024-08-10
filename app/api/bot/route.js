// export const dynamic = 'force-dynamic'

// export const fetchCache = 'force-no-store'

// import { Bot, webhookCallback } from 'grammy'

// const token = process.env.TELEGRAM_BOT_TOKEN

// if (!token) throw new Error('TELEGRAM_BOT_TOKEN environment variable not found.')

// bot.command('start', async (ctx) => {
//     await ctx.reply('Welcome')
// })

// const bot = new Bot(token)
// bot.on('message:text', async (ctx) => {
//   await ctx.reply(ctx.message.text)
// })

// export const POST = webhookCallback(bot, 'std/http')

import TelegramBot from 'node-telegram-bot-api';

const token = process.env.TELEGRAM_BOT_TOKEN
const bot = new TelegramBot(token);

export default function handler(req, res) {
    if (req.method === 'POST') {
        // Log the request body for debugging
        console.log('Received a POST request:', req.body);

        // Process the incoming webhook update
        bot.processUpdate(req.body);
        res.status(200).json({ message: 'Webhook received' });
    } else {
        // Log the method used in the request
        console.log(`Received a ${req.method} request. Responding with 405.`);
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const message = msg.text;
    console.log(`Received message: ${message} from chatId: ${chatId}`);

    if (message === '/start') {
        bot.sendMessage(chatId, 'Welcome to the bot');
    }
})