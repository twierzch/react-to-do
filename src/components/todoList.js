import React, { PureComponent } from 'react';

import { Todo } from './todo'

export class TodoList extends PureComponent {
    render() {
        const { todos, onTodoClick } = this.props;

        const todoItems = todos.map(
            item => <Todo key={ item.id } onClick={ onTodoClick } { ...item } />
        )

        return (
            <div className="todo-list">
                <div className="todo-list--items">
                    { todoItems }
                </div>
            </div>
        )
    }
}
