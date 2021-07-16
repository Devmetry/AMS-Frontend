import React, { Component } from 'react';
import './OrderNewStyles.css'

export default class OrderNew extends Component {
    render() {
        return (
            <div align="center">
                <h1>New Order</h1>

                <form className="addOrder-form">
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Item Name</label>
          <input type="Text" className="form-control" id="exampleFormControlInput1" placeholder="Eg:-ItemName" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Order Type</label>
          <select className="form-control" id="exampleFormControlSelect1">
            <option>Normal</option>
            <option>Urgent</option>
            {/* <option>3</option>
            <option>4</option>
            <option>5</option> */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Quantity</label>
          <select className="form-control" id="exampleFormControlSelect1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Remarks</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
        </div>
        <button type="submit" className="btn submit-button">Submit</button>
      </form>
            </div>
        )
    }
}
