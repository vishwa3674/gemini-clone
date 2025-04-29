import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'

const Main = () => {
  return (
    <div className= 'main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_image} alt="" />
        </div>
        <div className="main-container">
            <div className="greet">
                <p><span>Hello, Vishwa.</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest beautiful places to see on an upcoming road trip</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Briefly summarize concept: Urban Planning</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Brainstorm team bonding activities for our work retreat</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Analyse this code</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
        </div>

    </div>
  )
}

export default Main