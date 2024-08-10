import TelegramBot from "node-telegram-bot-api";




const token = '7464071401:AAGhBXQJZJaGmfgUXH-y081GCJL8rBsBaVo'
const bot = new TelegramBot(token, {polling:true});

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id;
    const username = msg.from.username || 'unknown'

    const buttonUrl = `https://wasquo-coin.vercel.app?user_id=${userId}& username= ${username}`
    const message = 'welcome to the bot'

    bot.sendMessage(chatId, message, {
        reply_markup:{
            inline_keyboard: [
                [{text:'visit web App', url:buttonUrl}]
            ]
        }
    })
} )
console.log(msg)

export default function handler(req,res) {
    res.status(200).json({message:'Telegram bot is running'})
}