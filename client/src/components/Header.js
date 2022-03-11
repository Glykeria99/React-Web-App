import { Component } from "react";
import header from '../../src/images/header.jpg'
import styles from './Header.module.css'
class MyHeader extends Component{
    render() {
        return(
            <div className ={styles.HeaderImage}>
                <h3 className = {styles.title}>The Balance Group</h3>
                <h2 className={styles.message}>Financial Consulting. Let Us Do the Math.</h2>
            </div>
        );
    }
}

export default MyHeader;