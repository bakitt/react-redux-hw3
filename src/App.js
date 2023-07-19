import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setRandomNumber } from "./store/Actions";
import "./styles/App.css";

const App = () => {
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const inputRef = useRef();

  const randomNumber = useSelector((state) => state.randomNumber);
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setGuess(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleGuess();
    }
  };

  const handleGuess = () => {
    const guessNumber = parseInt(guess);
    if (isNaN(guessNumber)) {
      setMessage("Введите число!");
    } else if (guessNumber === randomNumber) {
      setMessage("Поздравляем, вы отгадали число!");
      setIsGameOver(true);
    } else if (guessNumber < randomNumber) {
      setMessage("Берите выше.");
    } else {
      setMessage("Берите ниже.");
    }
    setAttempts((prevAttempts) => prevAttempts + 1);
    setGuess("");
  };

  const handleRestart = () => {
    dispatch(setRandomNumber(generateRandomNumber()));
    setAttempts(0);
    setMessage("");
    setIsGameOver(false);
    inputRef.current.focus();
  };

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 100) + 1;
  };

  return (
    <div className="container">
      <h1 className="title">Отгадай число от 1 до 100</h1>
      <div className="input-container">
        <input
          ref={inputRef}
          type="number"
          value={guess}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          disabled={isGameOver}
        />
      </div>
      <div className="button-container">
        <button onClick={handleGuess} disabled={isGameOver}>
          Отгадать
        </button>
        <button onClick={handleRestart} disabled={!isGameOver}>
          Заново
        </button>
      </div>
      {message && <div className="result">{message}</div>}
    </div>
  );
};

export default App;
