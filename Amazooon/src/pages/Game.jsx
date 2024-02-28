import React, { useState } from "react";

const RockPaperScissors = () => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");

  const choices = ["rock", "paper", "scissors"];

  const playGame = (playerChoice) => {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    setPlayerChoice(playerChoice);
    setComputerChoice(computerChoice);

    if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      setResult("You win!");
    } else if (playerChoice === computerChoice) {
      setResult("It's a tie!");
    } else {
      setResult("Computer wins!");
    }
  };

  return (
    <div>
      <h2>Rock, Paper, Scissors</h2>
      <div>
        <button onClick={() => playGame("rock")}>Rock</button>
        <button onClick={() => playGame("paper")}>Paper</button>
        <button onClick={() => playGame("scissors")}>Scissors</button>
      </div>
      <div>
        {playerChoice && <p>Your choice: {playerChoice}</p>}
        {computerChoice && <p>Computer's choice: {computerChoice}</p>}
        {result && <p>{result}</p>}
      </div>
    </div>
  );
};

export default RockPaperScissors;
