import React, { Component } from 'react';
import './Loader.css'

class Loader extends Component {
    render(){
        return(
    <div class="container">
        <div class="cf">
            <div class="three">
                <div class="loader" id="loader-3"></div>
                <div>Initializing Fun....</div>
            </div>
        </div>
    </div>
        )
    }
}


export default Loader;