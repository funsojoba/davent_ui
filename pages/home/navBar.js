import Image from 'next/image'


const NavBar = ()=>{
    return(
        <div className="navBar">
            <div className="navBar-logo">
                <Image src="/DaventLogo.svg" alt="davent-logo" width={150} height={30} />
            </div>
            
            <div className="navBar-menu">
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>

            <div className="hambugger">
                <Image src="/hambugger.svg" alt="hambugger" width={25} height={25} />
            </div>
        </div>
    )
}

export default NavBar;