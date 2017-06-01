import React, { Component } from 'react';

import { TodoListContainer } from './containers/todoListContainer'

export class App extends Component {
    render() {
        return (
            <div className="todo-app">
                <TodoListContainer />
            </div>
        )
    }
}
