import { Outlet, useNavigate, useParams } from "react-router-dom";
import React, {useEffect, useState} from 'react'
import './all.css';
function SinglePost() {
    const {userId} = useParams();
    const[user , setUser] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [userId])
console.log(userId);

    return ( 
         <>   
    <div style={{maxWidth:'60%',backgroundColor:'powderblue',
    textAlign:'center',margin:'auto',padding:'8px'}}>
    <h2>post {userId}</h2>
    <h3>{user && user.title}</h3>
    {/* <h3>{user && user.body}</h3> */}
    
    </div> 
    <br />
    <Outlet />
  <button className="btn" onClick={()=>{
    navigate('comments')
  }}>comments</button>
    </>    
    );
}

export default SinglePost;