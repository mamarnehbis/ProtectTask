import React, { Component } from "react";
// import axios from "axios";
// import Example1 from './render_Names';

// import {render} from 'react-dom';
// const x=3;

const URL = ('https://jsonplaceholder.typicode.com/posts/2');




class posts extends Component {
  constructor(props) {
   super(props);
   this.state = {
    data: false
   };
   this.receiveData = this.receiveData.bind(this);
  }
  componentDidMount() {
   var _self = this;
   fetch(URL)
   .then(function(res) {
      return res.json();
   }).then(function(json) {
      console.log(json);
      _self.receiveData(json);
   });
  }
  receiveData(data) {
   this.setState({data});
  }
  render() {
   return <div id="x">{JSON.stringify(this.state.data.body)}</div>
  }
 }

export default posts;
