import React from 'react'

const RandomPhrase = ({quote}) => {

  const { author, phrase } = quote

  return (
    <div className='phraseContainer'>
      <p>{phrase}<br /><i className="bx bxs-quote-alt-right phraseIcon"></i></p>
      <p className='author'>Fuente: {author}</p>

    </div>
  )
}

export default RandomPhrase
