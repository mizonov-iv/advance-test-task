import express from 'express';
import cors from 'cors';
import {users} from "../constans/users.ts";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());

const events = [1, 2, 3, 4, 5]
const allUsers = users;

app.get('/events', (req, res) => {
    console.log(req)
    res.send(events)
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