import React from 'react';
import "./myStyles.css"

const FuctionalComponent = (props) => {
    let applyStyle = props.apply ? 'heding':''
    console.log(props)
    let inlineStyle = {
        color:'red',
        fontSize:'100px'
    }
    return (
        <div class='app'>
        	<h1 className={`${applyStyle} font-style`}>Welcome to the REACT, {props.clg}, {props.city}</h1>
        	<h2 style={inlineStyle}>Good Morning!</h2> 
        </div>
    );
};

export default FuctionalComponent;