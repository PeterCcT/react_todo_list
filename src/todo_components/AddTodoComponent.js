import React from 'react';
import axios from 'axios';
import '../css/todo_components/add_todo_component.css'

export default function AddTodo(props) {

    function saveTodo(event) {
        if (event.key === 'Enter') {
            // const todoList = [...props.todoList, { id: props.todoList.length, title: event.target.value }]
            const toDoToAdd = {
                id: props.todoList.length,
                title: event.target.value
            }
            axios.post('http://localhost:8080/addTodo', toDoToAdd)
                .then(res => {
                    const todoList = res.data;
                    props.addTodo(todoList);
                })
                .catch(err => {
                    alert('Um erro ocorreu, impossível de salvar tarefa :(')
                    console.error(err);
                })

            event.target.value = '';
        }
    }
    return (
        <div className="add-todo">
            <input className="add-todo-input" type="text" placeholder="Adicione uma pequena tarefa" onKeyPress={saveTodo} />
        </div>
    );
}