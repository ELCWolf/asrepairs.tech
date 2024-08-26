require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

console.log('API Key:', process.env.OPENAI_API_KEY); // Log the API key to check if it's loaded correctly

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));

const apiKey = process.env.OPENAI_API_KEY;

app.post('/api/chat', async (req, res) => {
    const userInput = req.body.userInput;

    try {
        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: 'gpt-4-turbo',
                messages: [
                    { role: 'system', content: 'You are a virtual assistant for ASRepairs. Please help the user with any tech repair or consulting needs. If you are unable to assist, refer them to (https://calendly.com/aryanksheth/3-consultation).' },
                    { role: 'user', content: userInput }
                ],
                temperature: 1,
                max_tokens: 512,
                top_p: 1,
                frequency_penalty: 0,
                presence_penalty: 0
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}` // Corrected syntax
                }
            }
        );

        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data from OpenAI:', error.message);
        console.error('Error details:', error.response ? error.response.data : 'No additional error details');
        res.status(500).json({ error: 'Failed to fetch data from OpenAI' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
