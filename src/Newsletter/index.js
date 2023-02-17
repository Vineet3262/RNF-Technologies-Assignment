import React from 'react'
import newsLetterIcon from '../Images/newsLetterIcon.png'
import './Newsletter.css'

export default function Newsletter() {
  return (
    <div className='newsLetter'>
      <div className='news'></div>
      <div className='searchEmail'>
        <div className='heading'>
         <h1>Subscribe our newsletter</h1> 
        </div>
        <div className='searchBox input-group'>
          <input type="search" className=" inputSearch form-control rounded" placeholder="Email address" aria-label="Search" aria-describedby="search-addon" />
          <button type="button" className="submitButton">SUBMIT</button>
        </div>
        <div className='msg'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
          accumsan lacus vel facilisis.
        </div>
      </div>
      <div className='imgNews'>
        <img src={newsLetterIcon} alt="News LetterIcon" />
      </div>
    </div>
  )
}