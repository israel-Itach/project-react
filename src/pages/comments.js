import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';

function Commnent() {
    const {userId} = useParams();
    const[user , setUser] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${userId}/comments`)
            .then(res => res.json())
            .then(data => {setUser(data);  console.log(data,'l')})
          
    }, [userId])
console.log(user);

    return ( <div >
            <table>
                    <thead>
                    <tr>
                        <th>name</th>
                        <th>Email</th>
                        <th>Body</th>
                    </tr>
                    </thead>
                    <tbody>                 
                     {user && user.map((x, idx)=>  <tr key={idx}>
                        <td>{x.name}</td>
                        <td>{x.email}</td>
                        <td>{x.body}</td>
                         </tr>)}
                    
                </tbody>
            </table>

    </div> );
    
}
export default Commnent;