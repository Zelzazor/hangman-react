import { useCallback, useEffect, useState } from 'react'
import HangmanWord from './components/HangmanWord'
import Keyboard from './components/Keyboard'
import Status from './components/Status'
import words from './wordsList.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedo } from '@fortawesome/free-solid-svg-icons'

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)]
}

function App() {

  const [word, setWord] = useState(getRandomWord)
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const numberOfWrongGuesses = guessedLetters.filter(letter => !word.includes(letter)).length

  const isLost = numberOfWrongGuesses >= 6
  const isWon = word.split("").every(letter => guessedLetters.includes(letter))

  const reset = () => {
    setGuessedLetters([])
    setWord(getRandomWord)
  }

  const guessLetter = useCallback((letter: string) => {

    if(isLost || isWon) return;
    if(!letter.match(/^[a-z]$/)) return;
    if(guessedLetters.includes(letter)) return;
    
    setGuessedLetters(currentLetters => [...currentLetters, letter])
    
  }, [guessedLetters])

  useEffect(()=>{
    const handler = (event: KeyboardEvent) => {
      event.preventDefault();
      guessLetter(event.key)
    }
    document.addEventListener("keypress", handler)
    return () => document.removeEventListener("keypress", handler)
  },[guessedLetters])

  useEffect(()=>{
    const handler = (event: KeyboardEvent) => {
      if(event.key === "Enter"){
        reset()
      }
    }
    document.addEventListener("keypress", handler)
    return () => document.removeEventListener("keypress", handler)
  }, [])



  return (
    <div className="App" style={{ fontFamily: "sans-serif", display: "flex", flexDirection: "column", alignItems: "center" }} >
      <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem", width: "600px" }}>
        <span style={{fontSize: "5rem"}}>HANGMAN</span>
        <button style={{ alignSelf: "center", padding: "1rem", background: "lightgreen", border: "1px solid black", borderRadius: "0.5rem", cursor: "pointer" }} onClick={reset}><FontAwesomeIcon icon={faRedo}></FontAwesomeIcon></button>
      </div>
      <HangmanWord word={word} guessedLetters={guessedLetters} isLost={isLost}/>
      <Keyboard guessLetter={guessLetter} guessedLetters={guessedLetters}/>
      <Status numberOfWrongGuesses={numberOfWrongGuesses} isWon={isWon} isLost={isLost}/>
    </div>
  )
}

export default App
