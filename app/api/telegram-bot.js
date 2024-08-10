// pages/api/webhook.js
export default async function handler(req, res) {
    const { body } = req;

    if (body.message && body.message.text === '/start') {
        const chatId = body.message.chat.id;

        const message = "Welcome to the bot! Click the button below to visit our web app.";
        const buttonUrl = "https://wasquo-coin.vercel.app";

        const response = await fetch(`https://api.telegram.org/bot7464071401:AAGhBXQJZJaGmfgUXH-y081GCJL8rBsBaVo/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
                reply_markup: {
                    inline_keyboard: [
                        [{ text: "Visit Web App", url: buttonUrl }]
                    ]
                }
            })
        });

        return res.status(200).json({ success: true });
    }

    return res.status(200).json({ success: false });
}

