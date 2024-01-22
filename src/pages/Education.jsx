import React from 'react'

function Education() {
    const cardStyle = { width: '20rem', height: 'auto' };
    const imageStyle = { height: '300px', width: '300px' };

    return (
        <section id="education">
            <div className="education">
                <h1 className='educationTitle'>ACADEAMIC BACKGROUND</h1>
                <div className="educationBox">
                    <div className="boxInside">
                        <div class="card info" style={cardStyle}>
                            <img src="./images/10th.png" class="card-img-top" alt="..." style={imageStyle} />
                            <div class="card-body text-center">
                                <h5 class="card-title">Standard 10</h5>
                                <p class="card-text">School: St. John Bosco Girls Hr. Sec. School</p>
                                <p class="card-text">Year of Completion: 2011</p>
                                <p class="card-text">Percentage: 95%</p>
                                <p class="card-text">Achievements: School first in English, 100/100 in Maths</p>
                            </div>
                        </div>

                        <div class="card info" style={cardStyle}>
                            <div class="card-body">
                                <div class="card-body text-center">
                                    <h5 class="card-title">Standard 12</h5>
                                    <p class="card-text">School: St. John Bosco Girls Hr. Sec. School</p>
                                    <p class="card-text">Year of Completion: 2013</p>
                                    <p class="card-text">Percentage: 90%</p>
                                    <p class="card-text">Achievements: I represented Tamil Nadu in the PYYKA National Volleyball Tournament</p>
                                </div>
                            </div>
                            <img src="./images/12th.png" class="card-img-top" alt="..." style={imageStyle} />
                        </div>

                        <div class="card info" style={cardStyle}>
                            <img src="./images/clg.png" class="card-img-top" alt="..." style={imageStyle} />
                            <div class="card-body text-center">
                                <h5 class="card-title">B. Tech Chemical Engineering</h5>
                                <p class="card-text">College: Adhiyamaan College of Engineering</p>
                                <p class="card-text">Year of Completion: 2017</p>
                                <p class="card-text">CGPA: 8.0</p>
                                <p class="card-text">Developed sustainable wastewater treatment using pomegranate waste adsorbents, contributing to eco-friendly solutions.</p>
                            </div>
                        </div>

                        <div class="card info" style={cardStyle}>
                            <div class="card-body text-center">
                                <h5 class="card-title">Sports Achievements</h5>
                                <p class="card-text">4th National Level Rural Tournament 2012–2013 at Kolkata, West Bengal: Secured 4th place in volleyball.</p>
                                <p class="card-text">Zonal Tournament 2013–2014, 2014–2015, 2015–2016, 2016–2017: emerged as Winners in volleyball.</p>
                                <p class="card-text">Chief Minister Trophy regional and district level 2014–2015: Winners in volleyball.</p>
                            </div>
                            <img src="./images/volleyball.png" class="card-img-top" alt="..." style={imageStyle} />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education