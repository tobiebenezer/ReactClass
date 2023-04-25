import { useContext} from "react";
import { Button } from "react-bootstrap";
import { Link} from "react-router-dom";
import TodoContext from "../context/TodoContext";

function Home(){
    const {updateTodo} = useContext(TodoContext)
    return (
        <>
            <h1>Home</h1>
            <Link to='about' ><h1>About</h1></Link>
            <Button onClick={()=>updateTodo(3)}>Update Todo</Button>
        </>

    )
}

export default Home;