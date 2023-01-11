import React, { Component } from 'react'

export default class AddStudent extends Component {
    state = {
        category:"Men",
        price:"15"
    }
    handlechangecategory = (e) => {
        this.setState({
            category:e.target.value
        })
    }
    handlechangerpice = (e) => {
        this.setState({
            price:e.target.value
        })
    }
    handleAddButton = (e) =>
    {
        //la2nou button
        e.preventDefault();
        this.props.students({id:Math.floor(Math.random() * 10),category:this.state.category,price:this.state.price})
        this.setState({
            category:" ",
            price:" "
        })
    }
  render() {
    return (
        <div>

            <div className='row'>
                <form className='col s6'>
                <div className='input-field col s6'>
                <input id="Category" type="text" class="validate"  onChange={this.handlechangecategory}/>
                <label for="Category">Category</label>
                </div>
                <div className='input-field col s6'>
                <input id="Price" type="text" class="validate"  onChange={this.handlechangerpice}/>
                <label for="Price">Price</label>
                </div>
                <div className='col'>
                <button className="btn waves-effect  blue-grey" type="submit" onClick={this.handleAddButton}>Add
                </button>
                </div>           
                </form>            
             </div>

             

        </div>
    )
  }
}
