import React from 'react';

import Layout from '../components/Layout';

import { Link } from 'gatsby';
import Header from '../components/Header';
import Footer from '../components/Footer';

import pic1 from '../assets/images/FosterApp_react600.gif';
import pic2 from '../assets/images/FosterApp_Rails_600.gif';
import pic3 from '../assets/images/MusicMagazineLog600.gif';
import pic4 from '../assets/images/coffeeRoaster.jpg';

const IndexPage = () => (
  <Layout>
    <Header />

    <div id="main">
      <header className="major container medium">
        <h2>
          
          I love creating productivity
          <br />
           in people's lives
        </h2>
      </header>

      <div className="box alt container">
        <section className="feature left">
          <a href="https://github.com/mietone/fosterapp-frontend"  target="_blank" rel="noopener noreferrer" className="image icon">
            <img src={pic1} width={300} alt="" />
          </a>
          <div className="content">
            <h3>Foster App (React / Redux)</h3>
            <p>
            Online platform where users can log information about foster animals needing adoption.
            </p>
          </div>
        </section>
        <section className="feature right">
          <a href="https://github.com/mietone/FosterApp" target="_blank" rel="noopener noreferrer" className="image icon">
            <img src={pic2} width={300} alt="" />
          </a>
          <div className="content">
            <h3>Foster App (Ruby on Rails)</h3>
            <p>
            Online platform where users can log information about foster animals needing adoption.
            </p>
          </div>
        </section>
        <section className="feature left">
          <a href="https://github.com/mietone/music-magazine-log" target="_blank" rel="noopener noreferrer" className="image icon">
            <img src={pic3} width={300} alt="" />
          </a>
          <div className="content">
            <h3>music-magazine-log</h3>
            <p>
            A Content Management System to track and log magazine collections with images.
            </p>
          </div>
        </section>
        <section className="feature right">
          <a href="https://github.com/mietone/coffee-roasters-cli-app" target="_blank" rel="noopener noreferrer" className="image icon">
            <img src={pic4} alt="" />
          </a>
          <div className="content">
            <h3>coffee-roasters</h3>
            <p>
            A Ruby gem that provides CLI to retrieve coffee roasters info in LA.
            </p>
          </div>
        </section>
      </div>

      <footer className="major container medium">
        <h3>Check out my resume</h3>
      
        <ul className="actions special">
          <li>
            <Link to="/Elements" className="button">
              Resume
            </Link>
          </li>
        </ul>
      </footer>
    </div>
    <Footer />
  </Layout>
);

export default IndexPage;
