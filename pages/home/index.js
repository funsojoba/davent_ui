import NavBar from "./navBar"
import Image from 'next/image'


const HomePage = () => {

    return (
        <div className="home-container">
            <NavBar />
            
            <div className="section-one">
                <div className="section-one-text">
                    <h1>DAVENT</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa sagittis sit odio pellentesque. Risus eu pharetra.</p>
                    <div className="buttons">
                        <a id="link-hover" className="login">Log In</a>
                        <a id="link-hover" className="signup">Sign Up</a>
                    </div>
                </div>
            </div>

            <div className="section-two">
                <div className="section-two-text flex-child">
                    <h1 className="title-text">What is Davent?</h1>
                    <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa sagittis sit odio pellentesque. Risus eu pharetra.</p>
                    <div className="buttons">
                        <a id="link-hover" className="get-started">Get Started</a>
                    </div>
                </div>
                <div className="section-two-image flex-child">
                    <div className="image">
                        <img src="/section-two.png" alt="davent-logo"  />
                    </div>
                </div>
            </div>
            
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
                        <a id="link-hover" className="get-started">Get Started</a>
                    </div>
                </div>
                
            </div>
            <div className="section-two">
                <div className="section-two-text flex-child">
                    <h1 className="title-text">Seamless service</h1>
                    <p className="paragraph">Get to know about the events happening around you, stay informed blah blah blah</p>
                    <div className="buttons">
                        <a id="link-hover" className="get-started">Get Started</a>
                    </div>
                </div>
                <div className="section-two-image flex-child">
                    <div className="image">
                        <img src="/section-four.png" alt="davent-logo"  />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;