import React from 'react';
import phrases from '../utils/phrases.json';
import randomIndex from '../services/randomIndex';
import backgroundR from '../utils/backgrounds.json'

const ButtonPhrase = ({setQuote, setNumber}) => {

  const handleButton = () =>{
    const sentence = randomIndex(phrases)
    const numberBg = randomIndex(backgroundR)
    setQuote(sentence)
    setNumber(numberBg)
  }

  return (
    <button onClick={handleButton}>Probar mi suerte</button>
  )
}

export default ButtonPhrase;
