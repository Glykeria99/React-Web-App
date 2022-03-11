import { Component } from "react";
import styles from './Services.module.css'
import image from '../../src/images/company.jpg'


class Services extends Component{
    render(){
        return(
            <div className = {styles.about_container}>
                <img className= {styles.image} src = {image} alt="Image 1" ></img>
                <div className = {styles.headline}>Οι Υπηρεσίες μας</div>
            </div>
        );
    }
}

export default Services;