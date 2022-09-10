import NavBar from "../home/navBar"
import Image from 'next/image'


const HomePage = () => {

    return (
        <div className="home-container">
            <NavBar />
            <div className="sign-up-container">
                <div className="sign-up-one">
                    <div className="navBar-logo">
                        <Image src="/DaventLogo.svg" alt="davent-logo" width={450} height={90} />
                    </div>
                </div>
                <div className="sign-up-two">
                    <div className="sign-up-form">
                        <form>
                            <div className="form-group">
                                <div className="form-group-item">
                                    <label for="firstName" className="label-name-white">First Name</label>
                                    <input className="form-input" type="text" name="first_name" placeholder="John" />
                                </div>
                                <div className="form-group-item">
                                    <label for="lastName" className="label-name-white">Last Name</label>
                                    <input className="form-input" type="text" id="lastName" name="last_name" placeholder="Doe" />
                                </div>
                            </div>
                            
                            <div className="form-group">
                                <div className="form-group-item">
                                    <label for="phoneNumber" className="label-name-white">Phone Number</label>
                                    <input className="form-input" type="tel" name="phone_number" placeholder="+2346907956" />
                                </div>
                                <div className="form-group-item">
                                    <label for="email" className="label-name-white">Email</label>
                                    <input className="form-input" type="email" id="email" name="email" placeholder="example@email.com" />
                                </div>
                            </div>
                            
                            <div className="form-group">
                                <div className="form-group-item">
                                    <label for="password1" className="label-name-white">Password</label>
                                    <input className="form-input" id="password1" type="password" name="password" placeholder="*********" />
                                </div>
                                <div className="form-group-item">
                                    <label for="password2" className="label-name-white">Repeat Password</label>
                                    <input className="form-input" id="password2" type="password" name="password" placeholder="*********" />
                                </div>
                            </div>
                            
                            <div className="form-group">
                                <div className="form-group-item">
                                    <label for="cityOfResidence" className="label-name-white">City of Residence</label>
                                    <input className="form-input" id="cityOfResidence" type="text" name="city" placeholder="Lekki" />
                                </div>
                                <div className="form-group-item">
                                    <label for="stateOfResidence" className="label-name-white">Last Name</label>
                                    <input className="form-input" id="stateOfResidence" type="text" name="state" placeholder="Lagos" />
                                </div>
                            </div>
                            
                            <div className="form-group">
                                <div className="form-group-long">
                                    <label for="country" className="label-name-white">Country</label>
                                    <input className="form-input" type="text" name="country" placeholder="Nigeria" />
                                </div>
                            </div>
                            
                            <div className="form-group">
                                <button className="yellow-button">SIGN UP</button>
                            </div>
                            
                        </form>
                        
                        <div className="help-text">
                            <small className="sign-up-small">Already have an account? <a className="sign-in" href="login">Sign In</a> </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;