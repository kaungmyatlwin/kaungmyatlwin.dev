import React, { useState, useEffect, forwardRef } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import {
  TransitionGroup,
  SwitchTransition,
  CSSTransition,
  Transition,
} from 'react-transition-group';
import kmlPic from '../../images/kml-mv.jpg';
import './Home.scss';
import Button from '../Button/Button';

const personalities = ['software developer', 'dog lover', 'linux enthusiast'];

const Home = (props, ref) => {
  const [personality, setPersonality] = useState(personalities[0]);
  const [isAboutMeOpen, setIsAboutMeOpen] = useState(false);
  const [imagePos, setImagePos] = useState({ xPos: 0, yPos: 0 });
  // const weatherData = useStaticQuery(graphql`
  //   query {
  //     openWeather {
  //       weather {
  //         id
  //       }
  //     }
  //   }
  // `);

  // const weatherCode = weatherData.openWeather.weather[0].id
  //   .toString()
  //   .slice(0, 1);

  const weatherCode = '8';

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

  function onClickAboutMe() {
    setIsAboutMeOpen(!isAboutMeOpen);
  }

  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  function onMouseMove(e) {
    console.log(-e.clientY);
    setImagePos({
      xPos: -e.clientX,
      yPos: -e.clientY,
    });
  }

  return (
    <section id="home" className="Home__Header" ref={ref}>
      <div className="container h-100">
        <div className="row no-gutters align-items-center h-100">
          <div className="col-lg-6 col-md-6 Home__aboutWrapper mt-1">
            <h1>
              <span className="color-blue">Hello</span> there!
            </h1>
            <p className="no-margin Home__shortDescription">
              This is Kaung Myat{' '}
              <span className="color-blue">Lwin</span>. <br />
              A{' '}
              <span className="color-blue">software developer</span>{' '}
              based in {weatherEmoji}{' '}
              <span className="color-gold">Yangon</span>.
            </p>
          </div>
          <div className="col-lg-6 mt-1">
            <img src={kmlPic} className="Home__kmlPic" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default forwardRef(Home);
