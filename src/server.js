import 'dotenv/config';
import express from "express";
const app = express();
import UserController from "./controller/UserController";
app.use(express.json())
import queue from './lib/queue'

const { router } = require('bull-board');
const { setQueues, BullAdapter } = require('bull-board')

var array = []
let filas = queue.queues.map(queue => {
    array.push(queue.bull)
})

setQueues([
    new BullAdapter(array[0]),
    new BullAdapter(array[1]),
]);

app.use('/admin/queues', router)


app.post('/users', UserController.store);

app.listen(3333, () => {
    console.log("Server running")
})
