import React from 'react';
import './BookTicket.css';
import { Button } from 'react-bootstrap';

export default function BookTicket() {
    return (
        <div className='bookTicket'>
            <div className='MsgBookTicket'>
                <p>Don't miss out. Prices Increase by $150 in</p>
            </div>
            <div className='offerTiming'>
                <div className='offerDays'>
                    <p className='offerTime'>DAYS</p>
                    <div className='dateTime'>
                        <h1>02</h1>
                    </div>
                </div>
                 <div className='offerHours'>
                    <p className='offerTime' >HOURS</p>
                    <div className='dateTime'>
                        <h1>22</h1>
                    </div>
                </div>
                <div className='offerMinutes'>
                    <p className='offerTime' >MINUTES</p>
                    <div className='dateTime'>
                        <h1>08</h1>
                    </div>
                </div>
                 <div className='offerSeconds'>
                    <p className='offerTime' >SECONDS</p>
                    <div className='dateTime'>
                        <h1>19</h1>
                    </div>
                </div>
            </div>
            <div className='bookTicketBtn'>
               <Button className='submitBtn' variant="primary">BOOK TICKET FOR 2023</Button>
            </div>
        </div>
    )
}
