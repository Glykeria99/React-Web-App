import { Component } from "react";
import header from '../../src/images/header.jpg'
import './Header.css'
class MyHeader extends Component{
    render() {
        return(
            <div className= 'HeaderImage'>
                <h3 className = "title">Tax Balance</h3>
                <h2 className='message'>Financial Consulting. Let Us Do the Math.</h2>
            </div>
        );
    }
}

export default MyHeader;