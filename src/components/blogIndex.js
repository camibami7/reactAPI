import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ViewBlog from "./viewBlog"


export default class BlogIndex extends Component {
    constructor(props) {
      super(props)

      this.state = {
        ourBlogs: []
      }

    }


    componentWillMount() {
        fetch ("https://cg-python-back-api.herokuapp.com/return_blogs", {
          method: "GET",
          headers: {
            "accept": "application/json",
            "Content-Type": "application/json"
          }
        })
        .then(response => {return response.json();})
        .then(responseData => {return responseData;})
        .then(data => {this.setState({ourBlogs: data});})
        .catch(err => {
          console.log("Fetch error" + err)
        })
    }

  render() {
    return (
      <div className='blogIndex'>
        <h1>Blogs</h1>
        <div className="blog-cards">
          {this.state.ourBlogs.map((blogs) => (
            <div className="blog-card" key={blogs[0]}>  
              <div className="links">
                <Link to={{pathname: `/view-blog/${blogs[0]}`}}>View Blog</Link>
                <p>Title: {blogs[1]}</p>
                <p>Author: {blogs[2]}</p>
                <p>Blog Body: {blogs[3]}</p>
              </div>
            </div>
          ))}
        </div>
        {console.log(this.state.ourBlogs)}
      </div>
    );
  }
}