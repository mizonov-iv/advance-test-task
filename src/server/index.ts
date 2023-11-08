import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

const events = [1, 2, 3, 4, 5]

app.get('/events', (req, res) => {
    res.send(events)
})

app.listen(8000, () => {
    console.log("Listening on port 8000");
});