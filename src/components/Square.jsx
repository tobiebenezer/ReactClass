

function Square({value,onSquareClick}){
   
    return (
        <div className="square" onClick={onSquareClick} variant="secondary"  size="lg">
            <div>
                 {value}
            </div>
        </div>
    );

}

export default Square;