import React from 'react'
import "./Text.css"


const Text = ({framewordks, changeFramework}) => {
  return (
    <section className='container__text'>
      <div className="text">
        <h3>{framewordks.quote}</h3>
      </div>
      <div className="autor">
        <h4>{framewordks.author}</h4>
      </div>
    </section>
  )
}

export default Text