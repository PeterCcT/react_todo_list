const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express();
app.use(bodyParser.json())
app.use(cors());

const toDoList = [];


app.get('/getTodoList', (req, res) => {
    res.send(toDoList);
})

app.post('/addTodo', (req, res) => {
    console.log(req.body);
    toDoList.push(req.body);
    res.send(toDoList);
})

app.put('/updateTodo', (req, res) => {
    const { title, id } = req.body;
    const todoToUpdate = toDoList.find(todo => todo.id === id);
    if (todoToUpdate != null) {
        todoToUpdate.title = title;
        res.send(toDoList);
    } else {
        res.sendStatus(400);
    }
})

app.put('/completeTodo', (req, res) => {
    const { id } = req.body;
    const todoToMarkAsComplete = toDoList.find(todo => todo.id === id);
    if (todoToMarkAsComplete != null) {
        todoToMarkAsComplete.isCompleted = !todoToMarkAsComplete.isCompleted;
        res.send(toDoList);
    } else {
        res.sendStatus(400);
    }
});

app.delete('/deleteTodo/:id', (req, res) => {
    const id = Number(req.params.id);
    const todoToDelete = toDoList.findIndex(todo => todo.id === id);
    if (todoToDelete !== -1) {
        toDoList.splice(todoToDelete, 1);
        res.send(toDoList);
    } else {
        res.sendStatus(400);
    }
})


app.listen(8080, () => {
    console.log('Have fun while we listen on port 8080 (～ ^-^)～')
})
