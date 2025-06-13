import dotenv from 'dotenv';
import express from 'express';

dotenv.config(); // Load environment variables

const app = express();

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "Why did the scarecrow win an award?",
            content: "Because he was outstanding in his field!"
        },
        {
            id: 2,
            title: "Why don't skeletons fight each other?",
            content: "They don't have the guts!"
        },
        {
            id: 3,
            title: "What do you call fake spaghetti?",
            content: "An impasta!"
        },
        {
            id: 4,
            title: "Why did the bicycle fall over?",
            content: "Because it was two-tired!"
        },
        {
            id: 5,
            title: "What do you call cheese that isn't yours?",
            content: "Nacho cheese!"
        }
    ];
    res.send(jokes);
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
