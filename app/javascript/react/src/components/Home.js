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
        <div className="parentParallax">
          <div className="parallax alt1"></div>
        </div>
        <div className="banner">
          <span className="border">DAVID DIRICO</span>
        </div>
        <div className="textArea">
          <div className="openingText">I enjoy making visually appealing and user-friendly websites.</div>
          <div className="scene scene--card">
            <div className="card" onClick={ (event) => this.handleClick(event)}>
              <div className="card__face card__face--front">FRONT</div>
              <div className="card__face card__face--back">BACK</div>
            </div>
          </div>
        </div>
        <div className="parentParallax">
          <div className="parallax alt2 smallPar"></div>
        </div>
        <div className="textArea">
          <div className="skillTitle">LANGUAGES</div>
          <ul className="languages">
            <div className="skillContainer">
              <li className="skill">
                <div className="skillText">Ruby</div>
                <div className="skillImg">
                  <img src={ruby} />
                </div>
              </li>
            </div>
            <div className="skillContainer">
              <li className="skill">
                <div className="skillText">Javascript</div>
                <div className="skillImg">
                  <img src={javascript} />
                </div>
              </li>
            </div>
            <div className="skillContainer">
              <li className="skill">
                <div className="skillText">HTML5</div>
                <div className="skillImg">
                  <img src={html5} />
                </div>
              </li>
            </div>
            <div className="skillContainer">
              <li className="skill">
                <div className="skillText">CSS3</div>
                <div className="skillImg">
                  <img src={css3} />
                </div>
              </li>
            </div>
            <div className="skillContainer">
              <li className="skill">
                <div className="skillText">SASS</div>
                <div className="skillImg">
                  <img src={sass} />
                </div>
              </li>
            </div>
            <div className="skillContainer">
              <li className="skill">
                <div className="skillText">jQuery</div>
                <div className="skillImg">
                  <img src={jquery} />
                </div>
              </li>
            </div>
          </ul>
        </div>
        <div className="textArea">
          <div className="skillTitle">FRAMEWORKS</div>
          <ul className="languages">
            <div className="skillContainer">
              <li className="skill">
                <div className="skillText">Ruby on Rails</div>
                <div className="skillImg">
                  <img src={rails} />
                </div>
              </li>
            </div>
            <div className="skillContainer">
              <li className="skill">
                <div className="skillText">React.js</div>
                <div className="skillImg">
                  <img src={reactjs} />
                </div>
              </li>
            </div>
            <div className="skillContainer">
              <li className="skill">
                <div className="skillText">Redux</div>
                <div className="skillImg">
                  <img src={redux} />
                </div>
              </li>
            </div>
            <div className="skillContainer">
              <li className="skill">
                <div className="skillText">Node.js</div>
                <div className="skillImg">
                  <img src={nodejs} />
                </div>
              </li>
            </div>
            <div className="skillContainer">
              <li className="skill">
                <div className="skillText">MaterialUI</div>
                <div className="skillImg">
                  <img src={materialui} />
                </div>
              </li>
            </div>
            <div className="skillContainer">
              <li className="skill">
                <div className="skillText">Foundation</div>
                <div className="skillImg">
                  <img src={foundation} />
                </div>
              </li>
            </div>
            <div className="skillContainer">
              <li className="skill">
                <div className="skillText">Bootstrap</div>
                <div className="skillImg">
                  <img src={bootstrap} />
                </div>
              </li>
            </div>
            <div className="skillContainer">
              <li className="skill">
                <div className="skillText">Capybara</div>
                <div className="skillImg">
                  <img src={capybara} />
                </div>
              </li>
            </div>
            <div className="skillContainer">
              <li className="skill">
                <div className="skillText">RSpec</div>
                <div className="skillImg">
                  <img src={rspec} />
                </div>
              </li>
            </div>
            <div className="skillContainer">
              <li className="skill">
                <div className="skillText">Enzyme</div>
                <div className="skillImg">
                  <img src={enzyme} />
                </div>
              </li>
            </div>
            <div className="skillContainer">
              <li className="skill">
                <div className="skillText">Jasmine</div>
                <div className="skillImg">
                  <img src={jasmine} />
                </div>
              </li>
            </div>
            <div className="skillContainer">
              <li className="skill">
                <div className="skillText">Karma</div>
                <div className="skillImg">
                  <img src={karma} />
                </div>
              </li>
            </div>
          </ul>
        </div>
        <div className="textArea">
          <div className="skillTitle">DATABASES</div>
          <ul className="languages">
            <div className="skillContainer">
              <li className="skill">
                <div className="skillText">Postgres</div>
                <div className="skillImg">
                  <img src={postgres} />
                </div>
              </li>
            </div>
            <div className="skillContainer">
              <li className="skill">
                <div className="skillText">SQL</div>
                <div className="skillImg">
                  <img src={sql} />
                </div>
              </li>
            </div>
          </ul>
        </div>
        <div className="parentParallax">
          <div className="parallax alt1"></div>
        </div>
      </div>

    )
  }
}

export default Home
