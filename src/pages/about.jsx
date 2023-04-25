
import { useContext } from "react";
import { Link } from "react-router-dom";
import List from "../components/about/List";
import TodoContext from "../context/TodoContext";


function About(){
    const {todo} = useContext(TodoContext)
    console.log(todo);
    return (
    <>
      
        <List names={todo} />
       
    </>
    )
}

export default About;