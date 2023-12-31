import express from 'express';
import cors from 'cors';
import bodyParser from "body-parser";
import {users} from "../constans/users.ts";
import {events} from "../constans/events.ts";
import {generateFormattedDate} from "../utils/dateFormatting.ts";

const app = express();
app.use(cors());
app.use(bodyParser.json());

let allEvents = events;
const allUsers = users;

app.get('/events/', (req, res) => {
    console.log(req)
    res.json(allEvents)
})

app.put('/events', (req, res) => {
    const index = allEvents.findIndex(index => index.id === req.body.id)

    const existingEvent = allEvents[index]
    allEvents[index] = {...existingEvent, ...req.body}
    res.json(allEvents[index])
})

app.delete('/events/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    const index = allEvents.findIndex(item => item.id === itemId)
        allEvents.splice(index, 1)
    res.json(allEvents)
})

app.post('/events', (req, res) => {
    const newEvent = {
        ...req.body,
        id: (Math.random() * 100).toFixed(),
        date: generateFormattedDate()
    };
    allEvents.push(newEvent)
    res.json(allEvents)
})

app.post('/auth', (req, res) => {
    const targetUser = allUsers.find(i => i.user === req.body.username);

    if(!targetUser || targetUser.password !== req.body.password) {
        res.status(401).end();
    } else {
        const {password, ...rest } = targetUser;
        res.json(rest).status(200).end();
    }
})

app.listen(8000, () => {
    console.log("Listening on port 8000");
});