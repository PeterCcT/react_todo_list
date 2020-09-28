const express = require('express');
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.json())

const toDoList = [];


app.get('/getTodoList', (req, res) => {
    res.send(toDoList);
})
app.post('/addTodo', (req, res) => {
    console.log(req.body);
    toDoList.push(req.body);
    res.send(toDoList);
})


app.listen(8080, () => {
    console.log('Have fun while we listen on port 8080 (～ ^-^)～')
})
