import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Home(){
    const navegate = useNavigate();
    const toAbout = true;
    
    useEffect(()=>{

        if(toAbout){
            navegate('about');
        }
        
    },[toAbout]);

    return (
        <>
            <h1>Home</h1>
            <Link to='about' ><h1>About</h1></Link>
        </>
    )
}

export default Home;