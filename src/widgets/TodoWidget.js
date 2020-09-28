import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {baseUrl} from '../server/url_base';
import AddComponent from '../todo_components/AddTodoComponent';
import TodoItensBox from '../todo_components/TodoItensBoxComponent';
import '../css/todo_box.css'
export default function TodoWidget() {
    const [todoList, addTodo] = useState([]);
    useEffect(() => {
        axios.get(`${baseUrl}/getTodoList`)
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
            <TodoItensBox todoList={todoList} addTodo = {(item) => addTodo(item)} />
        </div>
    );
}