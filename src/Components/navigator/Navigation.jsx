import React, { Component } from 'react';



export default class Navigation extends Component {
    render() {
        return (
                <div>
                     <nav className="navbar navbar-expand-lg navbar-light bg-primary text-primary">
                        <a className="navbar-brand" href="/dash">Agency Management System</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse"  data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                            </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                                    <ul className="navbar-nav mr-auto">

                                    <li className="nav-item">
                                    <a className="nav-link" href="/login">Login</a>
                                    </li>

                                    <li className="nav-item">
                                    <a className="nav-link" href="/sign">Sign-up</a>
                                    </li>

                                    <li className="nav-item">
                                    <a className="nav-link" href="/inventory">Inventory</a>
                                    </li>

                                    <li className="nav-item">
                                    <a className="nav-link" href="/orders">Orders</a>
                                    </li>

                                    <li className="nav-item">
                                    <a className="nav-link" href="/sales">Sales</a>
                                    </li>

                                    <li className="nav-item">
                                    <a className="nav-link" href="/analytics">Analytics</a>
                                    </li>

                                    <li className="nav-item">
                                    <a className="nav-link" href="/SignOut">Sign-Out</a>
                                    </li>

                                   
                                   


                                    </ul>
                                



                                 


                                </div>
                                <div className="btn-group">
        <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          LogOut
        </button>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
          <div className="dropdown-divider" />
          <a className="dropdown-item" href="#">Separated link</a>
          
        </div>
      </div>
                    </nav>
                   

                   


                </div>
        )
    }
}
