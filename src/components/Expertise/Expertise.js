import React, { forwardRef } from 'react';
import './Expertise.scss';

const iconBaseStyle = {
  width: '68px',
  height: '54px',
  position: 'relative',
  boxSizing: 'border-box',
  marginBottom: '16px',
  marginLeft: 'auto',
  marginRight: 'auto',
}

const FrontEndIcon = () => {
  return (
    <div style={iconBaseStyle}>
      <div className="Browser">
        <div className="tile-bar">
          <i className="green"></i>
          <i className="red"></i>
        </div>
        <div className="content-box">
          <div className="content-pic"></div>
          <div className="content-texts"></div>
        </div>
      </div>
    </div>
  );
};

const BackendIcon = () => {
  return (
    <div style={iconBaseStyle}>
      <div className="Terminal" />
    </div>
  );
}

const DeploymentIcon = () => {
  return (
    <div style={iconBaseStyle}>
      <div className="server">
        <div className="led red"></div>
        {/* <div className="led blue"></div> */}
      </div>
      <div className="server">
        <div className="led green"></div>
        {/* <div className="led"></div> */}
      </div>
      <div className="server">
        <div className="led idle"></div>
        {/* <div className="led"></div> */}
      </div>
    </div>
  );
}

const services = [
  {
    icon: <FrontEndIcon />,
    title: 'Frontend Development',
    body: 'Crafts dynamic web apps scaling from your pocket phone to a big screen.',
    stacks: ['React', 'Vue', 'jQuery']
  },
  {
    icon: <BackendIcon />,
    title: 'Backend Development',
    body: 'Delivers secure and scalable backend APIs, ranging from Public to Private ones.',
    stacks: ['ExpressJS', 'MongoDB', 'PostgreSQL']
  },
  {
    icon: <DeploymentIcon />,
    title: 'Product Deployment',
    body: 'Deploys the finished products on cloud servers to deliver to end users.',
    stacks: ['nginx', 'Linux']
  }
];

const Expertise = (props, ref) => {
  return (
    <section id="expertise" className="Expertise" ref={ref}>
      <div className="container">
        <div className="row">
          <h1 className="text-center w-100">He Does</h1>
        </div>
        <div className="row">
          {
            services.map(({ icon, title, body, stacks }, i) => {
              return (
                <div className="col-xs-12 col-md-4 text-center Expertise__exp" key={i}>
                  <div className="Expertise__icons">
                    {/* <i className={icon}></i> */}
                    {icon}
                  </div>
                  <h2 className="text-center">{title}</h2>
                  <p>{body}</p>
                  <span className="Expertise__stacks"><i>{stacks.join(' / ')}</i></span>
                </div>
              );
            })
          }
        </div>
      </div>
    </section>
  )
};

export default forwardRef(Expertise);