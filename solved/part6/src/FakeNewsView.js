

import React, { Component } from 'react';
import {NEWS_PROP_TYPE} from './FakeNewsPropType';

export const FakeNewsView = ({fakeNews}) => {
    let component = null;

    if (fakeNews){
        return (
            <div className='news-view'>
                <span >{fakeNews.source}</span>
                <h2 >{fakeNews.title}</h2>
                <span >{fakeNews.description}</span>
            </div>
        );
    }

    return component;

}