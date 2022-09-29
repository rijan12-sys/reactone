import React from 'react';
import {BsFillCalendar2RangeFill} from "react-icons/bs"
import {MdLocationOn} from "react-icons/md";
import Image from './Image';
import birthday from "C:/Users/DELL/OneDrive/Desktop/practiseUX/onereact/src/Birthday.png"

const Event = function(){
    return(
    
            <div className='container eventPage '>
                <div className='row'>
                    <div className='col-md-6 col-sm-6 col-lg-6'>
                        <p className='textBash'>Birthday Bash</p>
                        <span className='hosttext'>Hosted by Elysla</span>
                        <div>
                            <span><BsFillCalendar2RangeFill  className = "mt-5"style = {{fontSize:"50px"}}/></span><br />
                            <div className='dateClass'>18 August 6:00PM to <br/>19 August 1:00PM UTC+10</div><br />

                        </div>
                        <div>
                            <span><MdLocationOn className = "mt-5"style = {{fontSize:"55px"}}/></span><br />
                            <div className='locationClass'>Street name <br/>Suburb, State,Postcode</div><br />

                        </div>
                       
                    </div> 
                    <div className='col-sm-6 col-lg-6 col-md-6'>
                        <div className='birthdayImage'>
                        <Image className = "img-fluid" picOne= {birthday}/>
                        </div>

                    </div>

                </div>

            </div>
 

    )
}
export default Event;