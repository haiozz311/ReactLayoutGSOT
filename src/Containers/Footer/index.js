import React, { Component } from 'react';
import img from './asset/index';
import './footer.css';

export default class Footer extends Component {
    render() {
        return (
            <div>
                <img className="footer" src={img.footer} alt=""/>
            </div>
        )
    }
}
