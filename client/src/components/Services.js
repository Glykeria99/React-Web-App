import { Component } from "react";
import './Services.css'
import image from '../../src/images/company.jpg'


class Services extends Component{
    render(){
        return(
            <div className = 'about_container'>
                <img className= 'services-image' src = {image} alt="Image 1" ></img>
                <div className = 'headline'>Οι Υπηρεσίες μας</div>
            </div>
        );
    }
}

export default Services;