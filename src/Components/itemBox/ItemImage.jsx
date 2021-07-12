import React, { Component } from 'react';
import './ItemBoxStyles.css';

export default class ItemImage extends Component {
    render() {
        return (
            <div>
               <img src={this.props.image}/> 
            </div>
        )
    }
}
