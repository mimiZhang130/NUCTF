import React from 'react'

const Writeup = ({title, date, source}) => {

  return (
    <div>
        <h4 style={{margin: "2rem 5rem 0 5rem"}}><a className="invisible-link" href="javascript:history.back()">{"<"} Back</a></h4>
        <div style={{display:"flex", alignItems:"center", flexDirection: "column", margin: "0rem 5rem"}}>
            <h1 style={{margin: "0 2rem"}}>{title}</h1>
            <p>Last Updated: {date}</p>
            <object className="pdf" 
                data={source} width="70%" height="600rem" style={{border:"solid .2rem var(--secondary-color)"}}>
            </object>
        </div>
    </div>
    
  )
}

export default Writeup