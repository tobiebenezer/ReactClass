import { ListGroup } from "react-bootstrap";
import { PropTypes } from "prop-types";
import Item from "./Item";

function List({names}){
    console.log(names);
    return (
        <ListGroup>
            { names.map((ele)=>(
              <Item key={ele.id} name={ele.title} />
            ))}
        </ListGroup>
    )
}

List.defaultProp={
    names: []
}

List.propTypes ={
    names: PropTypes.array,
}

export default List;