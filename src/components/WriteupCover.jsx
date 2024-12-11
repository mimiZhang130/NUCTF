import React from 'react'
import { useNavigate } from 'react-router-dom';

const WriteupCover = ({title, tags}) => {
    const navigate = useNavigate();
    return (
        <button className="writeup-button" onClick={() => {navigate('/writeups/' + title)}}>
            <h3>{title + " Writeup"}</h3>
            <div className="writeup-tags">
                {tags.map((tag, index) => (
                    <span className="writeup-tag">{tag}</span>
                ))}
            </div>
        </button>
    )
}

export default WriteupCover