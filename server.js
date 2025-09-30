require('dotenv').config(); // Loads .env
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '.'))); // Serves index.html and static files

// Proxy endpoint for OpenAI
app.post('/openai-proxy', async (req, res) => {
    const { prompt } = req.body;
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
        console.log('Error: API key missing from .env');
        return res.status(500).json({ error: 'API key missing' });
    }
    console.log('Proxy received prompt:', prompt); // Log incoming

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: 'gpt-4o-mini',
                messages: [
                    { role: 'system', content: 'You are Diana\'s steady inner companion. You read her wishes with empathy and clarity, celebrate her curiosity and ambition, and respond with grounded insight that invites courageous, focused reflection.' },
                    { role: 'user', content: prompt }
                ],
                max_tokens: 300,
                temperature: 0.7,
                presence_penalty: 0.3
            })
        });
        const data = await response.json();
        if (data.error) {
            console.error('OpenAI API error:', data.error);
            return res.status(500).json({ error: data.error });
        }
        console.log('OpenAI success:', data.choices[0].message.content); // Log success
        res.json(data);
    } catch (error) {
        console.error('Proxy catch error:', error.message); // Detailed log
        res.status(500).json({ error: 'Proxy error: ' + error.message });
    }
});

// Catch-all to serve index.html for frontend
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
