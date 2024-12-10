import React from 'react'

const Writeup = ({title, date, source}) => {

  return (
    <div>
        <h4 style={{margin: "2rem 5rem 0 5rem"}}><a className="invisible-link" href="javascript:history.back()">{"<"} Back</a></h4>
        <div style={{display:"flex", alignItems:"center", flexDirection: "column"}}>
            <h1 style={{margin: "0 2rem"}}>{title}</h1>
            <p>Last Updated: {date}</p>
            <iframe height="600rem" className="writeup-pdf-display" allowFullScreen loading="lazy" src={source}></iframe>
        </div>
    </div>
    
  )
}

export default Writeup