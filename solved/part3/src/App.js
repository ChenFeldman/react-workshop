import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './FakeNewsList';
import FakeNewsList from "./FakeNewsList";
import FakeNewsView from './FakeNewsView';
import FakeNewsSubmitForm from './FakeNewsSubmitForm';

const FAKE_NEWS_DATA = [
    {
        id : 1,
        source : 'chenfeldmn@gmail.com',
        title : 'title test',
        description : 'fake news details fake news details fake news details fake news details fake news details'
    },
    {
        id : 2,
        source : 'test@test.com',
        title : 'title test2',
        description : 'fake news details fake news details fake news details fake news details fake news details'
    },
    {
        id : 3,
        source : 'test@test2.com',
        title : 'title test3',
        description : 'fake news details fake news details fake news details fake news details fake news details'
    },
    {
        id : 4,
        source : 'test3@test3.com',
        title : 'title test4',
        description : 'fake news details fake news details fake news details fake news details fake news details'
    }
];


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedItemId: 1,
            news: FAKE_NEWS_DATA
        }

    }

    _handleFormSubmit = (newNews) => {
        this.setState({
            news: [
                newNews,
                ...this.state.news
            ]
        })
    }

    onNewsItemClicked = (id) => {
        this.setState({selectedItemId: id});
    }

    render() {
        return (
            <div className="App">
                <div className='news-form'>
                    <FakeNewsSubmitForm onSubmit={this._handleFormSubmit}/>
                </div>
                <FakeNewsList news={this.state.news} handleClick={this.onNewsItemClicked}/>
                <FakeNewsView fakeNews={FAKE_NEWS_DATA.find(item => item.id === this.state.selectedItemId)}/>
            </div>
        );
    }
}

export default App;
