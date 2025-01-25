import Square from "./Square";

export default function Board({ xisNext, squares, onPlay }) {
    const winner = calculateWinner(squares);
    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = "Next Player: " + (xisNext ? 'X' : 'O');
    }
  
    function handleClick(i) {
      if(squares[i] || calculateWinner(squares)) {
        return;
      }
  
      const nextSquares = squares.slice();
      if (xisNext){
        nextSquares[i] = 'X';
      } else {
        nextSquares[i] = 'O';
      }
      onPlay(nextSquares)
    }
  
    return (
      <> 
        <div className="status">{status}</div>
        <div className="board-row">
          <Square value={squares[0]} onClick={() => handleClick(0)}/>
          <Square value={squares[1]} onClick={() => handleClick(1)} />
          <Square value={squares[2]} onClick={() => handleClick(2)} />
          <Square value={squares[3]} onClick={() => handleClick(3)} />
        </div>
        <div className="board-row">
          <Square value={squares[4]} onClick={() => handleClick(4)} />
          <Square value={squares[5]} onClick={() => handleClick(5)} />
          <Square value={squares[6]} onClick={() => handleClick(6)} />
          <Square value={squares[7]} onClick={() => handleClick(7)} />
        </div>
        <div className="board-row">
          <Square value={squares[8]} onClick={() => handleClick(8)} />
          <Square value={squares[9]} onClick={() => handleClick(9)} />
          <Square value={squares[10]} onClick={() => handleClick(10)} />
          <Square value={squares[11]} onClick={() => handleClick(11)} />
        </div>
      </>
  )
  }

  function calculateWinner(squares){
    const lines = [
      // 横のライン
      [0, 1, 2, 3],
      [4, 5, 6, 7],
      [8, 9, 10, 11],
      // 縦のライン
      [0, 4, 8],
      [1, 5, 9],
      [2, 6, 10],
      [3, 7, 11],
    ];
    for (let i = 0; i < lines.length; i++){
      const line = lines[i];
      if (line.length === 4) {
        // 横のライン（4つ揃い）
        if (squares[line[0]] && squares[line[0]] === squares[line[1]] && 
            squares[line[0]] === squares[line[2]] && squares[line[0]] === squares[line[3]]) {
          return squares[line[0]];
        }
      } else {
        // 縦のライン（3つ揃い）
        if (squares[line[0]] && squares[line[0]] === squares[line[1]] && 
            squares[line[0]] === squares[line[2]]) {
          return squares[line[0]];
        }
      }
    }
    return null;
  }

