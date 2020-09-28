import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddComponent from '../todo_components/AddTodoComponent';
import TodoItensBox from '../todo_components/TodoItensBoxComponent';
import '../css/todo_box.css'
export default function TodoWidget() {
    const [todoList, addTodo] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8080/getTodoList')
            .then(res => {
                addTodo(res.data);
            })
            .catch(err => {
                alert('Impossível de recuperar os dados')
                console.error(err);
            })
    }, []);

    return (
        <div className="todo-container">
            <AddComponent addTodo={(item) => addTodo(item)} todoList={todoList} />
            <TodoItensBox todoList={todoList} />
        </div>
    );
}