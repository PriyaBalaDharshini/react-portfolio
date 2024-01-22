import React from 'react'
import { Link } from 'react-router-dom';

function NavBar() {
    const linkedin = 'https://www.linkedin.com/in/priyadharshini-thirunavukkarasu-b1b615b4/';
    const gitHub = 'https://github.com/PriyaBalaDharshini';

    return (
        <section>
            <div>
                <nav className='navBar' id='navBar'>
                    <div className="navBox">
                        <div className="navContent">
                            <div className="navList">
                                <ul>
                                    <li><Link className='navLink' to={"/"}>Home</Link></li>
                                    <li><Link className='navLink' to={"/about"}>About</Link></li>
                                    <li><Link className='navLink' to={"/skills"}>Skills</Link></li>
                                    <li><Link className='navLink' to={"/education"}>Education</Link></li>
                                    <li><Link className='navLink' to={"/contact"}>Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="navIcons">
                            <a href={gitHub} target="_blank" rel="noopener noreferrer">
                                <button className='btn btn-outline-dark'><i className="fa-brands fa-github"></i></button>
                            </a>
                            <a href={linkedin} target="_blank" rel="noopener noreferrer">
                                <button className='btn btn-outline-dark'><i className="fa-brands fa-linkedin"></i></button>
                            </a>
                        </div>
                    </div>

                </nav>
            </div>
        </section>
    )
}

export default NavBar