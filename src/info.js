import {useEffect, useState} from 'react';
function Info() {
    const[user , setUser] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${localStorage.getItem('player')}`)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])

    console.log(user);
    return(
        <div>
            <br />
        <div style={{textAlign:'center',maxWidth:'40%',margin:'auto',backgroundColor:'lightblue',
    borderRadius:'10px',padding:'10px'}}>
            
                <h2>name : {user && user.name}</h2>
                <h2>username : {user && user.username}</h2>
                <h2>email : {user && user.email}</h2>
                <h2>address - <br />
                    street : {user && user.address.street} <br />
                    city : {user && user.address.city}</h2>
                <h2>phone:  {user && user.phone}</h2>
                <br />
                <h2>company : {user && user.company.name}</h2>
        </div>
        </div>

    )
}
export default Info;


// {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//     "street": "Kulas Light",
//     "suite": "Apt. 556",
//     "city": "Gwenborough",
//     "zipcode": "92998-3874",
//     "geo": {
//     "lat": "-37.3159",
//     "lng": "81.1496"
//     }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//     "name": "Romaguera-Crona",
//     "catchPhrase": "Multi-layered client-server neural-net",
//     "bs": "harness real-time e-markets"
//     }
//     },