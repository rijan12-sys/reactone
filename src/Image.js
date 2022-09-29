import React from 'react';
const Image = function(props){
    return(
        <div>
            <img src = {props.picOne} className = {props.className}></img>

        </div>
    )
}
export default Image;