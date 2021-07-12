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
                                    </ul>
                                



                                 


                                </div>
                    </nav>
                </div>
        )
    }
}
