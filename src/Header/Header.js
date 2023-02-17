import React from 'react';
import logo from '../Images/headerlogo.png';
import './Header.css';

export default function Header() {
    return (
        <div className='header'>
            <div className='container'>
                <div className='menu_div'>
                    <div className='logo_box'>
                        <div className='logo_div'>
                            <img src={logo} />
                        </div>
                        <div className='address'>
                            <p>InterContinental, Dubai Festival City, UAE
                                1st-3rd May, 2023</p>
                            <p>Caesars Forum, Las Vegas, USA
                                10th - 12th July, 2023</p>
                        </div>
                    </div>
                    
                    <div className='menu'>
                        <div className='menu_btn'>
                            <button>Partner with us</button>
                            <button>Book Tickets</button>
                            <button>Launchpad</button>
                        </div>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                </div>
                <div className='text_div'>
                    <div className='text'>
                        <h1>"The Olympics of Tech" <span>- Politico</span></h1>
                        <h4>"The conference has been great! It's both informational and inspirational."</h4>
                        <p>- Tino Dietrich, Founder & CEO, Ella Paradis, Inc.</p>
                        <div className='box'>
                            <div className='box1'>
                                <h2>Ballroom: Alliance B1</h2>
                                <p>InterContinental, Dubai Festival City, UAE
                                    1st-3rd May, 2023</p>
                            </div>
                            <div className='box2'>
                                <h2>Ballroom: Alliance B2</h2>
                                <p>InterContinental, Dubai Festival City, UAE
                                    1st-3rd May, 2023</p>
                            </div>
                        </div>
                    </div>
                    <div className='form_div'>
                        <form>
                            <h2>Select Conference</h2>
                            <div className='radio_grp'>
                                <div>
                                    <input type={'radio'} id='usa' />
                                    <label for='usa'>Internet 2.0 USA</label>
                                </div>
                                <div>
                                    <input type={'radio'} id='dubai' checked />
                                    <label for='dubai'>Internet 2.0 Dubai</label>
                                </div>
                            </div>
                            <div className='input_grp'>
                                <input type={'text'} placeholder='Full name' />
                                <input type={'text'} placeholder='Email address' />
                                <input type={'text'} placeholder='Phone number' />
                                <input type={'text'} placeholder='Job title' />
                                <input type={'text'} placeholder='Company' />
                            </div>
                            <button>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
