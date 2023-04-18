import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Board from './components/Board';
import { useState } from 'react';
import { Button, ListGroup } from 'react-bootstrap';

function App1() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [count, setCount] = useState(0)
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove %2 === 0;
  const currentSquares = history[currentMove];

  const handleClick = function(){
    setCount(count+1);
  }
 
  function handlePlay(nextSquares){
    const nextHistory = [...history.slice(0,currentMove + 1),nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove){
    setCurrentMove(nextMove);
  }

  function calculateWinner(squares){

    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [1,4,7],
      [0,4,8],
      [2,4,6],
      [2,5,8],
      [0,3,6],
    ];

    for(let i = 0; i < lines.length; i++){
      const [a,b,c] = lines[i];
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
        
        return squares[a];
      }
    }
    return null;
  }

  const moves = history.map((squares,move)=>{
    
      let description;
      if(move > 0){
        description = 'Go to move #' + move;
      }else{
        description = 'Go to game Start';
      }

      return(
        <li key={move}>
          <ListGroup.Item onClick={()=> jumpTo(move)}>{description}</ListGroup.Item>
        </li>
      );
    
  });

  return (
    <>
      <div class="bg-full" >
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} calculateWinner ={calculateWinner} />
        <ListGroup>
          {moves}
        </ListGroup>
      </div>
      <div>{count}</div>
      <Button onClick={handleClick} >Add to Count</Button>
    </>
  );
}

export default App1;
