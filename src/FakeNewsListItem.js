
import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class FakeNewsListItem extends Component{

    static propTypes = {
        source : PropTypes.string,
        title : PropTypes.string,
        description : PropTypes.string
    }

    render(){
        return (
            <li className='news-row'>
                <span className='news-row-item'>{this.props.source}</span>
                <span className='news-row-item'>{this.props.title}</span>
                <span className='news-row-item'>{this.props.description}</span>
            </li>
            )
    }
}