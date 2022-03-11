import { Component } from "react";
import styles from './NavBar.module.css'
import { Link } from "react-router-dom";
class MyNavbar extends Component{
    render() {
        return (
           <div className={styles.navBar}>
  <nav className={styles.stroke} id={styles.mainNav}>
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