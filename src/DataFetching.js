import React, { useEffect, useState } from 'react'
import axios from 'axios'

const DataFetching = () => {
    const [post,setPost] = useState({})
    const [id,setId] = useState(1)
    const [idButtonClickEvent , setButtonClickEvent] = useState(1)
    const clickHandler= () =>{
        setButtonClickEvent(id)
    }
    useEffect(() =>{
        axios.get(`https://fakestoreapi.com/products/${idButtonClickEvent}`)
        .then(res=>{
            console.log(res)
            setPost(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[idButtonClickEvent])
  return (
    <div>
        <input type="text" value={id} onChange={e => setId(e.target.value)}/>
        <div>{post.title}</div>
        <button type="button" onClick={clickHandler}>Fetch Post</button>
        {/* <ul>
            {
                posts.map(post =><li key={post.id}>{post.title}</li>)
            }
        </ul> */}
    </div>
  )
}

export default DataFetching