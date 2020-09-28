import React, { memo, useState } from 'react';
import '../css/todo_components/todo_item_component.css';

function TodoItem(props) {
    const [isCompleted, setCompleted] = useState(false);
    function completeTodo(id) {
        setCompleted(!isCompleted);

    }
    return (
        <div className={isCompleted ? 'todo-item completed' : 'todo-item uncompleted'} onClick={() => completeTodo(props.id)}>
            <h4>{props.title}</h4>
        </div>
    );
}

export default memo(TodoItem);