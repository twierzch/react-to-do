import React, { PureComponent } from 'react';
import autobind from 'autobind-decorator';

export class AddSearchInput extends PureComponent {
    @autobind
    onAddBtnClick() {
        this.props.onAddClick();
    }

    @autobind
    onInputChange( ev ) {
        this.props.onSearchQueryChange( ev.target.value );
    }

    @autobind
    onInputKeyDown( ev ) {
        if ( ev.key === 'Enter' || ev.keyCode === 13) {
            this.props.onAddClick();
        }
    }

    render() {
        return(
            <div className="add-search">
                <input type="text"
                    className="add-search__input"
                    value = { this.props.searchQuery || '' }
                    onChange = { this.onInputChange }
                    onKeyDown = { this.onInputKeyDown }
                />
                <div className="add-search__add-btn"
                    onClick = { this.onAddBtnClick }
                />
            </div>
        )
    }
}
