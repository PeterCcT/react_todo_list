import React from 'react';
import TodoWidget from './widgets/TodoWidget'
import './css/main.css'

export default function MainPage() {
    return (
        <div className="content-body">
            <TodoWidget />
        </div>
    );
}

