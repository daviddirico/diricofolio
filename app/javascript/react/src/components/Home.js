import React from 'react'
import ruby from "../../../../assets/images/ruby.png"
import javascript from "../../../../assets/images/javascript.png"
import html5 from "../../../../assets/images/html5.png"
import css3 from "../../../../assets/images/css3.png"
import sass from "../../../../assets/images/sass.png"
import jquery from "../../../../assets/images/jquery.png"
import rails from "../../../../assets/images/rails.png"
import reactjs from "../../../../assets/images/reactjs.png"
import foundation from "../../../../assets/images/foundation.png"
import bootstrap from "../../../../assets/images/bootstrap.png"
import redux from "../../../../assets/images/redux.png"
import materialui from "../../../../assets/images/materialui.png"
import nodejs from "../../../../assets/images/nodejs.png"
import capybara from "../../../../assets/images/capybara.png"
import rspec from "../../../../assets/images/rspec.png"
import enzyme from "../../../../assets/images/enzyme.png"
import jasmine from "../../../../assets/images/jasmine.png"
import karma from "../../../../assets/images/karma.png"
import postgres from "../../../../assets/images/postgres.png"
import sql from "../../../../assets/images/sql.png"

class Home extends React.Component {

  handleClick() {
    let card = document.querySelector('.card');
    card.classList.toggle('is-flipped');
  }

  render() {

    return(
      <div id="container">
        <div className="parallax alt1">
          <div className="banner">
            <span className="border">DAVID DIRICO</span>
          </div>
        </div>
        <div className="textarea">
          <div className="openingtext">I enjoy making visually appealing and user-friendly websites.</div>
          <div className="scene scene--card">
            <div className="card" onClick={ (event) => this.handleClick(event)}>
              <div className="card__face card__face--front">FRONT</div>
              <div className="card__face card__face--back">BACK</div>
            </div>
          </div>
        </div>
        <div className="parallax alt2 smallpar"></div>
        <div className="textarea">
          <div className="skilltitle">LANGUAGES</div>
          <ul className="languages">
            <div className="skillcontainer">
              <li className="skill">
                <div className="skilltext">Ruby</div>
                <div className="skillimg">
                  <img src={ruby} />
                </div>
              </li>
            </div>
            <div className="skillcontainer">
              <li className="skill">
                <div className="skilltext">Javascript</div>
                <div className="skillimg">
                  <img src={javascript} />
                </div>
              </li>
            </div>
            <div className="skillcontainer">
              <li className="skill">
                <div className="skilltext">HTML5</div>
                <div className="skillimg">
                  <img src={html5} />
                </div>
              </li>
            </div>
            <div className="skillcontainer">
              <li className="skill">
                <div className="skilltext">CSS3</div>
                <div className="skillimg">
                  <img src={css3} />
                </div>
              </li>
            </div>
            <div className="skillcontainer">
              <li className="skill">
                <div className="skilltext">SASS</div>
                <div className="skillimg">
                  <img src={sass} />
                </div>
              </li>
            </div>
            <div className="skillcontainer">
              <li className="skill">
                <div className="skilltext">jQuery</div>
                <div className="skillimg">
                  <img src={jquery} />
                </div>
              </li>
            </div>
          </ul>
        </div>
        <div className="textarea">
          <div className="skilltitle">FRAMEWORKS</div>
          <ul className="languages">
            <div className="skillcontainer">
              <li className="skill">
                <div className="skilltext">Ruby on Rails</div>
                <div className="skillimg">
                  <img src={rails} />
                </div>
              </li>
            </div>
            <div className="skillcontainer">
              <li className="skill">
                <div className="skilltext">React.js</div>
                <div className="skillimg">
                  <img src={reactjs} />
                </div>
              </li>
            </div>
            <div className="skillcontainer">
              <li className="skill">
                <div className="skilltext">Redux</div>
                <div className="skillimg">
                  <img src={redux} />
                </div>
              </li>
            </div>
            <div className="skillcontainer">
              <li className="skill">
                <div className="skilltext">Node.js</div>
                <div className="skillimg">
                  <img src={nodejs} />
                </div>
              </li>
            </div>
            <div className="skillcontainer">
              <li className="skill">
                <div className="skilltext">MaterialUI</div>
                <div className="skillimg">
                  <img src={materialui} />
                </div>
              </li>
            </div>
            <div className="skillcontainer">
              <li className="skill">
                <div className="skilltext">Foundation</div>
                <div className="skillimg">
                  <img src={foundation} />
                </div>
              </li>
            </div>
            <div className="skillcontainer">
              <li className="skill">
                <div className="skilltext">Bootstrap</div>
                <div className="skillimg">
                  <img src={bootstrap} />
                </div>
              </li>
            </div>
            <div className="skillcontainer">
              <li className="skill">
                <div className="skilltext">Capybara</div>
                <div className="skillimg">
                  <img src={capybara} />
                </div>
              </li>
            </div>
            <div className="skillcontainer">
              <li className="skill">
                <div className="skilltext">RSpec</div>
                <div className="skillimg">
                  <img src={rspec} />
                </div>
              </li>
            </div>
            <div className="skillcontainer">
              <li className="skill">
                <div className="skilltext">Enzyme</div>
                <div className="skillimg">
                  <img src={enzyme} />
                </div>
              </li>
            </div>
            <div className="skillcontainer">
              <li className="skill">
                <div className="skilltext">Jasmine</div>
                <div className="skillimg">
                  <img src={jasmine} />
                </div>
              </li>
            </div>
            <div className="skillcontainer">
              <li className="skill">
                <div className="skilltext">Karma</div>
                <div className="skillimg">
                  <img src={karma} />
                </div>
              </li>
            </div>
          </ul>
        </div>
        <div className="textarea">
          <div className="skilltitle">DATABASES</div>
          <ul className="languages">
            <div className="skillcontainer">
              <li className="skill">
                <div className="skilltext">Postgres</div>
                <div className="skillimg">
                  <img src={postgres} />
                </div>
              </li>
            </div>
            <div className="skillcontainer">
              <li className="skill">
                <div className="skilltext">SQL</div>
                <div className="skillimg">
                  <img src={sql} />
                </div>
              </li>
            </div>
          </ul>
        </div>
        <div className="parallax alt1"></div>
      </div>

    )
  }
}

export default Home
