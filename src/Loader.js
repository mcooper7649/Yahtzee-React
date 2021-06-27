import React, { Component } from 'react';
import './Loader.css'

class Loader extends Component {
    render(){
        return(
    <div className="container">
        <div className="cf">
            <div className="three">
                <div className="loader" id="loader-1"></div>
                <div>Initializing Fun....</div>
            </div>
        </div>
    </div>
        )
    }
}


export default Loader;