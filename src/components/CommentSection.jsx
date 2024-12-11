import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import DisplayComment from './DisplayComment'

const CommentSection = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [comment, setComment] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page reload

        // create comment
        const postComment = {
                                articleID: "FunnyLogin",
                                name: name,
                                email: email,
                                comment: comment
                            };
        
        // do post request                            
        axios.post('https://ko5c1qpq92.execute-api.us-east-2.amazonaws.com/prod/add_comment', 
                    postComment, 
                    {headers: {'Content-Type': 'application/json'}})
                    .then(response => console.log("Response:", response.status))
                    .catch(error => console.error("Error:", error));

        // clear fields
        setName('');
        setEmail('');
        setComment('');

        // Reload the page to fetch updated comments
        window.location.reload(); 
    }



    return (
        <div className="comment-section">
            <DisplayComment/>
            <div>
                <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                    <input type="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="comment-name" placeholder="name" required></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="comment-email" placeholder="name@example.com" required></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Comment</label>
                    <textarea value={comment} onChange={(e) => setComment(e.target.value)} className="form-control" id="comment-text" rows="3" required></textarea>
                </div>
                <button type="submit" className="btn btn-outline-dark">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CommentSection