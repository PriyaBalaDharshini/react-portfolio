import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <section id='homeSection' className='homeSection'>
            <div className="homeBox">
                <div className="homeContent">
                    <p className='homePara'>
                        Hello, This is Priyadharshini T.
                    </p>
                    <h4> A Budding</h4>

                    <h1 className="homeTitle">
                        MERN <br />
                        Full Stack <br />
                        Developer
                    </h1>

                    <p className="homeDes">
                        Enthusiastic about Growth and Innovation in the World of Development. <br />
                        Eagerly Waiting to Kickstart My Career. <br />
                        Ready to contribute my skills and passion to meaningful projects.
                    </p>
                </div>
                <div>
                    <button className='btn btn-outline-dark homeButton'><Link className='navLink' to={"/contact"}>Get In Touch</Link></button>
                </div>
            </div>

            <div>
                <img src="./images/Home.jpg" alt="" style={{ height: "427px", width: "640px" }} />

            </div>
        </section>
    )
}

export default Home