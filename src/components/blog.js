import React, { Component } from 'react';

export default class Blog extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: "",
            author: "",
            body: ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit= this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        let title = this.state.title;
        let author = this.state.author;
        let body = this.state.body;
        fetch('https://cg-python-back-api.herokuapp.com/blog_post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({title:title, author:author, body:body})
        }).then(res => res.json())
        .then(responseData => {return responseData;})
        .catch((err) => console.log(err))

    }

  render() {
    return (
      <div className='blog'>
        <h1>Add Something to the Blog</h1>
        <form onSubmit={this.handleSubmit}>
            <label>Title</label> <br/>
            <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/><br/><br/>
            <label>Author</label><br/>
            <input type="text" name="author"value={this.state.author} onChange={this.handleChange}/><br/><br/>
            <label>Body</label><br/>
            <input type="text" name="body" value={this.state.body} onChange={this.handleChange}/><br/><br/>
            <input type="submit" value="submit"/>
	</form>
      </div>
    );
  }
}