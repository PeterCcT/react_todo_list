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

app.put('/completeTodo', (req, res) => {
    const { id } = req.body;
    const todoToMarkAsComplete = toDoList.find(todo => todo.id === id);
    todoToMarkAsComplete.isCompleted = !todoToMarkAsComplete.isCompleted;
    res.send(toDoList);
});

app.delete('/deleteTodo', (req, res) => {
    const { id } = req.body;
    const todoToDelete = toDoList.findIndex(todo => todo.id === id);
    toDoList.splice(todoToDelete, 1);
    res.send(toDoList);
})


app.listen(8080, () => {
    console.log('Have fun while we listen on port 8080 (～ ^-^)～')
})
