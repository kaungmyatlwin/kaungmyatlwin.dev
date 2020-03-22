import React from 'react';
import './Button.scss';

const Button = props => {
  return (
    <button
      {...props}
      className={`Button ${props.className}`}
      disabled={props.loading || props.disabled || false}>
      {
        props.loading &&
          <div className="spinner">
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
          </div>
      }
      {
        !props.loading &&
          props.children
      }
    </button>
  );
};

export default Button;
