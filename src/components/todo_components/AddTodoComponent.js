import React from 'react';
import axios from 'axios';
import {baseUrl} from '../../server/url_base'
import '../../css/todo_components/add_todo_component.css'

export default function AddTodo(props) {

    function makeRequestToSaveTodo(todoToAdd) {
        axios.post(`${baseUrl}/addTodo`, todoToAdd)
            .then(res => {
                const todoList = res.data;
                props.addTodo(todoList);
            })
            .catch(err => {
                alert('Um erro ocorreu, impossível de salvar tarefa :(')
                console.error(err);
            })
    }

    function saveTodo(event) {
        if (event.key === 'Enter') {
            const todoToAdd = {
                id: props.todoList.length,
                title: event.target.value,
                isCompleted: false
            }
            makeRequestToSaveTodo(todoToAdd);
            event.target.value = '';
        }
    }

    return (
        <div className="add-todo">
            <input className="add-todo-input" type="text" placeholder="Adicione uma pequena tarefa" onKeyPress={saveTodo} />
        </div>
    );
}