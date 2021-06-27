import React, { Component } from "react";
import './Footer.css'

class Footer extends Component {
    render(){
        return (
            <div className="footer-div">
                <p className="copyright">Crafted by a <i className="fas fa-user-ninja fa-2x"></i><a href="http://www.mycodedojo.com"> © 2021 MyCodeDojo</a></p>
            </div>
        )
    }
}

export default Footer;