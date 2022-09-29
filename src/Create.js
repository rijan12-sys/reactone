import React from 'react';
import {Helmet} from 'react-helmet'
import { Link } from 'react-router-dom';
import Image from './Image';
import eventImage from "C:/Users/DELL/OneDrive/Desktop/practiseUX/onereact/src/eventImages.jpg"




const Create = function(){
    return(
        <div className='container'style={{marginTop:'10%'}}>
            
            <div className='row'>
            <Helmet> <style>{'body { background-color: #F6F2FF; }'}</style></Helmet>

          
                <div className='col-sm-6 colmd-6 col-sm-6'>
                <div >
                        <form action="" className='form'>
                            <label htmlFor="eventName" className='mt-5 ' style={{fontSize:"30px"}}>Event Name:</label>
                            <input className = "form-control"id = "eventName "type="text" required placeholder='Enter event name'/>
                            <label htmlFor="hostName" className='mt-5'style={{fontSize:"30px"}}>Host Name:</label>
                            <input className = "form-control"id = "hostName "type="text" required placeholder='Enter host name'/>
                            <label htmlFor="startDate" className='mt-5'style={{fontSize:"27px"}}>Start time:- </label>
                            <input  type="time" id="appt" name="appt" min="09:00" max="18:00" required />
                            <label htmlFor="startDate" style={{fontSize:"27px"}}>End time:- </label>
                            <input type="time" id="appt" name="appt" min="09:00" max="18:00" required />
                            <Link to = "/event"><button className='btn btn-primary form-control mt-5'>Next</button></Link>
                        </form>
                    </div>
                </div>
                <div className='col-sm-6 col-lg-6 col-md-6'>
                <Image className="img-fluid mt-5" picOne= {eventImage}/>


                
                </div>
           
            </div>
        </div>
      
    )
}
export default Create;