import {useState} from 'react'


function Square({value, onSquareClick}){
  return (  
  <button className='square'
  onClick={onSquareClick}>
    {value}
  </button>
  );
}

function CalculateWinner(squares) {
    const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
for (let i =0;i<lines.length;i++){
  const [a, b, c] = lines[i]
if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
  return squares[a];
}
}
return null;
}

function Board({isNext, squares, onPlay}) {
  function HandleClick(i){
    if (CalculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (isNext) {
      nextSquares[i] = 'X';    
    }else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares)
  }  
  const winner = CalculateWinner(squares);
  let statoos;
  if (winner){
    statoos = "Winner:" + winner;
  }
  else{
    statoos = "Next player is: " + (isNext ?'X':'O');
  }
  return (
    <>
    <div className='status'>
      <label>{statoos}</label>
    </div>
    <div className='boardRow'>
      <Square value={squares[0]} onSquareClick={() => HandleClick(0)}/>
      <Square value={squares[1]} onSquareClick={() => HandleClick(1)}/>
      <Square value={squares[2]} onSquareClick={() => HandleClick(2)}/>
        </div>
    <div className='boardRow'>
      <Square value={squares[3]} onSquareClick={() =>HandleClick(3)}/>
      <Square value={squares[4]} onSquareClick={() =>HandleClick(4)}/>
      <Square value={squares[5]} onSquareClick={() =>HandleClick(5)}/>
        </div>
    <div className='boardRow'>
      <Square value={squares[6]} onSquareClick={() =>HandleClick(6)}/>
      <Square value={squares[7]} onSquareClick={() =>HandleClick(7)}/>
      <Square value={squares[8]} onSquareClick={() =>HandleClick(8)}/>
    </div>
    </>
  );
}

function GameLogic() {
  const [history, setNextHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];
  const isNext = currentMove % 2 === 0;

  function JumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  function HandlePlay(squares) {
    const nextHistory = [...history.slice(0, currentMove + 1), squares];
    setNextHistory(nextHistory);
    setCurrentMove(nextHistory.length -1)
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move>0){
      description = "Go to move #" + move;
    }
    else {
      description = "Game Start";
    }
    return (
      <li key={move}>
        <button onClick={() => JumpTo(move)}>
          {description}
        </button>
      </li>
    )
  });
  return (
    <>
      <Board isNext={isNext} squares={currentSquares} onPlay={HandlePlay} />
      <div>
        <ol>{moves}</ol>
      </div>
    </>
  );
}

function Game() {
  return <GameLogic/>;
}

export default Game