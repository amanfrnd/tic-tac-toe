import React from 'react'

function Square(props) {

  return (
    <div className='square' onClick={props.onClick}>
        <h3>{props.data}</h3>
    </div>
  )
}

export default Square
