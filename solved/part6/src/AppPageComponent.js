
import React, { Component } from 'react';
import './App.css';
import './FakeNewsList';
import FakeNewsList from "./FakeNewsList";
import {FakeNewsView} from './FakeNewsView';
import FakeNewsSubmitForm from './FakeNewsSubmitForm';
import {connect} from 'react-redux';
import {
    getNews as getNewsAction,
    addNews as addNewsAction,
    deleteNews as deleteNewsAction,
} from './actions';

import { NavLink } from 'react-router-dom'


class AppPageComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedNewsId: 1
        }

    }
    componentDidMount() {
        this._getUpdateNews();

        this._pollId = setInterval(
            () => this._getUpdateNews(),
            this.props.pollInterval
        );
    }

    componentWillUnmount() {
        clearInterval(this._pollId);
    }

    _getUpdateNews = () => {
        this.props.getNews();
    }

    _handleFormSubmit = (newNews) => {
        this.props.addNews(newNews);
    }

    onNewsItemClicked = (id) => {
        this.setState({selectedNewsId: id});
    }

    render() {
        let {news} = this.props;
        let {selectedNewsId} = this.state;
        let selectedNews = news.find(news => news.id === selectedNewsId);

        return (
            <div className="App">
                <NavLink to={'/testRoute'}>
                    Click Me Dude!
                </NavLink>
                <div className='news-form'>
                    <FakeNewsSubmitForm onSubmit={this._handleFormSubmit}/>
                </div>
                <FakeNewsList news={news} handleClick={this.onNewsItemClicked}/>
                <FakeNewsView fakeNews={selectedNews}/>
            </div>
        );
    }
}

export default connect(
    state => ({news: state}),
    //_mapDispatchToProps
    {
        getNews: getNewsAction,
        addNews: addNewsAction,
        deleteNews: deleteNewsAction
    }
)(AppPageComponent);
