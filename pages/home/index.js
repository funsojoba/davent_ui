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
                <div className="section-two-text">
                    <h1>What is Davent?</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa sagittis sit odio pellentesque. Risus eu pharetra.</p>
                    <div className="buttons">
                        <a id="link-hover" className="signup">Get Started</a>
                    </div>
                </div>
                <div className="section-two-image">
                    <img src="/section-two.png" alt="davent-logo"  />
                </div>
            </div>
        </div>
    );
}

export default HomePage;