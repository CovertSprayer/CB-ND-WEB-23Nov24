import React from 'react'

const Event = () => {

  function clickHandler(e) {
    console.log(e)
    console.log("clicked")
  }
  
  return (
    <div>
      <h1>learning events</h1>

      {/* <button onClick={clickHandler}>click here</button> */}

      <button onClick={(e) => {clickHandler(e)}}>click here</button>
    </div>
  )
}

export default Event