import React from 'react'
import './Conference-2.0.css';
import img39 from '../Images/img39.png';
import img40 from '../Images/img40.png';
import img41 from '../Images/img41.png';
import img42 from '../Images/img42.png';
import img43 from '../Images/img43.png';
import img44 from '../Images/img44.png';
import img45 from '../Images/img45.png';
import img46 from '../Images/img46.png';
import img47 from '../Images/img47.png';
import img48 from '../Images/img48.png';
import img49 from '../Images/img49.png';
import img50 from '../Images/img50.png';
import img51 from '../Images/img51.png';
import img52 from '../Images/img52.png';
import img53 from '../Images/img53.png';
import img54 from '../Images/img54.png';
import img55 from '../Images/img55.png';

export default function Conference() {
    return (
        <>
            <div className='conference-2'>
                <div>
                    <div className="sponsers-div">
                        <h4>Internet 2.0 Conference - Sponsors</h4>
                        <p><span className='img-style'>Platinum</span> Sponsors</p>
                        <div className='conference'>
                            <div className="sponser-img">
                                <img className='conference-img' src={img39} />
                            </div>
                            <div className="sponser-img">
                                <img className='conference-img' src={img40} />
                            </div>
                            <div className="sponser-img">
                                <img className='conference-img' src={img41} />
                            </div>

                        </div>
                        <p><span className='img-style'>Gold</span> Sponsors</p>
                        <div className='conference'>
                            <div className="sponser-img">
                                <img className='conference-img' src={img42} />
                            </div>
                            <div className="sponser-img">
                                <img className='conference-img' src={img43} />
                            </div>

                        </div>
                        <p><span className='img-style'>Silver</span> Sponsors</p>
                        <div className='conference'>
                            <div className="sponser-img">
                                <img className='conference-img' src={img44} />
                            </div>
                            <div className="sponser-img">
                                <img className='conference-img' src={img45} />
                            </div>
                            <div className="sponser-img">
                                <img className='conference-img' src={img46} />
                            </div>

                        </div>
                    </div>

                </div>
                <div className="sponsers">
                <h4>Internet 2.0 Conference - Sponsors</h4>
                <p><span className='img-style'>Media</span> Partners</p>
                    <div className='conference'>
                        <div className="sponser-img">
                            <img className='conference-img' src={img47} />
                        </div>
                        <div className="sponser-img">
                            <img className='conference-img' src={img48} />
                        </div>
                        <div className="sponser-img">
                            <img className='conference-img' src={img49} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='exibitors'>
                <div className="exibitors-img">
                    <div className="exibitors-img-1">
                     <h4>Internet 2.0 Conference - Exibitors</h4>
                        <h6>Here glance some of the top brand that have show cased their products and tech-driven solutions</h6>
                    </div>
                    <div className="exibitors-img-2">
                        <p><span className='img-style'>Advanced</span> Exibitors</p>
                        <div className='conference2'>
                            <div className="sponser-img">
                                <img className='conference-img' src={img50} />
                            </div>
                            <div className="sponser-img">
                                <img className='conference-img' src={img51} />
                            </div>
                            <div className="sponser-img">
                                <img className='conference-img' src={img55} />
                            </div>
                        </div>
                        <p><span className='img-style'>Starter</span>Exibitors</p>
                        <div className='conference'>
                            <div className="sponser-img">
                                <img className='conference-img' src={img52} />
                            </div>
                            <div className="sponser-img">
                                <img className='conference-img' src={img53} />
                            </div>
                            <div className="sponser-img">
                                <img className='conference-img' src={img54} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
