import { Component } from "react";
import styles from './ClientsComponent.module.css'
import image1 from '../../src/images/brand1.jpg'
import image2 from '../../src/images/brand2.jpg'

class ClientsComponent extends Component{
    render(){
        return(
            <div className= {styles.container}>
                <h1 className= {styles.title}>Οι πελάτες μας</h1>
                <div className= {styles.brands}>
                <figure className={styles.gallery_item}>
                    <img src = {image1} className={styles.gallery_img} alt="Image 1"></img>
                </figure>
                <figure className={styles.gallery_item}>
                    <img src = {image2} className={styles.gallery_img} alt="Image 1"></img>
                </figure>
                </div>
            </div>
        );
    }
}

export default ClientsComponent;