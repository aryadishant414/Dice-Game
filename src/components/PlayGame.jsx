import NumberSelector from "./NumberSelector.jsx";
import RoleDice from "./RoleDice.jsx";
import TotalScore from "./TotalScore.jsx";
import styled from "styled-components";
import { useState } from "react";
import { Button, OutlineButton } from "../styled/Button.js";
import Rules from "./Rules.jsx";

// Game is Playing here
const PlayGame = () => {
  const [showRules , setShowRules] = useState(false);
  const [error , setError] = useState("");
  const [totalScore, setTotalScore] = useState(0);
  const [selectedNumber , setSelectedNumber] = useState();
  const [currentDice , setCurrentDice] = useState(1);

  const generateRandomNumber = (min , max) => {
    // console.log("RANDOM NUMBER : " ,Math.floor( Math.random() * (max - min) + min));  // just to check
    return Math.floor( Math.random() * (max - min) + min);
  }

    const roleDice = () => {

      if(!selectedNumber) 
        {
          setError("You have not selected any number");
          return;
        };  // iski vjh sai abb total score update nhi hoga
      
      const randomNumber = generateRandomNumber(1,7);

      setCurrentDice((prev) => randomNumber);
      

      if(selectedNumber === randomNumber ) {
        setTotalScore((prev) => prev + randomNumber);
      }else {
        setTotalScore((prev) => prev - 2);
      }
      setSelectedNumber(undefined);
    }

    const resetButton = () => {
      setTotalScore(0);
    }





  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore 
          totalScore = {totalScore}
        />
        <NumberSelector
          error = {error}
          setError = {setError} 
          selectedNumber = {selectedNumber} 
          setSelectedNumber = {setSelectedNumber}
        />
      </div>
      <RoleDice 
        currentDice = {currentDice}
        roleDice = {roleDice}
      />
      <div className="btns">
        <OutlineButton onClick={resetButton}>Reset</OutlineButton>
        <Button onClick={ () => 
          setShowRules((prev) => !prev)
        }>{showRules ? "Hide" : "Show"} Rules</Button>
      </div>

      {showRules && <Rules />}
    </MainContainer>
  )
}

export default PlayGame;

const MainContainer = styled.main`
  padding-top: 70px;
  .top_section {
    display: flex;
    justify-content: space-around;
    /* justify-content: space-between; */
    align-items: end;
  }

  .btns {
    margin-top: 40px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;