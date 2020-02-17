import React from 'react';

const ChatWindow = () => {
  return (
    <TransitionGroup className="Chat__Window">
      {chatHistory.map(({ type, text }, i) => {
        return (
          <CSSTransition key={i} timeout={200} classNames="bubble">
            <div className="clearfix">
              <div className={`Chat__Bubble Chat__${type}Bubble`}>{text}</div>
            </div>
          </CSSTransition>
        );
      })}
      {typing && (
        <CSSTransition key="typing" timeout={200} classNames="bubble">
          <div className="clearfix">
            <div className="Chat__Bubble Chat__FromBubble">
              <i>Bot is typing...</i>
            </div>
          </div>
        </CSSTransition>
      )}
    </TransitionGroup>
  );
};
