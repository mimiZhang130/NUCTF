import React from 'react'

const Comment = ({name, comment, timestamp}) => {
  return (
    <div id={timestamp}>
        <strong><p style={{fontSize: "1.4rem", margin: "0"}}>{name}</p></strong>
        <small>{new Date(parseInt(timestamp) * 1000).toLocaleString()}</small>
        <p>{comment}</p>
        <hr></hr>
    </div>
  )
}

export default Comment