import React, { forwardRef } from 'react';
import Button from '../Button/Button';
import Input from '../Form/Input/Input';
import './Contact.scss';

const Contact = (props, ref) => {
  return (
    <section id="contact" className="Contact" ref={ref}>
      <div className="container">
        <div className="row">
          <h1 className="text-center w-100"><span className="color-blue">Contact</span> Me</h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-6 col-xs-12">
            <form className="contactForm">
              <div className="contactForm__control">
                <label htmlFor="name">Name</label>
                <Input id="name" className="contactForm__input" required placeholder="How would you like me to call you?" />
              </div>
              <div className="contactForm__control">
                <label htmlFor="email">Email</label>
                <Input id="email" className="contactForm__input" required type="email" placeholder="How do I contact you back?" />
              </div>
              <div className="contactForm__control">
                <label htmlFor="">What's this about</label>
                <select className="contactForm__select">
                  <option value="">Just for Coffee</option>
                </select>
              </div>
              <div className="contactForm__control">
                <label htmlFor="">Message</label>
                <Input.TextArea
                  className="contactForm__message"
                  placeholder="Anything you'd love to say to me."
                ></Input.TextArea>
              </div>
              <div className="contactForm__control">
                <Button className="contactForm__submitBtn">Submit</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default forwardRef(Contact);
