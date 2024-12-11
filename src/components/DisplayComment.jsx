import React from 'react'
import Comment from './Comment'
import axios from 'axios'
import {useState, useEffect} from 'react'

const DisplayComment = () => {
    const [comments, setComments] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchComments = async () => {
            try{
                const response = await axios.get("https://ko5c1qpq92.execute-api.us-east-2.amazonaws.com/prod/get_comments?articleID=FunnyLogin")
                setComments(response.data.comments);
            } catch (err) {
                console.error("Error fetching comments:", error.response?.data || error.message);
            }
        };

        fetchComments();
    }, []);

    if (error) {
        return <p>Error: {error}</p>;
    }
    return (
        <div style={{display:"flex", alignItems:"flex-start", flexDirection: "column"}}>
            {comments.map((comment, index) => (
                <Comment name={comment.name} comment={comment.comment} />
            ))}
        </div>
    )
}

export default DisplayComment