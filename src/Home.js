import React, { Component, useEffect, useState } from "react";
import AddStudent from "./AddStudent";
// import Students from "./Students";
import axios from "axios";
// import Search from "./Search";
import Students from "./Students";

export default class Home extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      this.setState({
        data: res.data,
      });
    });
  }
  addStudent = (student) => {
    this.setState({
      //hek b3adel el table min 5elel ... ya3ni 3mel split la zid
      data: [...this.state.data, student],
    });
  };
  Delete = (id) => {
    // const Data = this.state.data.filter((student) => student.id !== id)//eza ken dif 3tini yeh 3abi bi alb data
    // this.setState({
    //   data:Data
    // })
    this.setState({
      data: this.state.data.filter((student) => student.id !== id),
    });
  };
  render() {
    return (
      <div>
        <h1 className="blue-grey-text">Products</h1>
        <AddStudent students={this.addStudent} />
        
        <Students student={this.state.data} Deletehandler={this.Delete} />
      </div>
    );
  }
}
