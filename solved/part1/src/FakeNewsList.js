
import React, { Component } from 'react';
import FakeNewsListItem from './FakeNewsListItem';

const FAKE_NEWS_DATA = [
    {
        source : 'chenfeldmn@gmail.com',
        title : 'title test',
        description : 'fake news details fake news details fake news details fake news details fake news details'
    },
    {
        source : 'test@test.com',
        title : 'title test2',
        description : 'fake news details fake news details fake news details fake news details fake news details'
    },
    {
        source : 'test@test2.com',
        title : 'title test3',
        description : 'fake news details fake news details fake news details fake news details fake news details'
    },
    {
        source : 'test3@test3.com',
        title : 'title test4',
        description : 'fake news details fake news details fake news details fake news details fake news details'
    }
];

export default class FakeNewsList extends Component{

    render(){
        let newsComponents = FAKE_NEWS_DATA.map(item =>
            <FakeNewsListItem source={item.source} title={item.title} description={item.description}/>
        );

        return (
            <ul>
                {newsComponents}
            </ul>
        )
    }
}