import { useState , useEffect } from "react";

function Todus() {
  
    const[user , setUser] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])
    console.log(user);
 const users = user.filter(i => i.userId === JSON.parse(localStorage.getItem('player')))
 console.log(users);
      const changeHandler=(e)=>{
const key = e.target.value;
switch (key) {
    case 'complet':
        setUser([...user].sort((x, y)=>
        x.complet > y.complet ? 1 : -1 ,
        ))
        break;
    case 'abc':
        setUser([...user].sort((x, y)=>
        x.title > y.title ? 1 : -1 ,
        ))
        break;
    case 'random':
        setUser([...user].sort((x, y)=>
        Math.random() >0.5 ? 1 : -1 ,
        ))
        break;
    case 'order':
        setUser([...user].sort((x, y)=>
        x.id > y.id ? 1 : -1 ,
        ))
        break;
    default:
       
        break;
}
         }
    return ( 
        <>
        <div style={{textAlign:'center',maxWidth:'40%',margin:'auto'}} >
        <br />
        <h2 style={{textAlign:'center'}}>list to du :</h2>
        <select name="" id="" onChange={changeHandler}>
            <option value="">select The order</option>
            <option value="complet">complet</option>
            <option value="abc">abc</option>
            <option value="random">random</option>
            <option value="order">order</option>
        </select>
        <br />
       <br />
        {users && users.map((x, idx)=> <tr key={idx}><input type='checkbox' checked={x.completed} /><td>{x.title}</td></tr> )}
        </div>
        </>
     );
}

export default Todus;