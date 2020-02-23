import React, { useState, forwardRef } from 'react';
import Button from '../Button/Button';
import Input from '../Form/Input/Input';
import './Contact.scss';

const { TextArea, Select } = Input;

function onSubmitForm(e) {
  e.preventDefault();
}

const Contact = (props, ref) => {
  const [loading, setLoading] = useState(false);
  return (
    <section id="contact" className="Contact" ref={ref}>
      <div className="container">
        <div className="row">
          <h1 className="text-center w-100"><span className="color-blue">Contact</span> Me</h1>
          <p className="text-center w-100">Feel free to send me a message at anytime.</p>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-6 col-xs-12">
            <form className="contactForm" onSubmit={onSubmitForm}>
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
                <Select className="contactForm__select">
                  <option disabled selected>Select one...</option>
                  <option value="">For hiring</option>
                  <option value="">Freelance Project</option>
                  <option value="">Just for Coffee</option>
                </Select>
              </div>
              <div className="contactForm__control">
                <label htmlFor="">Message</label>
                <TextArea
                  className="contactForm__message"
                  placeholder="Anything you'd love to say to me."
                ></TextArea>
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
