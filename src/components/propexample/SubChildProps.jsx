import React from 'react'

const SubChildProps=(props)=> {
    console.log(props);
  return (
    <div>SubChildProps
        <h2>{props.child1}</h2>
        <h2>{props.child2}</h2>
       
    </div>
  )
}
export default SubChildProps