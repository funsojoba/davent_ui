import NavBar from "./navBar"
import Image from 'next/image'
import ScrollAnimation from 'react-animate-on-scroll';


const HomePage = () => {

    return (
        <div className="home-container">
            <NavBar />
            
                <div className="section-one">
                    <div className="section-one-text">
                        <h1>DAVENT</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa sagittis sit odio pellentesque. Risus eu pharetra.</p>
                        <div className="buttons">
                            <a id="link-hover" href="/login" className="login">Log In</a>
                            <a id="link-hover" href="/signup" className="signup">Sign Up</a>
                        </div>
                    </div>
                </div>
            <ScrollAnimation animateIn="fadeIn">
                <div className="section-two">
                    <div className="section-two-text flex-child">
                        <h1 className="title-text">What is Davent?</h1>
                        <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa sagittis sit odio pellentesque. Risus eu pharetra.</p>
                        <div className="buttons">
                            <a id="link-hover" href="/signup" className="get-started">Get Started</a>
                        </div>
                    </div>
                    <div className="section-two-image flex-child">
                        <div className="image">
                            <img src="/section-two.png" alt="davent-logo"  />
                        </div>
                    </div>
                </div>
            </ScrollAnimation>
            
            <ScrollAnimation animateIn="fadeIn">
                <div className="section-three">
                    <div className="section-two-image flex-child">
                        <div className="image">
                            <img src="/section-three.png" alt="davent-logo"  />
                        </div>
                    </div>
                    <div className="section-two-text flex-child">
                        <h1 className="title-text">Get it done with ease</h1>
                        <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa sagittis sit odio pellentesque. Risus eu pharetra.</p>
                        <div className="buttons">
                            <a id="link-hover" href="/signup" className="get-started">Get Started</a>
                        </div>
                    </div>
                </div>
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeIn">
                <div className="section-two">
                    <div className="section-two-text flex-child">
                        <h1 className="title-text">Seamless service</h1>
                        <p className="paragraph">Get to know about the events happening around you, stay informed blah blah blah</p>
                        <div className="buttons">
                            <a id="link-hover" href="/signup" className="get-started">Get Started</a>
                        </div>
                    </div>
                    <div className="section-two-image flex-child">
                        <div className="image">
                            <img src="/section-four.png" alt="davent-logo"  />
                        </div>
                    </div>
                </div>
            </ScrollAnimation>

            <div className="footer">
                <ScrollAnimation animateIn="fadeIn">
                    <div className="about-us">
                        <p>About us</p>
                        <ul>
                            <li><a href="#">Users</a></li>
                            <li><a href="#">Admin</a></li>
                            <li><a href="#">Event</a></li>
                            <li><a href="#">Organization</a></li>
                        </ul>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn">
                    <div className="about-us">
                        <p>Policies</p>
                        <ul>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Data Protection</a></li>
                        </ul>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn">
                    <div className="about-us">
                        <p>Developers</p>
                        <ul>
                            <li><a href="#">API Docs</a></li>
                        </ul>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn">
                    <div className="about-us">
                        <p>Contact Us</p>
                        <ul>
                            <li>1342 Helis St. Alen Avenue Sanfrasisco, LA</li>
                            <li>+1 234 5678 0</li>
                            <li>help@davent.com</li>
                        </ul>
                    </div>
                </ScrollAnimation>
            </div>
        </div>
    );
}

export default HomePage;