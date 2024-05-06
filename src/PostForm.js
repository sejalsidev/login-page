import axios from 'axios';
import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class PostForm extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        id: '',
        title: '',
        price: '',
        description: '',
        category: ''
      };
    }
  
    changeHandler = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    };
  
    submitHandler = (e) => {
      e.preventDefault();
      console.log(this.state);
      axios
      .post('https://fakestoreapi.com/products', this.state) // Changed endpoint to /products to create a new product
      .then(response => {
        console.log(response);
        // Optionally, you can handle the response here
      })
      .catch(error => {
        console.error('Error:', error);
      });
    };
  
 render() {
    const { id, title, price, description, category } = this.state;
    return (
      <div>
        PostForm
        <form onSubmit={this.submitHandler}>
          <div>
            <input type="text" name="id" value={id} onChange={this.changeHandler} /><br/><br/>
          </div>
          <div>
            <input type="text" name="title" value={title} onChange={this.changeHandler} /><br/><br/>
          </div>
          <div>
            <input type="text" name="price" value={price} onChange={this.changeHandler} /><br/><br/>
          </div>
          <div>
            <input type="text" name="description" value={description} onChange={this.changeHandler} /><br/><br/>
          </div>
          <div>
            <input type="text" name="category" value={category} onChange={this.changeHandler} /><br/><br/>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}