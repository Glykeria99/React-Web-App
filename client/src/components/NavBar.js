import { Component } from "react";
import './NavBar.css'
import { Link } from "react-router-dom";

class MyNavbar extends Component{
    render() {
        return (
           <div className='navBar'>
  <nav className='stroke' id='mainNav'>
<ul>
        	<li><Link to ="/">Αρχική</Link></li>
            <li><Link to ="/about">Σχετικά</Link></li>
            <li><Link to ="/services">Υπηρεσίες</Link></li>
            <li>Επικοινωνία</li>
            <li><Link to ="/blog">Blog</Link></li>
        </ul>
  </nav>
          </div>
        );
    }
}

export default MyNavbar;