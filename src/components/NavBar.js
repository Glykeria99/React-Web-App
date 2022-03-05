import { Component } from "react";
import styles from './NavBar.module.css'
import { Link } from "react-router-dom";
class MyNavbar extends Component{
    render() {
        return (
           <div className={styles.navBar}>
  <nav className={styles.stroke} id={styles.mainNav}>
<ul>
        	<li><Link to ="/"><a href="#">Αρχική</a></Link></li>
            <li><Link to ="/about"><a href="#">Σχετικά</a></Link></li>
            <li><Link to ="/services"><a href="#">Υπηρεσίες</a></Link></li>
            <li><a href="#">Επικοινωνία</a></li>
            <li><a href="#">Blog</a></li>
        </ul>
  </nav>
          </div>
        );
    }
}

export default MyNavbar;