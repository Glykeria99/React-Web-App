import { Component } from "react";
import styles from './about.module.css'
import image from '../../src/images/company.jpg'

class About extends Component{
    render(){
        return(
            <div className = {styles.about_container}>
                <img className= {styles.image} src = {image} alt="Image 1" ></img>
                <div className = {styles.headline}>Η εταιρεία μας</div>
                <div className = {styles.paragraph}>Analysis με έδρα τη Θεσσαλονίκη έχει 
                                    συνεχή  παρουσία στο χώρο της λογιστικής και φοροτεχνικής υποστήριξης των 
                                    επιχειρήσεων από το 1977.
                    Ήδη από το 1980  πρωτοπόρησε παρέχοντας υπηρεσίες μηχανογραφημένης λογιστικής 
                    στους πελάτες της, δημιουργώντας ένα δίκτυο 
                    πιστών πελατών που συνεργάζονται με την
                    Analysis μέχρι σήμερα και στην πορεία
                    κέρδισε την εμπιστοσύνη νέων επαγγελματιών
                    με σύγχρονες ανάγκες (ηλεκτρονικό εμπόριο, 
                    συναλλαγές εξωτερικού, νέες μορφές εταιριών).
                    </div>
            </div>
        );
    }
}

export default About;