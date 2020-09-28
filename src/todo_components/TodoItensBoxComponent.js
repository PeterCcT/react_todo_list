import React from 'react';
import TodoItem from './TodoItemComponent';
import '../css/todo_components/todo_itens_box_component.css'

export default function TodoItensBox(props) {
    return (
        <div className="todo-itens-box">
            {props.todoList.map(item => <TodoItem {...item} />)}
        </div>
    );
}