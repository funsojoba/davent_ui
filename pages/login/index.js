import NavBar from "../home/navBar"
import Image from 'next/image'


const HomePage = () => {

    return (
        <div className="home-container">
            <NavBar />
            <div className="sign-in-container">
                <div className="sign-in-one">
                    <div className="navBar-logo">
                        <Image src="/DaventLogo.svg" alt="davent-logo" width={450} height={90} />
                    </div>
                </div>
                <div className="sign-in-two">
                    <div className="sign-in-form">
                        <form>
                            
                            
                            <div className="form-group">
                                <div className="form-group-long">
                                    <label for="email" className="label-name-blue">Email</label>
                                    <input className="form-input" type="email" name="email" placeholder="example@email.com" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-group-long">
                                    <label for="password" className="label-name-blue">Password</label>
                                    <input className="form-input" type="password" name="password" placeholder="********" />
                                </div>
                            </div>
                            
                            <div className="form-group">
                                <button className="blue-button">SIGN IN</button>
                            </div>
                            
                        </form>
                        
                        <div className="help-text">
                            <small className="sign-in-small">Don't have an account? <a className="sign-up" href="signup">Sign Up</a> </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;