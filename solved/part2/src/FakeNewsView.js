

import React, { Component } from 'react';
import {NEWS_PROP_TYPE} from './FakeNewsPropType';

export default class FakeNewsView extends Component{

    static propTypes = {
        fakeNews : NEWS_PROP_TYPE.isRequired
    }

    render(){
        return (
            <div className='news-view'>
                <span >{this.props.fakeNews.source}</span>
                <h2 >{this.props.fakeNews.title}</h2>
                <span >{this.props.fakeNews.description}</span>
            </div>
        )
    }
}