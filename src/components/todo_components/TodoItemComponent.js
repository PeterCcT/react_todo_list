import React, { useState, memo } from 'react';
import axios from 'axios';
import { baseUrl } from "../../server/url_base";
import '../../css/todo_components/todo_item_component.css';

//Create an Todo item that will be displayed each time a new Todo is added
function TodoItem(props) {
    const [isTodoCompleted, setCompleted] = useState(props.isCompleted);
    const [todoTitle, setTitle] = useState(props.title);

    function completeTodo(event) {
        if (event.target.tagName === 'DIV') {
            axios.put(`${baseUrl}/completeTodo`, { id: props.id })
                .then(res => {
                    setCompleted(!isTodoCompleted)
                    props.addTodo(res.data);
                })
                .catch(err => {
                    alert('Erro ao marcar tarefa como concluída')
                    console.error(err);
                })
        }
    }

    function updateTodo(event) {
        if (event.key === 'Enter') {
            if (!todoTitle) {
                alert('Não é possível armazenar uma tarefa vazia ');
            } else {
                axios.put(`${baseUrl}/updateTodo`, { id: props.id, title: todoTitle })
                    .then(res => {
                        props.addTodo(res.data);
                        alert('Tarefa editada com sucesso')
                    })
                    .catch(err => {
                        alert('Erro ao editar tarefa')
                        console.error(err);
                    })

            }
        }
    }

    function setNewTitle(event) {
        setTitle(event.target.value);
    }

    function deleteTodo() {
        axios.delete(`${baseUrl}/deleteTodo/${props.id}`)
            .then(res => {
                props.addTodo(res.data);
                alert('Tarefa excluida com sucesso :)');
            })
            .catch(err => {
                alert('Erro ao exlcuir tarefa :(')
                console.error(err);
            })
    }


    return (
        <div className={isTodoCompleted ? 'todo-item completed' : 'todo-item uncompleted'} onClick={completeTodo}>
            <input onChange={setNewTitle} onKeyPress={updateTodo} value={todoTitle} type="text" />
            <button onClick={() => deleteTodo()}>Deletar</button>
        </div>
    );
}


export default memo(TodoItem)
