import { NavLink, Outlet, useNavigate} from "react-router-dom";
function Home() {
    const navigete = useNavigate()
    const name = JSON.parse(localStorage.getItem('data'))
    const username = name?.name;

    return ( 
        <>
        {!username && navigete('login')}
<div > 
 <h1 style={{width:'100%',backgroundColor:'slateblue',textAlign:'center'}}>Welcome, {username}</h1>
        <nav style={{textAlign:'center'}}>
            <NavLink className='btn' to="info">Info</NavLink>{" | "}
            <NavLink className='btn' to={'todus'}>Todus</NavLink>{" | "}
            <NavLink className='btn' to={'posts'}>Posts</NavLink>{" | "}
            <NavLink className='btn' to={'albums'}>Albums</NavLink>{" | "}
            <NavLink className='btr' to='login'>Lagout</NavLink>
        </nav>
        </div>
        <Outlet/>
         </>
     );
}

export default Home;