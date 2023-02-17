import React from 'react'
import img13 from '../Images/img13.png';
import img14 from '../Images/img14.png';
import img15 from '../Images/img15.png';
import './myattend.css'

export default function Myattend() {
    return (
        <div className='attend-head-pera'>
            <h2>Why Attend?</h2>
            <div className='container'>
                <div className='attend_image_div'>

                    <div className='image-attend-pera'>
                        <img src={img13} />
                        <div className='attend-first-pera'>
                            <h3 className='attend-second-pera'>Gain Insights</h3>
                            <p>Through its sessions, Internet 2.0 Conference helps you to broaden your horizons and know more about the topics making waves in the tech arena.</p>
                        </div>
                    </div>

                    <div className='image-attend-pera'>
                        <img src={img14} />
                        <div className='attend-first-pera'>
                            <h3 className='attend-second-pera'>Network With Peers</h3>
                            <p>Connect with like-minded individuals, thought leaders, and innovators at our event. Leverage this opportunity to understand multiple perspectives and explore business possibilities.</p>
                        </div>

                    </div>
                    <div className='image-attend-pera'>
                        <img src={img15} />
                        <div className='attend-first-pera'>
                            <h3 className='attend-second-pera'>Be Recognized</h3>
                            <p>Every year, the Internet 2.0 Conference will honor a select group of tech leaders for their zeal and steadfast commitment to sparking progress in the industry.</p>
                        </div>
                    </div>

                </div>
            </div>

        </div >
    )
}
