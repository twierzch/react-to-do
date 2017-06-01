import React, { PureComponent } from 'react';
import autobind from 'autobind-decorator';

import { TodoList } from '../components/todoList';
import { AddSearchInput } from '../components/addSearchInput';
import { uniqueId } from '../utils/uniqueId';

export class TodoListContainer extends PureComponent {
    constructor( props ) {
        super( props )

        this.state = {
            'searchQuery': null,
            'todosList': [],
        }
    }

    @autobind
    onTodoClick( itemId ) {
        const todosList = this.state.todosList.map( item => {
            if ( item.id === itemId ) item.isOpen = !item.isOpen;

            return item;
        });

        this.setState( { todosList } );
    }

    @autobind
    onAddTodoClick() {
        const name = this.state.searchQuery;
        if ( !name ) return;

        const todosList = this.state.todosList.slice();
        todosList.push({
            id: uniqueId( 'todo' ),
            isOpen: true,
            name: this.state.searchQuery,
        })

        this.setState({
            searchQuery: null,
            todosList,
        });
    }

    @autobind
    onSearchQueryChange( searchQuery ) {
        this.setState( { searchQuery } )
    }

    get todosList() {
        const { searchQuery, todosList } = this.state;

        if ( !searchQuery ) return todosList;

        return todosList.filter( item => item.name.indexOf( searchQuery ) > -1 );
    }

    render() {
        return (
            <div className="todo-list-container">
                <AddSearchInput
                    searchQuery = { this.state.searchQuery }
                    onSearchQueryChange = { this.onSearchQueryChange }
                    onAddClick = {  this.onAddTodoClick }
                />
                <TodoList
                    todos = { this.todosList }
                    onTodoClick = { this.onTodoClick }
                    onAddTodoClick = { this.onAddTodoClick }
                />
            </div>
        )
    }
}
