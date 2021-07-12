import React, { Component } from 'react';
import './ItemBoxStyles.css';
import './ItemImage'
export default class itemBox extends Component {
    render() {
        return (
            <div className="box" align="center">
                <h2>{this.props.title}</h2>
                <img src={this.props.Image}  />
                <p>im pasindu....</p>
            </div>
        )
    }
}
