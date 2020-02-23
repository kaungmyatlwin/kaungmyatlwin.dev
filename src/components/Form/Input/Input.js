import React from 'react';
import './Input.scss';

const Input = (props) => {
  return (
    <input {...props} className={`Input ${props.className}`} />
  );
}

const TextArea = (props) => {
  return (
    <textarea {...props} className={`Input ${props.className}`} />
  );
}

Input.TextArea = TextArea;

export default Input;
