import React from 'react'
import './AboutMe.css'
import ImageUploader from '../../components/ImageUploader/ImageUploader.js'

function AboutMe() {
  return (
    <div>
      <p className='description'>Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.</p>
      <p className='description'>I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a... this is text of about me component and give me text for experience and recommened component</p>
      <ImageUploader/>
    </div>
  )
}

export default AboutMe