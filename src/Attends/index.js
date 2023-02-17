import React from 'react'
import './attends.css';
import img1 from '../Images/img1.png';
import img2 from '../Images/img2.png';
import img3 from '../Images/img3.png';
import img4 from '../Images/img4.png';
import img5 from '../Images/img5.png';
import img6 from '../Images/img6.png';
import img7 from '../Images/img7.png';
import img8 from '../Images/img8.png';
import img9 from '../Images/img9.png';
import img10 from '../Images/img10.png';
import img11 from '../Images/img11.png';
import img12 from '../Images/img12.png';

export default function Attends() {
    return (
        <div className='attend-header'>
            <div className='container'>
                <h1 className='attend-head'>Who Attends?</h1>
                <div className='attend-images'>
                    <div>
                        <div className='img_div'><img src={img1} /></div>
                        <h4 className='text-heading'>SaaS Companies</h4>
                        <p>Accelerate your Saas business by growing your wealth of contacts and learning new strategies to enhance profit margins.</p>
                    </div>
                    <div>
                        <div className='img_div'><img src={img2} /></div>
                        <h4 className='text-heading'>loT Companies</h4>
                        <p>Know about the latest innovations happening in the realm of the Internet of Things and meet with the key players in the industry.</p>
                    </div>
                    <div>

                        <div className='img_div'> <img src={img3} /></div>
                        <h4 className='text-heading'>E-Commerce Companies</h4>
                        <p>Get an in-depth look at the biggest trends driving the e-commerce boom and find vendors who can help you grow your business.</p>
                    </div>
                </div>
                <div className='attend-images'>
                    <div>
                        <div className='img_div'><img src={img4} /></div>
                        <h4 className='text-heading'>AI & ML Technology Companies</h4>
                        <p>Understand how you can leverage emerging AI & ML technologies to streamline business operations and boost customer satisfaction.</p>
                    </div>
                    <div>
                        <div className='img_div'><img src={img5} /></div>
                        <h4 className='text-heading'>Blockchain Companies</h4>
                        <p>Being among the top internet conferences, leaders in the field of blockchain will convene at our event and brainstorm on groundbreaking developments as well as their impact.</p>
                    </div>
                    <div>
                        <div className='img_div'><img src={img6} /></div>
                        <h4 className='text-heading'>Cloud Computing Experts</h4>
                        <p>Internet 2.0 Conference will withness C-level executives talk about how cloud computing can change the way we work, do business, and connect with each other.</p>
                    </div>
                </div>
                <div className='attend-images'>
                    <div>
                        <div className='img_div'><img src={img7} /></div>
                        <h4 className='text-heading'>App Development Start-Ups</h4>
                        <p>Internet 2.0 conference will play host to innovators and some of the best app developers of the world who are behind the most creative and incredible application.</p>
                    </div>
                    <div>
                        <div className='img_div'><img src={img8} /></div>
                        <h4 className='text-heading'>Marketing & Advertising professionals</h4>
                        <p>Leverage our unique platform to learn about marketing and promotional strategies used by top brands and leave an impression on your target audience.</p>
                    </div>
                    <div>
                        <div className='img_div'><img src={img9} /></div>
                        <h4 className='text-heading'>Investors</h4>
                        <p>As an acclaimed tech conference that will be held in the USA and the UAE, Internet 2.0 Conference will invite well-known investors and venture capitalists who are on the lookout for solid ideas and investment opportunities.</p>
                    </div>
                </div>
                <div className='attend-images'>
                    <div>
                        <div className='img_div'><img src={img10} /></div>
                        <h4 className='text-heading'>Robotics Pioneers</h4>
                        <p>The Internet 2.0 Conference will witness a confluence of robotics experts & engineers whose cutting-edge solution have been embraced by crucial industries such as health, education, and manufacturing, to name a few.</p>
                    </div>
                    <div>
                        <div className='img_div'><img src={img11} /></div>
                        <h4 className='text-heading'>Gamification Consultants</h4>
                        <p>Gamification has proven to drive customer engagement and maximize employee efficiency. At our conference, top companies will get the opportunity to learn and interact with gamification consultants.</p>
                    </div>
                    <div>
                        <div className='img_div'><img src={img12} /></div>
                        <h4 className='text-heading'>FinTech Companies</h4>
                        <p>Meet with finance geniuses who have made traditional financial services (bill payments, investments, savings, etc.) more accessible, affordable, and convenient by leveraging new technologies.</p>
                    </div>
                </div>
            </div>
        </div>

    )
}
