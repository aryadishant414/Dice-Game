import StartGame from "./components/StartGame.jsx"
import "./App.css"
import { useState } from "react"
import PlayGame from "./components/PlayGame.jsx"
function App() {
  const [isGameStarted , setIsGameStarted] = useState(false)

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !(prev));
  }

  return (
    <>
      {isGameStarted ? <PlayGame /> : <StartGame toggle={toggleGamePlay} /> }
    </>
  )
}

export default App



