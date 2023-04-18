import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes,faO,faRotateRight } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button, Container } from "react-bootstrap";
import Square from "./Square";
import Header from "./Header";

function Board({xIsNext, squares, onPlay, calculateWinner  }){

    function handleClick(i){
        if(calculateWinner(squares) || squares[i]){
            return;
        }

        const nextSquares = squares.slice();

        if(xIsNext){
            nextSquares[i] = <FontAwesomeIcon className="text-success" icon={faTimes} size="xl" />;
        }
        
        if(!xIsNext){
            nextSquares[i] = <FontAwesomeIcon className="text-danger" icon={faO} size="xl" />;
        }
        onPlay(nextSquares)
    }

     const winner = calculateWinner(squares);

        let status;

        if (winner) {
            status =  'winner'+ winner;
        } else {
            status =  'Next Player: '+(xIsNext ? 'X' : 'O');
        }

    return <>
        <Container>
            <Header>{status}</Header>
            <Row>
                <Col>
                    <FontAwesomeIcon className="text-success" icon={faTimes} size="xl" />
                    <FontAwesomeIcon className="text-danger" icon={faO} size="xl" />
                </Col>
                <Col>
                    <Button>
                    <span className="no-wrap" > <FontAwesomeIcon className="text-white" icon={faTimes} size="xl" /> 
                        Turn </span>
                    </Button>
                </Col>
                <Col>
                    <Button variant="secondary" >
                        <FontAwesomeIcon icon={faRotateRight} />
                    </Button>
                </Col>
            </Row>

            <Row>
                <Col><Square value={squares[1]} onSquareClick={()=>(handleClick(1))}/></Col>
                <Col><Square value={squares[2]} onSquareClick={()=>(handleClick(2))}/></Col>
                <Col><Square value={squares[3]} onSquareClick={()=>(handleClick(3))}/></Col>
            </Row>

            <Row>
                <Col><Square value={squares[4]} onSquareClick={()=>(handleClick(4))}/></Col>
                <Col><Square value={squares[5]} onSquareClick={()=>(handleClick(5))}/></Col>
                <Col><Square value={squares[6]} onSquareClick={()=>(handleClick(6))}/></Col>
            </Row>
            
            <Row>
                <Col><Square value={squares[7]} onSquareClick={()=>(handleClick(7))}/></Col>
                <Col><Square value={squares[8]} onSquareClick={()=>(handleClick(8))}/></Col>
                <Col><Square value={squares[9]} onSquareClick={()=>(handleClick(9))}/></Col>
            </Row>
        
        </Container>
    </>
}

export default Board