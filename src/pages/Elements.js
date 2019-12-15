import React from 'react';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="box container">
        <header>
          <h2>Miwa Hirano</h2>
        </header>
        <section>
          <header>
            <p>Front End Developer</p>
          </header>
        </section>
        <section>
          <header>
          <hr />
          424.362.6359 | <a href = "mailto: devkoneko@gmail.com">devkoneko@gmail.com</a> | Los Angeles, CA
          <br />
          <hr />
          </header>
   
        </section>
        <section>
          <header>
            <h3>TECHNICAL SKILLS</h3>
          </header>
          <ul className="default">
            
            <li>
            <b>Proficient:</b> JavaScript, ReactJS, Redux, Node.js, SQL, PostgreSQL, SQLite, Firebase, jQuery, HTML5, CSS3, Sass, RegEx, Git
            </li>
            <li>
            <b>Proficient:</b> Ruby on Rails, Sinatra, Mocha, RSpec, Capybara.
            </li>
         
          </ul>
        </section>
        <section>
          <header>
            <h3>WORK EXPERIENCE</h3>
          </header>
          <ul className="default">
          <b>CombuterHelper | Front End Developer | Los Angeles, CA &nbsp;&nbsp;&nbsp; Nov 2017 - Present </b><br />
            <li>
              Constructed online platform utilizing JavaScript, HTML5, and CSS3 to support sales team in selling real-time ticker displays of sports betting odds, generating 3 major new contracts with sports bar after product launch.
            </li>
            <li>
              Leveraged Xibo CMS to create layout for viewing fantasy sports scores and game data in ticker format for sports bars with facial recognition data showing 80% satisfaction.
            </li>
            <li>
              Created 10 second animations for transitions between PSA commercials for displays in sports bars using Adobe After Effects, Illustrator and Photoshop.
            </li>
            <li>
              Integrated streaming advertisements into sports bar displays through leveraging Vast Technology system.
            </li>
          </ul>

          <ul className="default">
          <b>Beautiful Harmony Design | Motion Designer | Los Angeles, CA &nbsp;&nbsp;&nbsp; Jan 2006 - Nov 2017 </b><br />
            <li>
              Designed and animated graphics for shows including Super Bowl Half-Time, Emmy’s, MTV Movie Awards, Microsoft, Ellen DeGeneres, Rock Honors, CBS Celine Dion, Dancing With The Stars, and Carnival Cruise.
            </li>
            <li>
              Crafted concert graphics and animations for Foo Fighters, Cheetah Girls, Pussycat Dolls concert tours using Autodesk Maya, Adobe After Effects, Illustrator and Photoshop.

            </li>
            <li>
            Led and managed up to 6 animators across 5 different projects for major TV show events and concerts.
            </li>

          </ul>
        </section>
        <section>
          <header>
            <h3>EDUCATION</h3>
          </header>
          <b>BFA Visual Communication </b> &nbsp;&nbsp;&nbsp; American InterContinental University<br />
          <b>Graphic Design </b> &nbsp;&nbsp;&nbsp; California Institute of The Arts<br />
          <br />
        </section>
        <section>
          <header>
            <h3>PROJECT WORK</h3>
          </header>
          <ul className="default">
          <b>FosterApp | Web Developer | Github (front-end) | Github (back-end) <span style={{ color: 'red' }}></span>Oct 2019 </b><br />
            <li>
              Constructed online platform utilizing JavaScript, HTML5, and CSS3 to support sales team in selling real-time ticker displays of sports betting odds, generating 3 major new contracts with sports bar after product launch.
            </li>
            <li>
              Leveraged Xibo CMS to create layout for viewing fantasy sports scores and game data in ticker format for sports bars with facial recognition data showing 80% satisfaction.
            </li>
            <li>
              Created 10 second animations for transitions between PSA commercials for displays in sports bars using Adobe After Effects, Illustrator and Photoshop.
            </li>
            <li>
              Integrated streaming advertisements into sports bar displays through leveraging Vast Technology system.
            </li>
          </ul>

          <ul className="default">
          <b>Beautiful Harmony Design | Motion Designer | Los Angeles, CA &nbsp;&nbsp;&nbsp; Oct 2019 </b><br />
            <li>
              Designed and animated graphics for shows including Super Bowl Half-Time, Emmy’s, MTV Movie Awards, Microsoft, Ellen DeGeneres, Rock Honors, CBS Celine Dion, Dancing With The Stars, and Carnival Cruise.
            </li>
            <li>
              Crafted concert graphics and animations for Foo Fighters, Cheetah Girls, Pussycat Dolls concert tours using Autodesk Maya, Adobe After Effects, Illustrator and Photoshop.

            </li>
            <li>
            Led and managed up to 6 animators across 5 different projects for major TV show events and concerts.
            </li>

          </ul>
        </section>
        <section>
          <header>
            <h3>Form</h3>
          </header>
          <form method="post" action="#">
            <div className="row">
              <div className="col-6 col-12-mobilep">
                <label htmlFor="name">Name</label>
                <input
                  className="text"
                  type="text"
                  name="name"
                  id="name"
                  defaultValue=""
                  placeholder="John Doe"
                />
              </div>
              <div className="col-6 col-12-mobilep">
                <label htmlFor="email">Email</label>
                <input
                  className="text"
                  type="text"
                  name="email"
                  id="email"
                  defaultValue=""
                  placeholder="johndoe@domain.com"
                />
              </div>
              <div className="col-12">
                <label htmlFor="subject">Subject</label>
                <input
                  className="text"
                  type="text"
                  name="subject"
                  id="subject"
                  defaultValue=""
                  placeholder="Enter your subject"
                />
              </div>
              <div className="col-12">
                <label htmlFor="subject">Message</label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Enter your message"
                  rows="6"
                ></textarea>
              </div>
              <div className="col-12">
                <ul className="actions special">
                  <li>
                    <input type="submit" value="Send" />
                  </li>
                  <li>
                    <input type="reset" value="Reset" className="alt" />
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
