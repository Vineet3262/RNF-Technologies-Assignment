import React from 'react'
import footerLogo from '../Images/footerLogo.png'
import "./footer.css"

export default function Footer() {
    return (
        <div className='footer'>
            <div className="footerHeader">
                <img className="footerLogo" src={footerLogo} alt="footer logo" />
            </div>
            <div className="footerContainer">
                <div className="About">
                    <ul>
                        <li><h5>ABOUT US</h5></li>
                        <li><p>Who We Are</p></li>
                        <li><p>Venu</p><p>-Dubai</p><p>-USA</p></li>
                        <li><p>Speaker</p></li>
                        <li><p>Launchpad</p></li>
                        <li><p>Recognition Program</p></li>
                    </ul>
                </div>
                <div className="Agenda">
                    <ul>
                        <li><h5>AGENDA</h5></li>
                        <li><p>Dubai 2023</p></li>
                        <li><p>USA 2023</p> </li>
                        <li><p>Themes</p></li>
                        <li><p>Conference Format</p></li>
                    </ul>
                </div>
                <div className="Marketing & Sales">
                    <ul>
                        <li><h5>MARKETING & SALES</h5></li>
                        <li><p>Partner with Us</p></li>
                        <li><p>Media Inquiries</p></li>
                    </ul>
                </div>
                <div className="Library">
                    <ul>
                        <li><h5>LIBRARY</h5></li>
                        <li><p>gallery</p></li>
                        <li><p>Attendee Reviews</p></li>
                        <li><p>Past Events</p></li>
                        <li><p>Higlights</p></li>
                        <li><p>Digital Showguide</p></li>
                    </ul>
                </div>
                <div className="Media">
                    <ul>
                        <li><h5>MEDIA</h5></li>
                        <li><p>Newsroom</p></li>
                        <li><p>Blog</p></li>
                        <li><p>Press</p></li>
                        <li><p>Announcement</p></li>
                        <li><p>FAQs</p></li>
                    </ul>
                </div>
                <div className="Important Links">
                    <ul>
                        <li><h5>IMPORTANT LINKS</h5></li>
                        <li><p>Book Passes</p></li>
                        <li><p>Speak At Our Event</p></li>
                        <li><p>Log In</p></li>
                        <li><p>Contact Us</p></li>
                        <li><p>Code Of Conduct</p></li>
                    </ul>
                </div>
            </div>
            <div className='footerCopyright'>
                <p className='copyRight'>&copy; Internet 2.0 conference. All rights reserved.</p>
                <p className='term'>Scam Alert | Privacy Policy | Terms of Service</p>
            </div>
        </div>
    )
}