import React, { useState } from 'react';
import axios from 'axios';
import { baseUrl } from "../server/url_base";
import '../css/todo_components/todo_item_component.css';

export default function TodoItem(props) {
    const [isTodoCompleted, setCompleted] = useState(props.isCompleted);

    function completeTodo(id) {
        axios.put(`${baseUrl}/completeTodo`, { id: id })
            .then(res => {
                setCompleted(!isTodoCompleted)
                props.addTodo(res.data);
            })
            .catch(err => {
                alert('Erro ao marcar tarefa como concluída')
                console.error(err);
            })
    }

    function deleteTodo(id) {
        axios.delete(`${baseUrl}/deleteTodo`, { id: id })
            .then(res => {
                props.addTodo(res.data);
                alert('Tarefa excluida com sucesso :)');
            })
            .catch(err => {
                console.error(err);
            })
    }

    return (
        <div className={isTodoCompleted ? 'todo-item completed' : 'todo-item uncompleted'} onClick={() => completeTodo(props.id)}>
            <h4>{props.title}</h4>
            <h5 onClick={() => deleteTodo(props.id)}>Deletar</h5>
        </div>
    );
}
