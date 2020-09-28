import React from 'react';
import TodoItem from './TodoItemComponent';
import '../../css/todo_components/todo_itens_box_component.css'

//This component holds all the Todo itens that have been added
export default function TodoItensBox(props) {
    return (
        <div className="todo-itens-box">
            {props.todoList.map(item => <TodoItem {...item} addTodo = {props.addTodo} />)}
        </div>
    );
}