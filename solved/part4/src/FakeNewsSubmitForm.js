

import React, { Component } from 'react';
import PropTypes from 'prop-types';

const DEFAULT_FORM_VALUES = {
    source: 'test@test.com',
    title: '',
    description: ''
};

export default class FakeNewsSubmitForm extends Component{

    constructor(props){
        super(props);

        this.state = DEFAULT_FORM_VALUES;
    }

    static propTypes = {
        onSubmit: PropTypes.func.isRequired
    };

    _updateFormFieldState = (name, e) => {
        this.setState({[name]: e.target.value});
    }

    _handleSubmit = (e) => {
        e.preventDefault();

        let {source, title, description} = this.state;

        if (source && title && description) {
            this.props.onSubmit({
                id : 5 , source,title,description
            });

            this.setState(DEFAULT_FORM_VALUES);
        } else {
            alert('fill out the form!');
        }
    }

    render(){
        let {source, title, description} = this.state;

        return (
            <form onSubmit={this._handleSubmit}>
                <fieldset>
                    <label htmlFor="source">
                        Source:
                    </label>
                    <input
                        type="email"
                        id="source"
                        value={source}
                        placeholder="chenfeldmn@gmail.com"
                        onChange={this._updateFormFieldState.bind(this, 'source')}
                    />
                </fieldset>
                <fieldset >
                    <label htmlFor="title">
                        Title:
                    </label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        placeholder="Awesome React workshop!"
                        onChange={this._updateFormFieldState.bind(this, 'title')}
                    />
                </fieldset>
                <fieldset >
                    <label htmlFor="description">
                        Description:
                    </label>
                    <textarea
                        id="description"
                        value={description}
                        placeholder="[Insert description here]"
                        onChange={this._updateFormFieldState.bind(this, 'description')}
                    />
                </fieldset>

                <footer>
                    <button type="submit">Submit News</button>
                </footer>
            </form>
        )
    }
}