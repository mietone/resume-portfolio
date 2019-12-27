import React from 'react';

import Layout from '../components/Layout';

import { Link } from 'gatsby';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="box container">
        <section>
          <ul className="actions special">
            <li>
              <Link to="/" className="">
                Back to Home
              </Link>
            </li>
          </ul>
          <br></br>
        </section>
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
          <hr />
          <header>
            <h3>WORK EXPERIENCE</h3>
          </header>
          <ul className="default">
          <b>CombuterHelper | Front End Developer | Los Angeles, CA &nbsp;&nbsp;&nbsp; <span style={{color: '#B08401'}}>Nov 2017 - Present </span></b><br />
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
          <b>Beautiful Harmony Design | Motion Designer | Los Angeles, CA &nbsp;&nbsp;&nbsp; <span style={{color: '#B08401'}}>Jan 2006 - Nov 2017</span> </b><br />
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
          <hr />
          <header>
            <h3>EDUCATION</h3>
          </header>
          <b>BFA Visual Communication </b> &nbsp;&nbsp;&nbsp; American InterContinental University<br />
          <b>Graphic Design </b> &nbsp;&nbsp;&nbsp; California Institute of The Arts<br />
          <br />
        </section>
        <section>
          <hr />
          <header>
            <h3>PROJECT WORK</h3>
          </header>
          <ul className="default">
          <b>FosterApp | Web Developer | Github (front-end) | Github (back-end) &nbsp;&nbsp;&nbsp; <span style={{color: '#B08401'}}>Oct 2019</span>  </b><br />
          Online platform where users can log information about foster animals needing adoption.
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
          <b>FosterApp | Web Developer | Github  &nbsp;&nbsp;&nbsp; <span style={{color: '#B08401'}}>Mar 2019</span> </b><br />
          Online platform where users can log information about foster animals needing adoption.
            <li>
            Built with Ruby on Rails using MVC pattern and SQL database with ActiveRecord.
            </li>
            <li>
            Implemented OAuth authentication with Google and Facebook for -75% faster login.
            </li>
            <li>
            Created front-end with Bootstrap and custom CSS.
            </li>

          </ul>

          <ul className="default">
          <b>music-magazine-log | Web Developer | Github  &nbsp;&nbsp;&nbsp; <span style={{color: '#B08401'}}>May 2018</span> </b><br />
          A CMS to track and log magazine collections with images.
            <li>
            Built backend with Sinatra and optimized Rails with Rack middleware resulting in 20% speed gain.
            </li>
            <li>
            Implemented authentication with bcrypt for password security.
            </li>
            <li>
            Created front-end with Bootstrap and custom CSS.
            </li>
          </ul>

          <ul className="default">
          <b>coffee-roasters | Web Developer | Github | Download Gem  &nbsp;&nbsp;&nbsp; <span style={{color: '#B08401'}}>Jan 2018</span> </b><br />
          A Ruby gem that provides CLI to retrieve coffee roasters info in LA.
            <li>
            Written with Object Oriented Ruby.
            </li>
            <li>
            Scraped data from Thrillist website using Nokogiri. 
            </li>
            <li>
            Published on RubyGems.org.
            </li>
          </ul>
        </section>
        <footer className="major container medium">
        
          <ul className="actions special">
            <li>
              <Link to="/" className="">
                Back to Home
              </Link>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
