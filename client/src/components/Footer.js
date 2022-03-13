import { Component } from "react";
import './Footer.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";


class Footer extends Component{
    componentDidMount() {
        const script = document.createElement("script");
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js";
        script.async = true;      
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js';
        script.async = true;
      
      }
    render(){
        return(
            <div className="maincontainer my-6">
                <footer className="text-center text-white">
                    <div className="container mycontainer">
                        <section className="mt-5">
                            <div className="row text-center d-flex justify-content-center pt-5">
                                <div className="col-md-2">
                                    <h6 className="text-uppercase font-weight-bold">
                                    <Link to ="/" className="text-white">Αρχική</Link>
                                    </h6>
                                </div>

                                <div className="col-md-2">
                                    <h6 className="text-uppercase font-weight-bold">
                                    <Link to ="/about" className="text-white">Σχετικά</Link>
                                    </h6>
                                </div>

                                <div className="col-md-2">
                                    <h6 className="text-uppercase font-weight-bold">
                                    <Link to ="/services" className="text-white">Υπηρεσίες</Link>
                                    </h6>
                                </div>
                                
                                <div className="col-md-2">
                                    <h6 className="text-uppercase font-weight-bold">
                                    <Link to ="/contact" className="text-white">Επικοινωνία</Link>
                                    </h6>
                                </div>

                                <div className="col-md-2">
                                    <h6 className="text-uppercase font-weight-bold">
                                    <Link to ="/blog" className="text-white">Blog</Link>
                                    </h6>
                                </div>
                            </div>
                        </section>

                        <hr className="my-5" />

                        <section className="mb-2">
                            <div className="row d-flex justify-content-center">
                                <div className="row text-center ">
                                <div className="col-md-8">
                                    <p>Keimeno blsdfsdfdsdfdsfsdf sdf sdfssf sdf s s fdsuh blu</p>
                                    </div>
                                </div>
                                <div className="col-md-2 info">
                                    <h6 className="text-uppercase ">
                                        <div className="text-white me-4 parent">
                                            <i className="fab fa-location-dot"></i>
                                            <div className="location"> Ωραιόκαστο, Θεσσαλονίκη  </div>
                                        </div>
                                    </h6>
                                    <h6 className="text-uppercase ">
                                        <div className="text-white me-4 parent">
                                            <i className="fab fa-phone"></i>
                                            <div className="phone-number"> 2394032945  </div>
                                        </div>
                                    </h6>

                                </div>
                            </div>
                        </section>

                        <section className="text-center mb-5">
                            <a href="" className="text-white me-4">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="" className="text-white me-4">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="" className="text-white me-4">
                                <i className="fab fa-instagram"></i>
                            </a>
                           
                        </section>
                    </div>

                    <div
                        className="text-center p-1"
                    >
                        © 2022 Copyright: 
                        <a className="text-white"
                        > Tax Balance</a>
                    </div>
                </footer>
                
            </div>
        
        );

}
}

export default Footer;