import React from 'react';
const Button = function(props){
    return(
        <div>
            <button className = {props.className}> {props.btnContent}</button>

        </div>
    )
}
export default Button;