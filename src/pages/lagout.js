import {  useNavigate } from "react-router-dom";


function Lagout() {

const navi = useNavigate();

    return (    
        navi('/login')
    );
}
export default Lagout;