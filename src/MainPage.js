import React from 'react';
import TodoWidget from './widgets/TodoWidget'
import Title from './elements/titleElement'
import './css/main.css'

export default function MainPage() {
    return (
        <div className="content-body">
            <Title />
            <TodoWidget />
        </div>
    );
}

