import React from 'react'

const PropsChildrenex=(props)=> {
    console.log(props);
  return (
    <div>
       <h1> {props.username}</h1>
       <h1> {props.company}</h1>
       {
        props.children
       }
    </div>
  )
}

export default PropsChildrenex