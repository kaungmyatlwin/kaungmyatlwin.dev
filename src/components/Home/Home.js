import React, { useState, forwardRef, useEffect } from 'react';
import { graphql } from 'gatsby';
import kmlPic from '../../images/kml-mv.jpg';
import './Home.scss';

const API_KEY = '009db423a922137c9442788dae5544c5';
const LOCATION = 'Bangkok';
const UNIT = 'metric';
const TYPE = 'weather';

const ENDPOINT = `https://api.openweathermap.org/data/2.5/weather?q=${LOCATION}&units=${UNIT}&type=${TYPE}&appId=${API_KEY}`;

const Home = (props, ref) => {
  const socialLinks = [
    {
      icon: 'ri-linkedin-box-fill',
      url: '//www.linkedin.com/in/kaungmyatlwin/',
    },
    {
      icon: 'ri-twitter-fill',
      url: '//twitter.com/dev_kmlwin',
    },
    {
      icon: 'ri-github-fill',
      url: '//github.com/kaungmyatlwin',
    },
    {
      icon: 'ri-messenger-fill',
      url: '//messenger.com/t/kmlwin.me',
    },
  ];

  const [weather, setWeather] = useState('🌞');

  useEffect(async () => {
    fetch(ENDPOINT)
      .then((response) => response.json())
      .then((weatherData) => {
        const weatherCode = weatherData?.weather[0]
          .toString()[0];

        switch (weatherCode) {
          case '2':
            setWeather('⛈️');
            break;
          case '3':
          case '5':
            setWeather('🌧️');
            break;
          case '7':
            setWeather('🌫️');
            break;
          case '8':
          default:
            setWeather('🌞');
            break;
        };
      })
      .catch(console.error);
  }, []);

  return (
    <section id="home" className="Home__Header" ref={ref}>
      <div className="container h-100">
        <div className="row no-gutters align-items-center h-100">
          <div className="col-lg-6 col-md-6 Home__aboutWrapper mt-1">
            <h1>
              This is <br />Kaung Myat Lwin.
            </h1>
            <p className="no-margin Home__shortDescription">
              A Web Engineer based in {weather}{' '}
              <span className="text-bold color-indigo">Bangkok</span>.
            </p>
            <div className="Home__socialLinks">
              {
                socialLinks.map(({ icon, url }, i) => (
                  <a href={url} rel="noopener noreferrer" target="_blank" key={i}>
                    <i className={icon}></i>
                  </a>
                ))
              }
            </div>
          </div>
          <div className="col-lg-6 mt-1">
            <img src={kmlPic} className="Home__kmlPic" alt="Kaung Myat Lwin" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default forwardRef(Home);
