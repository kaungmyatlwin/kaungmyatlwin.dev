import React from 'react';
import './Experience.scss';

const TimelineSub = ({ direction = 'left', steps = 4, exp }) => {
  const arr = new Array(steps);
  arr.fill(0, 0, arr.length);
  return (
    <div className="timeline">
      {
        arr.map((_, i) => {
          if (i !== arr.length - 1) {
            return <div key={i}>|</div>
          } else {
            if (direction === 'right') {
              return (
                <div key={i} className="timeline-step timeline-dir-right"><div style={{ width: '50%' }}>--></div> {exp}</div>
              );
            }
              return (
              <div key={i} className="timeline-step timeline-dir-left">
                {exp}
                {` <--`}
              </div>
              )
          }
        })
      }
    </div>
  );
}

const Experience = () => {
  return (
    <section id="experience" className="Experience">
      <h1 className="text-center">Career</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <b>nexlabs (2017)</b>
            <TimelineSub
              steps={3}
              direction="right"
              exp={
                <div>
                  {`  Mingalarletphwet`} <br />
                  <div>
                    Website for Wedding Gifts. Took a part in coding the UI of Mingalarletphwet Website, along side with specialty in interactions.
                  </div>
                </div>
              }
            />
            {/* <TimelineSub
              steps={5}
              direction="right" /> */}
          </div>
        </div>
        <div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
