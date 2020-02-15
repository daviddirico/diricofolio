import React from 'react'
import ruby from "../../../../assets/images/ruby.png";
import javascript from "../../../../assets/images/javascript.png";
import html5 from "../../../../assets/images/html5.png";
import css3 from "../../../../assets/images/css3.png";
import sass from "../../../../assets/images/sass.png";
import jquery from "../../../../assets/images/jquery.png";
import rails from "../../../../assets/images/rails.png";
import reactjs from "../../../../assets/images/reactjs.png";
import foundation from "../../../../assets/images/foundation.png";
import bootstrap from "../../../../assets/images/bootstrap.png";
import redux from "../../../../assets/images/redux.png";
import materialui from "../../../../assets/images/materialui.png";
import nodejs from "../../../../assets/images/nodejs.png";
import capybara from "../../../../assets/images/capybara.png";
import rspec from "../../../../assets/images/rspec.png";
import enzyme from "../../../../assets/images/enzyme.png";
import jasmine from "../../../../assets/images/jasmine.png";
import karma from "../../../../assets/images/karma.png";
import postgres from "../../../../assets/images/postgres.png";
import sql from "../../../../assets/images/sql.png";
import python from "../../../../assets/images/python.png";
import java from "../../../../assets/images/java.png";
import veracode from "../../../../assets/images/veracode.png";
import redis from "../../../../assets/images/redis.png";
import airflow from "../../../../assets/images/airflow.png";
import s3 from "../../../../assets/images/s3.png";
import ec2 from "../../../../assets/images/ec2.png";
import kinesis from "../../../../assets/images/kinesis.png";
import lambda from "../../../../assets/images/lambda.png";
import sns from "../../../../assets/images/sns.png";
import jenkins from "../../../../assets/images/jenkins.png";
import cloakware from "../../../../assets/images/cloakware.png";
import plsql from "../../../../assets/images/plsql.png";



class Home extends React.Component {

  handleClick() {
    let card = document.querySelector('.card');
    card.classList.toggle('is-flipped');
  }

  render() {

    return(
      <div id="container">
        <div className="parentParallax">
          <div className="parallax alt10"></div>
        </div>
        <div className="banner">
          <span className="border">DAVID DIRICO</span>
        </div>
        <div className="textArea">
          <div className="openingText">I enjoy making visually appealing and user-friendly websites.</div>
          <div className="scene scene--card">
            <div className="card" onClick={ (event) => this.handleClick(event)}>
              <div className="card__face card__face--front">
                <div className="card-text">I AM NOW...</div>
                <div className="smaller-text card-text">(click here)</div>

              </div>
              <div className="card__face card__face--back">
                <div className="card-text">SEEKING WORK!</div>
              </div>
            </div>
          </div>
        </div>
        <div className="parentParallax">
          <div className="parallax alt5 smallPar"></div>
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
                <div className="skillText">Python</div>
                <div className="skillImg">
                  <img src={python} />
                </div>
              </li>
            </div>
            <div className="skillContainer">
              <li className="skill">
                <div className="skillText">Java</div>
                <div className="skillImg">
                  <img src={java} />
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
                <div className="skillText">jQuery</div>
                <div className="skillImg">
                  <img src={jquery} />
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
            <div className="skillContainer">
              <li className="skill">
                <div className="skillText">Redis</div>
                <div className="skillImg">
                  <img src={redis} />
                </div>
              </li>
            </div>
            <div className="skillContainer">
              <li className="skill">
                <div className="skillText">Jenkins</div>
                <div className="skillImg">
                  <img src={jenkins} />
                </div>
              </li>
            </div>
            <div className="skillContainer">
              <li className="skill">
                <div className="skillText">Apache Airflow</div>
                <div className="skillImg">
                  <img src={airflow} />
                </div>
              </li>
            </div>
            <div className="skillContainer">
              <li className="skill">
                <div className="skillText">Veracode</div>
                <div className="skillImg">
                  <img src={veracode} />
                </div>
              </li>
            </div>
            <div className="skillContainer">
              <li className="skill">
                <div className="skillText">Cloakware</div>
                <div className="skillImg">
                  <img src={cloakware} />
                </div>
              </li>
            </div>
            <div className="skillContainer">
              <li className="skill">
                <div className="skillText">AWS S3</div>
                <div className="skillImg">
                  <img src={s3} />
                </div>
              </li>
            </div>
            <div className="skillContainer">
              <li className="skill">
                <div className="skillText">AWS EC2</div>
                <div className="skillImg">
                  <img src={ec2} />
                </div>
              </li>
            </div>
            <div className="skillContainer">
              <li className="skill">
                <div className="skillText">AWS Kinesis</div>
                <div className="skillImg">
                  <img src={kinesis} />
                </div>
              </li>
            </div>
            <div className="skillContainer">
              <li className="skill">
                <div className="skillText">AWS Lambda</div>
                <div className="skillImg">
                  <img src={lambda} />
                </div>
              </li>
            </div>
            <div className="skillContainer">
              <li className="skill">
                <div className="skillText">AWS SNS</div>
                <div className="skillImg">
                  <img src={sns} />
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
                <div className="skillText">PLSQL Oracle</div>
                <div className="skillImg">
                  <img src={plsql} />
                </div>
              </li>
            </div>
          </ul>
        </div>
      </div>

    )
  }
}

export default Home


// <div className="parentParallax">
// <div className="parallax alt9 smallPar"></div>
// </div>
