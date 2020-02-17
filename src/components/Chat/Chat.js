import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import SendIcon from '../../../public/icons/send2.svg';
import './Chat.scss';

const TYPE_FROM = 'From';
const TYPE_TO = 'To';
const preLoadedBotText = [
  {
    type: TYPE_FROM,
    text:
      'Hello there! Nice to meet you! Might I have the pleasure of knowing your name?',
  },
];

const delay = t => new Promise(resolve => setTimeout(resolve, t));

const initialTypeDelayMs = 200;
const botTypeDelayMs = 1500;

const steps = ['KNOW_NAME', 'KNOW_REASON', 'KNOW_CONTACT'];

const Chat = () => {
  const [typing, setTyping] = useState(false);
  const [chatHistory, setChatHistory] = useState(preLoadedBotText);
  const [inputText, setInputText] = useState('');
  const [clientName, setClientName] = useState('');

  useEffect(() => {
    if (typing) {
      delay(botTypeDelayMs).then(() => {
        sendBotAction();
      });
    }
  }, [typing]);

  function sendBotAction() {
    const step = steps[0];
    switch (step) {
      case 'KNOW_NAME':
        setChatHistory([
          ...chatHistory,
          {
            type: TYPE_FROM,
            text:
              "Fantastic! Now that I've got your name, might I also know the reason why you want to talk to me?",
          },
        ]);
        break;
      case 'KNOW_REASON':
        setChatHistory([
          ...chatHistory,
          {
            type: TYPE_FROM,
            text:
              "Ah! That's great! So why don't we exchange emails for contact? <br /><br /> Mine's <a href='mailto:dev.kaungmyatlwin@gmail.com' style='color: white;'>dev.kaungmyatlwin@gmail.com</a>. Can I know your email or phone number too?",
          },
        ]);
        break;
      case 'KNOW_CONTACT':
      default:
        setChatHistory([
          ...chatHistory,
          {
            type: TYPE_FROM,
            text: "Thanks! I'll keep in touch with you later on!",
          },
        ]);
        break;
    }
    steps.shift();
    console.log(steps);
  }

  async function onSubmitChat(e) {
    e.preventDefault();
    if (inputText === '') return;
    setInputText('');
    setChatHistory([...chatHistory, { type: TYPE_TO, text: inputText }]);

    delay(initialTypeDelayMs).then(() => {
      setTyping(true);
    });

    delay(botTypeDelayMs).then(() => {
      setTyping(false);
    });
  }

  function performAction() {}

  return (
    <section className="Chat__Container">
      <TransitionGroup className="Chat__Window">
        {chatHistory.map(({ type, text }, i) => {
          return (
            <CSSTransition key={i} timeout={200} classNames="bubble">
              <div className="clearfix">
                <div
                  className={`Chat__Bubble Chat__${type}Bubble`}
                  dangerouslySetInnerHTML={{ __html: text }}
                ></div>
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
      <form className="Chat__Form" onSubmit={onSubmitChat}>
        <input
          className="Chat__Input"
          value={inputText}
          onChange={e => setInputText(e.target.value)}
          placeholder="Express yourself!"
        />
        <button type="submit" className="Chat__Send">
          <img src={SendIcon} alt="Send" />
        </button>
      </form>
    </section>
  );
};

export default Chat;
