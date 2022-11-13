import {useEffect, useState} from 'react';
import {NavLink, Outlet} from 'react-router-dom'
import './all.css';
function Posts() {
    const[user , setUser] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])
    console.log(user);
    const users = user.filter(i => i.userId === JSON.parse(localStorage.getItem('player')))
 console.log(users);

    return ( 
        <div>
            <br />
            <h2 style={{textAlign:'center'}}>  posts is : </h2>
            
            <table style={{textAlign:'center',maxWidth:'50%',margin:'auto'}}>
                <tbody >
            {users && users.map((x, idx)=> <tr  key={idx}><td><NavLink to={`${x.id}`}>{x.title}</NavLink></td></tr>)}
            </tbody>
            </table>
            <br />  <br />
            <Outlet />
        </div>
     );
}

export default Posts;