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

const Select = (props) => {
  return (
    <select {...props} className={`Input ${props.className}`}>
      {props.children}
    </select>
  )
}

Input.TextArea = TextArea;
Input.Select = Select;

export default Input;
