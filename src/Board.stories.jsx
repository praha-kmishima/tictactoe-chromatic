import Board from "./Board";

export default {
  title: 'TicTacToe/Board',
  component: Board,
  parameters: {
    layout: 'centered',
  },
};

export const EmptyBoard = {
  args: {
    xisNext: true,
    squares: Array(9).fill(null),
    onPlay: () => console.log('played'),
  },
};

export const InProgress = {
  args: {
    xisNext: false,
    squares: ['X', 'O', 'X', null, 'O', null, null, null, null],
    onPlay: () => console.log('played'),
  },
}; 

export const AllTriangles = {
  args: {
    xisNext: false,
    squares: ['△', '△', '△', '△', '△', '△', '△', '△', '△'],
    onPlay: () => console.log('played'),
  },
}; 