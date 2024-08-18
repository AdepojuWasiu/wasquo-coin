export const dynamic = 'force-dynamic'

export const fetchCache = 'force-no-store'

import { Bot, webhookCallback } from 'grammy'

const token = process.env.TELEGRAM_BOT_TOKEN

if (!token) throw new Error('TELEGRAM_BOT_TOKEN environment variable not found.')



const bot = new Bot(token)
// bot.command('start', async (ctx) => {
//     await ctx.reply('Welcome')
// })

bot.command('start', async (ctx) => {
    const userId = ctx.from.id; // Get the user's Telegram ID
    const username = ctx.from.username; // Get the user's username

    const referralCode = ctx.message.text.split(' ')[1]; // Extract the referral code from the start command
    let referrerId;

    if (referralCode) {
        // Parse the referral code if it matches the expected format
        if (referralCode.startsWith('referral_')) {
            referrerId = referralCode.split('_')[1]; // Extract the referrer's ID from the referral code
            // Here you can handle the referral, e.g., log it or reward the referrer
            await ctx.reply(`You were referred by user with ID: ${referrerId}`);
        } else {
            await ctx.reply('Invalid referral code.');
        }
    }

    const url = `https://t.me/WasquoBot/wasquocoin`;
    const refUrl = `https://t.me/WasquoBot/wasquocoin?start=referral_123`
    await ctx.reply(`Welcome!${username} , your id is ${userId} Click the button below to visit the web app. 
                          ${refUrl}`, {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Visit Web App', url }]
            ]
        }
    });
});



export const POST = webhookCallback(bot, 'std/http')



