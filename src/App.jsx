import './App.css'
import RandomPhrase from './components/RandomPhrase'
import phrases from './utils/phrases.json'
import randomIndex from './services/randomIndex'
import { useState } from 'react'
import ButtonPhrase from './components/ButtonPhrase'
import backgroundR from './utils/backgrounds.json'

function App() {

  const sentence = randomIndex(phrases);
  const [quote, setQuote] = useState(sentence);
  const numberRandom = randomIndex(backgroundR)
  const [numberBg, setNumberBg] = useState(numberRandom)
  const bgStyle = {
    backgroundImage: `url("/assets/fondo${numberBg}.jpg")`
  }

  return (
    <>
      <div className='container'
            style = {bgStyle}
      >
        <h1>Galletas de la Fortuna</h1>
        <ButtonPhrase
          setQuote = {setQuote}
          setNumber = {setNumberBg}
        />
        <RandomPhrase
          quote ={quote}
        />
      </div>
    </>
  )
}

export default App
