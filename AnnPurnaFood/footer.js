import logo from './images/logo.png';

import './index.css';

const Footer = () =>
{
    return(
        <>
            <footer>
                <div className="logo-div">
                    {/* <div className="footer-company-name-container"> */}
                        <img  src={logo} alt="company logo" />
                        {/* <h3>AnnPurna Food</h3> */}
                    {/* </div> */}
                    <p>&#169; 2023 All right reserved to <strong style={{color:'white'}}>ravi.org</strong></p>
                </div>
                <div className="company-link-div">
                <ul>
                        <li>
                            <h3>Company</h3>
                        </li>
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">About</a>
                        </li>
                        <li>
                            <a href="">Food</a>
                        </li>
                        <li>
                            <a href="">Sign In</a>
                        </li>
                    </ul>
                </div>
                <div className="contact-link-div">
                    <div className="contact-us-div">
                        
                        {/* <div className="email-us-at">
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                            <p>raviraushanrai@gmail.com</p>
                        </div> */}
                        <ul className='contact-us-container'>
                            <li>
                                <h3>Contact us</h3>
                            </li>
                            <li>
                                <a href="">Help & Support</a>
                            </li>
                            <li>
                                <a href="">Partner with us</a>
                            </li>
                            <li>
                                <a href="">Ride with us</a>
                            </li>
                        </ul>

                        <ul className='legal-container'>
                            <li>
                                <h3>Legal</h3>
                            </li>
                            <li>
                                <a href="">Terms & Conditions</a>
                            </li>
                            <li>
                                <a href="">Cookies Policy</a>
                            </li>
                            <li>
                                <a href="">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="we-work-on-div">
                    <ul>
                        <li>
                            <h3>We deliever to:</h3>
                        </li>
                        <li>
                            <a href="">Patna</a>
                        </li>
                        <li>
                            <a href="">Muzaffarpur</a>
                        </li>
                        <li>
                            <a href="">Darbhanga</a>
                        </li>
                        <li>
                            <a href="">Samastipur</a>
                        </li>
                        <li>
                            <a href="">Madhubani</a>
                        </li>
                        <li>
                            <a href="">Rajgir</a>
                        </li>
                        <li>
                            <a href="">Vaishali</a>
                        </li>
                        <li>
                            <a href="">Hazipur</a>
                        </li>
                        <li className='select-cities-options'>
                            <a href="">
                                <select name="" id="">
                                    <option value="">523 cities</option>
                                </select>
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    )
};

export default Footer;