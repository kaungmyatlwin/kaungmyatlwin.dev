import React, { useState, useEffect, forwardRef } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import {
  TransitionGroup,
  SwitchTransition,
  CSSTransition,
  Transition,
} from 'react-transition-group';
import kmlPic from '../../images/kml.jpg';
import './Home.scss';
import Button from '../Button/Button';

const personalities = ['software developer', 'dog lover', 'linux enthusiast'];

const Home = (props, ref) => {
  const [personality, setPersonality] = useState(personalities[0]);
  const [isAboutMeOpen, setIsAboutMeOpen] = useState(false);
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

  return (
    <section id="home" className="Home__Header" ref={ref}>
      <div className="container-fluid h-100">
        <div className="row align-items-center h-100">
          <div className="col-lg-6 col-md-12 Home__aboutWrapper">
            <div className="Home__aboutKML">
              <SwitchTransition mode="out-in">
                <CSSTransition
                  key={isAboutMeOpen ? 'about-me' : 'start'}
                  addEndListener={(node, done) =>
                    node.addEventListener('transitionend', done, false)
                  }
                  classNames="brief"
                  timeout={200}
                >
                  <div className="Home__brief">
                    {isAboutMeOpen ? (
                      <p className="Home__AboutMe">
                        <span className="text-big">F</span>rom the very
                        childhood, I was very fascinated by{' '}
                        <span className="color-blue">how things worked</span>,
                        inside a machine or even the whole universe. This
                        fascination had carried on through the years that lead
                        to passion in Programming. <br />
                        <span className="text-big">S</span>ince the graduation
                        from{' '}
                        <span className="color-blue">
                          University of Greenwich
                        </span>{' '}
                        with bachelor in Information Technology in 2017, I've
                        worked in Software Industry, mainly focusing on{' '}
                        <span className="color-blue">Web Applications</span>.{' '}
                        <br />
                        <span className="text-big">T</span>hough I tackle any
                        problem with possible solutions, my most proficient
                        language remains{' '}
                        <span className="color-blue">Javascript</span> and{' '}
                        <span className="color-dark-grey">
                          <i>React / Node / Mongo</i>
                        </span>{' '}
                        as my Tech Stack.
                      </p>
                    ) : (
                      <>
                        <h1>
                          <span className="color-blue">Hello</span> there!
                        </h1>
                        <h2>
                          I am Kaung Myat{' '}
                          <span className="color-blue">Lwin</span>.
                        </h2>
                        <h3>
                          A{' '}
                          <span className="color-blue">Software Developer</span>{' '}
                          based in {weatherEmoji}{' '}
                          <span className="color-gold">Yangon</span>.
                        </h3>
                      </>
                    )}
                  </div>
                </CSSTransition>
              </SwitchTransition>
              <Button
                className="text-uppercase Home__aboutKMLBtn"
                onClick={onClickAboutMe}
              >
                {!isAboutMeOpen ? 'About Me' : 'Close'}
              </Button>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 Home__kmlPic">
            <div
              className="Home__bg"
              style={{ backgroundImage: `url(${kmlPic})` }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default forwardRef(Home);
