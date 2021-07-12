import React, { Component } from 'react';
import './DashbordStyles.css';

export default class Dashbord extends Component {
    render() {
        return (
            <div >
                <div align="center">
                <h1 >No Name</h1>
                <h1>AGENCY MANAGEMENT SYSTEM</h1>
                </div>
                <div className="cards">
                <div className="card text-white bg-info mb-3" style={{maxWidth: '18rem'}}>
          <div className="card-header">INVENTORY</div>
          <div className="card-body">
            <h5 className="card-title">Info card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a class="btn btn-info" href="/inventory" role="button">Go to Inventory</a>
          </div>
        </div>
       
        <div className="card text-white bg-secondary mb-3" style={{maxWidth: '18rem'}}>
          <div className="card-header">SALES</div>
          <div className="card-body">
            <h5 className="card-title">Secondary card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a class="btn btn-secondary" href="#" role="button">Go to Sales</a>
          </div>
        </div>

        <div className="card text-white bg-success mb-3" style={{maxWidth: '18rem'}}>
          <div className="card-header">ORDERS</div>
          <div className="card-body">
            <h5 className="card-title">Success card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a class="btn btn-success" href="#" role="button">Go to Orders</a>
          </div>
        </div>
       
       
      
        <div className="card text-white bg-dark mb-3" style={{maxWidth: '18rem'}}>
          <div className="card-header">ANALYTICS</div>
          <div className="card-body">
            <h5 className="card-title">Dark card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a class="btn btn-dark" href="#" role="button">Go to Analytics</a>
          </div>
        </div>
      </div>


      
            </div>
        )
    }
}
