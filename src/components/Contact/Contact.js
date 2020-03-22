import React, { useState, forwardRef } from 'react';
import Button from '../Button/Button';
import Input from '../Form/Input/Input';
import './Contact.scss';

const { TextArea, Select } = Input;

const Contact = (props, ref) => {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  function onSubmitForm(e) {
    e.preventDefault();
    setLoading(true);
    // Literally copy pasted from From Spree xD
    const form = e.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus('SUCCESS');
        setLoading(false);
      } else {
        setStatus('ERROR');
        setLoading(false);
      }
    };
    xhr.send(data);
  }

  return (
    <section id="contact" className="Contact" ref={ref}>
      <div className="container">
        <div className="row">
          <h1 className="text-center w-100">Contact Him</h1>
          <p className="text-center w-100">He's happy to receive a message.</p>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-6 col-xs-12">
            <form
              className="contactForm"
              method="POST"
              onSubmit={onSubmitForm}
              action="https://formspree.io/xrglpavd">
              <div className="contactForm__control">
                <label htmlFor="name">Name</label>
                <Input id="name" className="contactForm__input" required placeholder="How would you like him to call you?" name="name" />
              </div>
              <div className="contactForm__control">
                <label htmlFor="email">Email</label>
                <Input id="email" className="contactForm__input" required type="email" placeholder="How can he contact you back?" name="email" />
              </div>
              <div className="contactForm__control">
                <label htmlFor="">What's this about?</label>
                <Select className="contactForm__select" defaultValue="select-one" name="reason">
                  <option disabled value="select-one">Select one...</option>
                  <option>For hiring</option>
                  <option>Freelance Project</option>
                  <option>Just for a Chat</option>
                </Select>
              </div>
              <div className="contactForm__control">
                <label htmlFor="">Message</label>
                <TextArea
                  className="contactForm__message"
                  placeholder="Anything you'd love to say to me."
                  name="message"
                ></TextArea>
              </div>
              <div className="contactForm__control">
                <Button
                  loading={loading}
                  className="contactForm__submitBtn">
                    Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default forwardRef(Contact);
