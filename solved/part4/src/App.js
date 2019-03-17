import React, { Component } from 'react';
import './App.css';
import './FakeNewsList';
import FakeNewsList from "./FakeNewsList";
import FakeNewsView from './FakeNewsView';
import FakeNewsSubmitForm from './FakeNewsSubmitForm';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedItemId: 1,
            news: [{id : 1 ,source:'a@b.com', title:'',description:''}]
        }

    }

    componentDidMount() {
        this._getUpdateNews();

        this._pollId = setInterval(
            () => this._getUpdateNews(),
            3000
        );
    }

    componentWillUnmount() {
        clearInterval(this._pollId);
    }

    _getUpdateNews = () => {
        return fetch('//localhost:5050/news')
            .then(res => res.json())
            .then(news => this.setState({news}))
            .catch(ex => console.error(ex));
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
                <FakeNewsView fakeNews={
                    this.state.news.find(item => item.id === this.state.selectedItemId)}
                />
            </div>
        );
    }
}

export default App;
