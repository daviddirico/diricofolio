import React from 'react'
import screenshot1 from "../../../../assets/images/screenshot1.png"
import screenshot2 from "../../../../assets/images/screenshot2.png"
import screenshot3 from "../../../../assets/images/screenshot3.png"
import screenshot4 from "../../../../assets/images/screenshot4.png"
import screenshot5 from "../../../../assets/images/screenshot5.png"

const Projects = props => {

  return(
    <div className="projects" id="container">
      <ul className="projectBreakdown topProject">
        <div className="projectImageContainer">
          <li className="projectImage listMargin">
            <img src={screenshot1} />
          </li>
        </div>
        <div className="projectDescriptionContainer">
          <li className="projectDescription listMargin">
            <div className="projectTitle">The Demogorgon Trail</div>
            <div className="projectText">
              A choice-based game application. A user chooses a character and attempts to fight through dungeons
              along a perilous trail that involves random encounters with enemies.
              Occasionlly, a user can also find random items which can be used to power up for battle.
            </div>
          </li>
        </div>
      </ul>
      <ul className="projectBreakdown">
        <div className="projectDescriptionContainer">
          <li className="projectDescription listMargin">
            <div className="projectTitle">Disc Mapper</div>
            <div className="projectText">
              A web application where disc golfers can find disc-golf courses in Massachusetts and add new ones as well.
              Users can also schedule meetups at a course with other users.
              Enabled by the websockets protocol users can also join a chatroom to speak with other users.
            </div>
          </li>
        </div>
        <div className="projectImageContainer">
          <li className="projectImage listMargin">
            <img src={screenshot4} />
          </li>
        </div>
      </ul>
    </div>

  )
}

export default Projects
