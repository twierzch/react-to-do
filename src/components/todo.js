import React, { PureComponent } from 'react';
import autobind from 'autobind-decorator';

export class Todo extends PureComponent {
    @autobind
    onClickHandler() {
        const { onClick, id } = this.props;

        onClick( id );
    }

    render() {
        const stateClass = `todo-item__state ${ this.props.isOpen ? 'todo-item__state--open' : 'todo-item__state--closed' }`;

        return (
            <div className="todo-item" onClick={ this.onClickHandler }>
                <span className="todo-item__name">{this.props.name}</span>
                <div className={ stateClass } />
            </div>
        )
    }
}
