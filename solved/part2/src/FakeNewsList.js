
import React, { Component } from 'react';
import FakeNewsListItem from './FakeNewsListItem';
import PropTypes from 'prop-types';

export default class FakeNewsList extends Component{

    static propTypes = {
        news : PropTypes.array
    }

    onItemClicked = (id) => {
        this.props.handleClick(id);
    }

    render(){
        let newsComponents = this.props.news.map(item =>
            <FakeNewsListItem key={item.id} onItemClicked={this.onItemClicked} fakeNews={item}/>
        );

        return (
            <ul>
                {newsComponents}
            </ul>
        )
    }
}