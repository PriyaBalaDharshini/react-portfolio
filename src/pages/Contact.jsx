import React from 'react'

function Contact() {
    const linkedin = 'https://www.linkedin.com/in/priyadharshini-thirunavukkarasu-b1b615b4/';
    const gitHub = 'https://github.com/PriyaBalaDharshini';

    const style = { width: "25rem" }
    return (
        <section id="contact">
            <h1 className="contactMe">CONTACT DETAILS</h1>
            <div className="contactBox">
                <div className="contactInside">
                    <div className="phone animated-card-1">
                        <div className="card border-info mb-3" style={style}>
                            <div className="card-header"><i className="fa-solid fa-2x fa-mobile-screen"></i></div>
                            <div className="card-body">
                                <h5 className="card-title">Phone</h5>
                                <p className="card-text">+91-9597585393</p>
                            </div>
                        </div>
                    </div>
                    <div className="email animated-card-2">
                        <div className="card border-info mb-3" style={style}>
                            <div className="card-header"><i className="fa-regular fa-2x fa-envelope"></i></div>
                            <div className="card-body">
                                <h5 className="card-title">Email</h5>
                                <p className="card-text">priyaarasu12@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="linkedin animated-card-1">
                        <div className="card border-info mb-3" style={style}>
                            <div className="card-header"><i className="fa-brands fa-2x fa-linkedin"></i></div>
                            <div className="card-body">
                                <h5 className="card-title">LinkedIn</h5>
                                <button className="btn btn-outline-info text-black">
                                    <a href={linkedin} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                                        Get Connected
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="github animated-card-2">
                        <div className="card border-info mb-3" style={style}>
                            <div className="card-header"><i className="fa-brands fa-2x fa-github"></i></div>
                            <div className="card-body">
                                <h5 className="card-title">Github</h5>
                                <button className="btn btn-outline-info text-black">
                                    <a href={gitHub} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                                        Get Connected
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact