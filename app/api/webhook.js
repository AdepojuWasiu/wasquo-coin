// export default function handler(req, res) {
//     console.log('Request method:', req.method); // Log the request method
  
//     if (req.method === 'POST') {
//       // Handle the incoming update from Telegram
//       console.log('Received update:', req.body);
  
//       // Respond to Telegram with a 200 status
//       res.status(200).json({ message: 'Webhook received' });
//     } else {
//       // Respond with 405 if the method is not POST
//       res.setHeader('Allow', ['POST']);
//       res.status(405).end(`Method ${req.method} Not Allowed`);
//     }
//   }
  