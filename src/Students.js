import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Students extends Component {
  state = {};
  handleDelete = (stud)=>
  {
    // console.log(stud.id)
    this.props.Deletehandler(stud.id)
   
  }
  render() {
    //map hyer li bt3mel collection 5asa hek bektob function map
    //he props ya3ni lama est3mel variable bara compoment
    const listItem = this.props.student.map((stud) => {
      return (
        <tr key={stud.id}>
          <td>{stud.id}</td>
          {/* `` he kermel ektob code java demen el string */}
          <td><Link to={`/About/${stud.id}`}>{stud.category}</Link></td>
          <td>{Math.floor(stud.price)}$</td>
          <td>
          {/* houn badi arrow map la2nou badi id lal badi a3mela delte */}
            <button className="btn waves-effect  blue-grey" onClick={() => this.handleDelete(stud)}>Delete</button>
          </td>
        </tr>
      );
    });
    return (
      <div>
        <table className="highlight blue-grey-text centered">
          <thead>
            <tr>
              <th>Id</th>
              <th>Category</th>
              <th>Price</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>{listItem}</tbody>
        </table>
      </div>
    );
  }
}
