import React, { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
function Albums() {
  const [user, setUser] = useState([])
  const {albumId} = useParams()
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(res => res.json())
      .then(data => setUser(data))
  }, [])
  // console.log(user);
  const users = user.filter(i => i.userId === JSON.parse(localStorage.getItem('player')))
  // console.log(users);

  return (
    <> 
       <div style={{ textAlign: 'center', maxWidth: '27%', margin: 'auto' }}>
      <br />
      
      <h1>albums</h1>
          {users && users.map((x, idx) => <tr key={idx}><td><Link to={`${x.id}`}>{x.title}</Link></td></tr>)}
      
      <Outlet />
    </div>
    </>
  
  );
}

export default Albums;