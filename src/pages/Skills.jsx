
import React from 'react';
import { useState } from 'react';


function Skills() {
    const [hoverSkill, setHoverSkill] = useState(null);
    function handleMouseEnter(skill) {
        setHoverSkill(skill)
    }
    function handleMouseLeave() {
        setHoverSkill(null)
    }
    const getSkillDescription = () => {
        switch (hoverSkill) {
            case "HTML":
                return ["Developed and maintained responsive web pages using HTML.", 'Knowledge: 80%'];
            case "CSS":
                return ["Used for styling and designing web pages.", 'Knowledge: 70%'];
            case "Bootstrap":
                return ["CSS framework used for building responsive and visually appealing web pages.", 'Knowledge: 80%'];
            case "Javascript":
                return ["Used for adding interactivity and dynamic behavior to web pages.", 'Knowledge: 65%'];
            case "React":
                return ["Used the JavaScript library for building user interfaces, particularly single-page applications.", 'Knowledge: 65%'];
            case "MongoDB":
                return ["Utilized MongoDB as a NoSQL database for storing and managing data in web applications.", 'Knowledge: 65%'];
            case "Node":
                return ["Developed server-side applications using Node.js, enabling JavaScript to run on the server.", 'Knowledge: 60%'];
            case "Express":
                return ["Used Express.js as a web application framework for Node.js to simplify server-side development.", 'Knowledge: 60%'];
            case "Git":
                return ["Version control system used to track changes in code, collaborate with others, and manage project history.", 'Knowledge: 70%'];
            case "Github":
                return ["Collaborated on coding projects by utilizing GitHub for version control, issue tracking, and code review.", 'Knowledge: 75%'];
            case "Netlify":
                return ["Deployed and hosted web applications on Netlify, taking advantage of its continuous integration and deployment features.", 'Knowledge: 75%'];
            default:
                return ["", ""];
        }
    };

    const [des1, des2] = getSkillDescription()

    return (
        <section id='skills'>
            <div className="container">
                < h1 className='skillsTitle' > MY SKILLS</h1 >
                <small>(Please Hover on Icon)</small>
                <div className="skillItmes" style={{ padding: "50px" }}>
                    <div className="row">
                        <div className="col-4">
                            <h3>1. Front End</h3>
                            <div className="frontEnd">
                                <div className="html"
                                    style={{ opacity: hoverSkill === "HTML" ? 0.9 : 1, cursor: "grab" }}
                                    onMouseEnter={() => handleMouseEnter("HTML")}
                                    onMouseLeave={handleMouseLeave}>
                                    <p>HTML</p>
                                    <img src="./images/html.png" alt='' />
                                    {hoverSkill === "HTML" && (
                                        <div className="description">
                                            <p>{des1}</p>
                                            <p><b> {des2}</b></p>
                                        </div>
                                    )}
                                </div>

                                <div className="css"
                                    style={{ opacity: hoverSkill === "CSS" ? 0.9 : 1, cursor: "grab" }}
                                    onMouseEnter={() => handleMouseEnter("CSS")}
                                    onMouseLeave={handleMouseLeave}>
                                    <p>CSS</p>
                                    <img src="./images/css.png" alt='' />
                                    {hoverSkill === "CSS" && (
                                        <div className="description">
                                            <p>{des1}</p>
                                            <p><b> {des2}</b></p>
                                        </div>
                                    )}
                                </div>

                                <div className="bootstrap"
                                    style={{ opacity: hoverSkill === "Bootstrap" ? 0.9 : 1, cursor: "grab" }}
                                    onMouseEnter={() => handleMouseEnter("Bootstrap")}
                                    onMouseLeave={handleMouseLeave}>
                                    <p>Bootstrap</p>
                                    <img src="./images/bootstrap.png" alt='' />
                                    {hoverSkill === "Bootstrap" && (
                                        <div className="description">
                                            <p>{des1}</p>
                                            <p><b> {des2}</b></p>
                                        </div>
                                    )}
                                </div>

                                <div className="js"
                                    style={{ opacity: hoverSkill === "Javascript" ? 0.9 : 1, cursor: "grab" }}
                                    onMouseEnter={() => handleMouseEnter("Javascript")}
                                    onMouseLeave={handleMouseLeave}>
                                    <p>Javascript</p>
                                    <img src="./images/javascript.png" alt='' />
                                    {hoverSkill === "Javascript" && (
                                        <div className="description">
                                            <p>{des1}</p>
                                            <p><b> {des2}</b></p>
                                        </div>
                                    )}
                                </div>
                                <div className="react"
                                    style={{ opacity: hoverSkill === "React" ? 0.9 : 1, cursor: "grab" }}
                                    onMouseEnter={() => handleMouseEnter("React")}
                                    onMouseLeave={handleMouseLeave}>
                                    <p>React</p>
                                    <img src="./images/react.png" alt='' />
                                    {hoverSkill === "React" && (
                                        <div className="description">
                                            <p>{des1}</p>
                                            <p><b> {des2}</b></p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="backEnd-dataBase">
                                <h3>2. Back End</h3>
                                <div className="node" style={{ opacity: hoverSkill === "Node" ? 0.9 : 1, cursor: "grab" }}
                                    onMouseEnter={() => handleMouseEnter("Node")}
                                    onMouseLeave={handleMouseLeave}>
                                    <p>Node</p>
                                    <img src="./images/nodejs.png" alt='' />
                                    {hoverSkill === "Node" && (
                                        <div className="description">
                                            <p>{des1}</p>
                                            <p><b> {des2}</b></p>
                                        </div>
                                    )}
                                </div>
                                <div className="express" style={{ opacity: hoverSkill === "Express" ? 0.9 : 1, cursor: "grab" }}
                                    onMouseEnter={() => handleMouseEnter("Express")}
                                    onMouseLeave={handleMouseLeave}>
                                    <p>Express</p>
                                    <img src="./images/express.png" alt='' />
                                    {hoverSkill === "Express" && (
                                        <div className="description">
                                            <p>{des1}</p>
                                            <p><b> {des2}</b></p>
                                        </div>
                                    )}
                                </div>
                                <h3>3. Database</h3>
                                <div className="mongodb" style={{ opacity: hoverSkill === "MongoDB" ? 0.9 : 1, cursor: "grab" }}
                                    onMouseEnter={() => handleMouseEnter("MongoDB")}
                                    onMouseLeave={handleMouseLeave}>
                                    <p>MongoDB</p>
                                    <img src="./images/mongo-db.png" alt='' />
                                    {hoverSkill === "MongoDB" && (
                                        <div className="description">
                                            <p>{des1}</p>
                                            <p><b> {des2}</b></p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="versionControl-deployment">
                                <h3>4. Version Control</h3>
                                <div className="git" style={{ opacity: hoverSkill === "Git" ? 0.9 : 1, cursor: "grab" }}
                                    onMouseEnter={() => handleMouseEnter("Git")}
                                    onMouseLeave={handleMouseLeave}>
                                    <p>Git</p>
                                    <img src="./images/git.png" alt='' />
                                    {hoverSkill === "Git" && (
                                        <div className="description">
                                            <p>{des1}</p>
                                            <p><b> {des2}</b></p>
                                        </div>
                                    )}
                                </div>
                                <div className="github" style={{ opacity: hoverSkill === "Github" ? 0.9 : 1, cursor: "grab" }}
                                    onMouseEnter={() => handleMouseEnter("Github")}
                                    onMouseLeave={handleMouseLeave}>
                                    <p>Github</p>
                                    <img src="./images/github.png" alt='' />
                                    {hoverSkill === "Github" && (
                                        <div className="description">
                                            <p>{des1}</p>
                                            <p><b> {des2}</b></p>
                                        </div>
                                    )}
                                </div>
                                <h3>5. Deployment</h3>
                                <div className="netlify" style={{ opacity: hoverSkill === "Netlify" ? 0.9 : 1, cursor: "grab" }}
                                    onMouseEnter={() => handleMouseEnter("Netlify")}
                                    onMouseLeave={handleMouseLeave}>
                                    <p>Netlify</p>
                                    <img src="./images/netlify.png" alt='' />
                                    {hoverSkill === "Netlify" && (
                                        <div className="description">
                                            <p>{des1}</p>
                                            <p><b> {des2}</b></p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Skills

