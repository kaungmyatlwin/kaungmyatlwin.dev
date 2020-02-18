import React, { forwardRef } from 'react';
import './Expertise.scss';

const services = [
  {
    icon: 'ri-window-line',
    title: 'Frontend Development',
    body: 'I craft intuitive, responsive and dynamic web applications scaling from your pocket phone to a big screen.'
  },
  {
    icon: 'ri-terminal-box-line',
    title: 'API Development',
    body: 'For both clients & developers, I code secure APIs to integrate into their apps, ranging from Public to Private APIs.'
  },
  {
    icon: 'ri-cloud-line',
    title: 'Cloud Deployment',
    body: 'I do devops operations to deploy the finished products on cloud servers to deliver to end users.'
  }
];

const Projects = (props, ref) => {
  return (
    <section id="expertise" className="Expertise" ref={ref}>
      <div className="container">
        <div className="row">
          <h1 className="text-center w-100">My <span className="color-blue">Expertise</span></h1>
        </div>
        <div className="row">
          {
            services.map(({ icon, title, body }, i) => {
              return (
                <div className="col-4 text-center" key={i}>
                  <div className="Expertise__icons">
                    <i className={icon}></i>
                  </div>
                  <h2 className="text-center">{title}</h2>
                  <p>{body}</p>
                </div>
              );
            })
          }
        </div>
      </div>
    </section>
  )
};

export default forwardRef(Projects);
