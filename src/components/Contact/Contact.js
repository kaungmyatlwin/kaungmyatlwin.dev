import React, { forwardRef } from 'react';

const Contact = (props, ref) => {
  return (
    <section id="contact" ref={ref} style={{ height: '100vh' }}>
      <div className="container">
        <div className="row">
          <h1 className="text-center w-100"><span className="color-blue">Contact</span> Me</h1>
        </div>
      </div>
    </section>
  );
}

export default forwardRef(Contact);
