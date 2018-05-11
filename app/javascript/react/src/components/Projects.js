import React from 'react'
import screenshot3 from "../../../../assets/images/screenshot3.png"

const Projects = props => {

  return(
    <div className="projects" id="container">
      <ul className="projectBreakdown">
        <div className="projectImageContainer">
          <li className="projectImage listMargin">
            <img src={screenshot3} />
          </li>
        </div>
        <div className="projectDescriptionContainer">
          <li className="projectDescription listMargin">
            <div className="projectTitle">The Demogorgon Trail</div>
            <div className="projectText">
              A choice based game application. A user chooses a character and attempts to fight through dungeons
              along a perilous trail that involves random encounters with enemies.  Items can also be found on occasion.
            </div>
          </li>
        </div>
      </ul>
      <div>
        second project goes here
      </div>
    </div>

  )
}

export default Projects
