import React from 'react'
import './trailer.css';
export default function Trailer() {
    return (
        <div>

        <div className='trailer-head'>
            <div className='container'>
                <h3 className='text-head'>INTERNET 2.0 CONFERENCE 2022 - TRAILER</h3>
            <div className='trailer-video'>
                <iframe className =" trailer_class" width="660" height="315" src="https://www.youtube.com/embed/qyow1e4ziWk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className='trailer-footer'>
                <p>Within the course of three days, the Internet 2.0 Conference will give you a 360 view of innovation and ideas that are driving change in the tech space. This trailer is just a snapshot of what's waiting for you at the international technology event.</p>
            </div>
            </div>
        </div>
        </div>
    )
}
