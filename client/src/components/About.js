import { Component } from "react";
import styles from './about.module.css'
import image from '../../src/images/company.jpg'

class About extends Component{
    render(){
        return(
            <div className = {styles.about_container}>
                <img className= {styles.image} src = {image} alt="Image 1" ></img>
                <div className = {styles.headline}>Η εταιρεία μας</div>
                <div className = {styles.paragraph}>Η  Taxbalance παρέχει ολοκληρωμένες λογιστικές, 
                χρηματοοικονομικές, φοροτεχνικές υπηρεσίες.  
                Ο στόχος μας είναι να είμαστε δίπλα στους πελάτες μας 
                για την πιο σύγχρονη αξιόπιστη και άρτια ικανοποίηση 
                των αναγκών τους.
                Η TaxBalance με την εξειδικευμένη της ομάδα, η οποία διαθέτει
                 την κατάλληλη τεχνογνωσία, βασισμένη στις πιο σύγχρονες
                  ψηφιοποιημένες λογιστικές μεθόδους ανταποκρίνεται στις
                   αυξημένες απαιτήσεις της αγοράς.
                    </div>
            </div>
        );
    }
}

export default About;