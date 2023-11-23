import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DataFetching() {
    const [post, setPost] = useState({}); // Provide an initial state value of an empty array
    const[id,setId] = useState(1)
    const[idBtnClk,setIdBtnClick]= useState(1)
    
    const handleClick =()=>{
        setIdBtnClick(id)
    }
    
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                console.log(res);
                setPost(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, [idBtnClk]);

    return (
        <div>
        <input type='text' value={id} onChange={e => setId(e.target.value)}/>
        <button type='button' onClick={handleClick}>Fetch Posts</button>
        <div>{post.title}</div>
            {/* <ul> 
                {post.map(post => (<li key={post.id}>{post.title}</li>))}
            </ul> */}
        </div>
    );
}

export default DataFetching;
