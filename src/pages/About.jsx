import React from 'react'

function About() {
    return (
        <section id='aboutMe'>
            <div className="amoutMe">
                <h1 className='aboutMeTitle'>ABOUT ME</h1>
                <div className="aboutMeBox">

                    <div className="aboutMeImage">
                        <img src="./images/AboutMe.jpg" alt="" style={{ height: "427px", width: "640px" }} />
                    </div>
                    <div className="aboutMeContent">
                        <h1>Full Stack Developer </h1>
                        <p>As a dedicated professional with over 4+ years of experience in Copyediting, I've honed my precision and attention to detail. </p>
                        <p>Yet, my passion for technology and the dynamic digital world has led me to a new path in Full Stack Development.</p>
                        <p>I'm currently deep into studies, arming myself with the skills to excel in this field.</p>
                        <p>My commitment to ongoing learning and unwavering determination will drive me toward success in Full Stack Development, where I aim to make a significant impact in the ever-evolving digital landscape.</p>
                        <div>
                            <a href='https://drive.google.com/file/d/1uPn89nF3cLqnEwqPFrZ27z0mkNySLv4j/view' target="_blank" className='btn btn-outline-dark' download>Download CV</a>
                        </div>
                    </div>

                </div>
            </div>

        </section>

    )
}

export default About
