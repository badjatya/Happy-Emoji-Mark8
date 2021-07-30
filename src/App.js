import React, { useState } from "react";
import "./App.css";

// Importing image
import emojiImage from "./img/emoji.png";

const emojiDictionary = {
  "😊": "Smiling",
  "😳": "Disbelief",
  "😔": "Sad",
  "🥡": "Takeout Box",
  "❤️": "Love",
  "😑": "Annoyance",
};

const emojiList = Object.keys(emojiDictionary);

const App = () => {
  const [emoji, setEmoji] = useState(null);
  const [emojiMean, setEmojiMean] = useState("Translation Will Appear Here...");

  const onChangeHandler = (event) => {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);
    if (inputEmoji in emojiDictionary) {
      setEmojiMean(emojiDictionary[inputEmoji]);
    } else {
      setEmojiMean("failure to recognize this emoji");
    }
  };

  const clickEventHandler = (emoji) => {
    setEmoji(emoji);
    setEmojiMean(emojiDictionary[emoji]);
  };
  return (
    <div className="App">
      <header>
        <h1>Happy Emoji</h1>
      </header>

      <main>
        <div className="left-col">
          <img src={emojiImage} alt="Emoji" />
        </div>
        <div className="right-col">
          <input
            type="text"
            placeholder="Enter 😊..."
            onChange={onChangeHandler}
          />
          <p>
            {emoji} {emojiMean}
          </p>

          <div className="emojiListContainer">
            {emojiList.map((emoji) => (
              <span key={emoji} onClick={() => clickEventHandler(emoji)}>
                {emoji}
              </span>
            ))}
          </div>
        </div>
      </main>

      <footer>
        <p>Designed By Badjatya ❤️</p>
        <a href="https://www.linkedin.com/in/badjatya/">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://twitter.com/ArchitBadjatya">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="https://github.com/badjatya">
          <i class="fab fa-github"></i>
        </a>
      </footer>
    </div>
  );
};

export default App;
