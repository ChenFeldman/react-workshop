
import React, { Component } from 'react';
import {NEWS_PROP_TYPE} from './FakeNewsPropType';
import PropTypes from 'prop-types';

export default class FakeNewsListItem extends Component{

    static propTypes = {
        fakeNews : NEWS_PROP_TYPE.isRequired,
        onItemClicked : PropTypes.func
    };

    handleClick(id){
        this.props.onItemClicked(id);
    }

    render() {
        return (
            <li className='news-row' onClick={id => this.handleClick(this.props.fakeNews.id)}>
                <span className='news-row-item'>{this.props.fakeNews.source}</span>
                <span className='news-row-item'>{this.props.fakeNews.title}</span>
                <span className='news-row-item'>{this.props.fakeNews.description}</span>
            </li>
        )
    }
}