import React from 'react'

const Comment = ({name, comment}) => {
  return (
    <div>
        <strong><p style={{margin: "0"}}>{name}</p></strong>
        <p style={{fontSize: "1rem"}}>{comment}</p>
        <hr></hr>
    </div>
  )
}

export default Comment