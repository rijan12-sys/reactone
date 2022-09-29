import React from 'react';
import {Helmet} from 'react-helmet'
import { Link } from 'react-router-dom';
import Image from './Image';
import Button from './Button';
import landing from "C:/Users/DELL/OneDrive/Desktop/practiseUX/onereact/src/Landing.svg"


const Home = function(){

    return(
        <div className = "homeContent container">
            <div className = "row">
                <Helmet> <style>{'body { background-color: #F6F2FF; }'}</style></Helmet>
                <div className='col-sm-5 col-md-5 col-lg-5 '>
                    <div className='imagePic'>
                        <Image picOne= {landing}/>

                    </div>
                </div>
                <div className='col-md-7 col-sm-7 col-lg-7'>
                    <div className='homePagecontent'>
                        <p className='firstLine'>Imagine if</p>
                        <p className='secondLine'>Snapchat</p>
                        <p className='thirdLine'>had events.</p>
                        <p className='homeText'>Easily host and share events with your friends <br /> across any social media. </p>
                        <Link to="/Create"><Button className= "btnLanding" btnContent = "Create my event"/></Link> 
                    </div>
                </div>
            </div>
            
           
                

        </div>
    )
}
export default Home;