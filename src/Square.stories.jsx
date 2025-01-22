import Square from "./Square";
export default {
  title: 'TicTacToe/Square',
  component: Square,
  parameters: {
    layout: 'centered',
  },
};

export const Empty = {
  args: {
    value: null,
    onClick: () => console.log('clicked'),
  },
};

export const WithX = {
  args: {
    value: 'X',
    onClick: () => console.log('clicked'),
  },
};

export const WithO = {
  args: {
    value: 'O',
    onClick: () => console.log('clicked'),
  },
}; 