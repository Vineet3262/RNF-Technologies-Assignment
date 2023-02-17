import React from 'react'
import img from '../Images/Screenshot 2023-02-15 175541.png';
import './conference.css';

export default function conference() {
    return (
        <div className="container">
            <div className='pera-head'>
                <div className='pera'>
                    <h1>What is Internet 2.0 Conference</h1>
                    <p>Welcome to the coolest tect conference in town! Get ready for three incredible days of inspiring talks and informative panels from the leading professionals in the tech industry. With an agenda filled with crucial topics, such as the latest advances in artificial intelligence, machine learning, augmented reality, and more, this conference will leave you feeling motivated to tackle business challenges by harnessing the power of tech.</p>
                    <p>Don't miss out on this fantastic opportunity to connet and learn in the cities of Dubai and las Vegas - join us in 2023 as we bridge the gap between what's possible today and what could be tomorrow.</p>
                </div>
                <div className='first-image'>
                    <img src={img}></img>
                </div>
            </div>
        </div>

    )
}
