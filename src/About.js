import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import React, { Component, useEffect, useState } from "react";

export default function About() {
  const [user, setuser] = useState({});
  const params = useParams();
  let navigate = useNavigate();
    const goHome=()=>
    {
    navigate("/"); 
    }
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/" + params.id).then((res) => {
      console.log(res.data);
      setuser(res.data);
    });
  });
  return (
    <div>
      <h1 className="blue-grey-text">{user.category}</h1>
      <div className="container">
        <div className="row">
        <div className="col s6">
            <table className="highlight blue-grey-text centered">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{user.id}</td>
                  <td>{user.price}$</td>
                  {/* <td className="col s12"><p>{user.description}</p></td> */}
                  <td>
                    <button className="btn waves-effect  blue-grey" onClick={goHome}>
                      Undo
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col s6">
            <div className="card" key={user.id}>
              <div className="card-image waves-effect waves-block">
                <img className="activator" src={user.image} />
              </div>
              <div className="card-content" key={user.id}>
                <span className="card-title activator blue-grey-text">
                  {user.title}
                </span>
              </div>
              <div className="card-reveal blue-grey" key={user.id}>
                <span className="card-title">
                  <i className="material-icons right">close</i>
                </span>
                <p>{user.description}</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
