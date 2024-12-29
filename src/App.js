import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [showSecondScreen, setShowSecondScreen] = useState(false);

  // Initialize the No button with static default values
  const [noButtonPosition, setNoButtonPosition] = useState({ top: '56.2%', left: '60%' });

  const [clickCounts, setClickCounts] = useState({ yes: 0, no: 0 });
  const [terminalText, setTerminalText] = useState("oyundari@ozi-mac ~ % ");

  useEffect(() => {
    if (showSecondScreen) {
      let index = 0;
      const terminalMessage = " now we are in a relationship (´｡• ᵕ •｡`) ♡";
      const typingInterval = setInterval(() => {
        setTerminalText((prev) => prev + (terminalMessage[index] || ""));
        index++;
        if (index > terminalMessage.length) {
          clearInterval(typingInterval);
        }
      }, 100);
    }
  }, [showSecondScreen]);

  const handleYesClick = () => {
    setClickCounts((prev) => ({ ...prev, yes: prev.yes + 1 }));
    setShowSecondScreen(true);
  };

  const handleNoHover = () => {
    setClickCounts((prev) => ({ ...prev, no: prev.no + 1 }));

    // Get the dimensions of the app container
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;

    // Calculate random positions within the screen's bounds
    const randomTop = Math.random() * (containerHeight - 50) + 'px'; // Avoid going off-screen vertically
    const randomLeft = Math.random() * (containerWidth - 100) + 'px'; // Avoid going off-screen horizontally

    setNoButtonPosition({ top: randomTop, left: randomLeft });
  };

  if (showSecondScreen) {
    return (
      <div className="app terminal">
        <div className="terminal-header">
          <div className="terminal-buttons">
            <span className="button red"></span>
            <span className="button yellow"></span>
            <span className="button green"></span>
          </div>
        </div>
        <div className="terminal-body">
          <div className="terminal-text">{terminalText}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <div className="content">
        <div className="message">I will officially ask you now, Will you be my girlfriend? ❤️</div>
        <div className="buttons">
          <button className="yes-button" onClick={handleYesClick}>
            Yes
          </button>
          <button
            className="no-button"
            style={noButtonPosition}
            onMouseEnter={handleNoHover}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
