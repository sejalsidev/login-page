import React, { Component } from 'react'
import axios from 'axios'
export default class Get extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       posts:[]

    }
  }
  componentDidMount(){
    axios.get('https://fakestoreapi.com/products/1')
    .then(response=>{
      console.log(response)
      this.setState({ posts: [response.data] });
    })
    .catch(error =>{
      console.log(error)
    })
  }
  render() {
    const {posts} = this.state
    return (
      <div>
        <h1>List of posts</h1>
        {
          posts.length ?
            posts.map(post => {
              return <div key={post.id}>{post.title}</div>;
            }) :
            <p>No posts found</p>
        }
      </div>
    )
  }
}

 