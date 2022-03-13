import { Component } from "react";
import './ClientsComponent.css'
import image1 from '../../src/images/brand1.jpg'
import image2 from '../../src/images/brand2.jpg'

class ClientsComponent extends Component{
    render(){
        return(
            <div className= 'clients-container'>
                <h1 className= 'clients-title'>Οι πελάτες μας</h1>
                <div className= 'brands'>
                <figure className='gallery_item'>
                    <img src = {image1} className= 'gallery_img' alt="Image 1"></img>
                </figure>
                <figure className='gallery_item'>
                    <img src = {image2} className='gallery_img' alt="Image 1"></img>
                </figure>
                </div>
            </div>
        );
    }
}

export default ClientsComponent;