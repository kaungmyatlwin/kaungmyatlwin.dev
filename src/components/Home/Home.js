import React, { forwardRef } from 'react';
import { useStaticQuery } from 'gatsby';
import kmlPic from '../../images/kml-mv.jpg';
import './Home.scss';

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

  const weatherData = useStaticQuery(graphql`
    query {
      openWeather {
        weather {
          id
        }
      }
    }
  `);

  const weatherCode = weatherData.openWeather.weather[0].id
    .toString()
    .slice(0, 1);

  // const weatherCode = '8';

  const weatherEmoji = (
    <>
      {(() => {
        switch (weatherCode) {
          case '2':
            return '⛈️';
          case '3':
          case '5':
            return '🌧️';
          case '7':
            return '🌫️';
          case '8':
          default:
            return '🌞';
        }
      })()}
    </>
  );

  return (
    <section id="home" className="Home__Header" ref={ref}>
      <div className="container h-100">
        <div className="row no-gutters align-items-center h-100">
          <div className="col-lg-6 col-md-6 Home__aboutWrapper mt-1">
            <h1>
              This is <br />Kaung Myat Lwin.
            </h1>
            <p className="no-margin Home__shortDescription">
              A software developer based in {weatherEmoji}{' '}
              <span className="color-gold">Yangon</span>.
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
