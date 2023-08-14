import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import './css/typewriter.css'

const TypewriterEffect = () => {
  return (
    <div className="typewriter-container">
      <h1 className="typewriter-text">
        LIFE IS SIMPLE{' '}
        <span className="typewriter-span">
          <Typewriter
            words={['EAT', 'SLEEP', 'CODE', 'REPEAT!']}
            loop={Infinity}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
    </div>
  )
}

export default TypewriterEffect
