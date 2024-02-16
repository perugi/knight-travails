const POSSIBLE_MOVES = [
  [-2, -1],
  [-2, 1],
  [2, -1],
  [2, 1],
  [-1, -2],
  [-1, 2],
  [1, -2],
  [1, 2],
];

const BOARD_SIZE = 8;

class Board {
  vertices;

  constructor() {
    this.vertices = {};

    for (let i = 0; i < BOARD_SIZE; i++) {
      for (let j = 0; j < BOARD_SIZE; j++) {
        this.vertices[`${i},${j}`] = [];
        POSSIBLE_MOVES.forEach(([moveX, moveY]) => {
          // Check if a move is legal, if it is, add it to the array of adjacent vertices.
          if (
            i + moveX >= 0 &&
            i + moveX < BOARD_SIZE &&
            j + moveY >= 0 &&
            j + moveY < BOARD_SIZE
          ) {
            this.vertices[`${i},${j}`].push([i + moveX, j + moveY]);
          }
        });
      }
    }
  }

  getAdjacentVertices(x, y) {
    return this.vertices[`${x},${y}`];
  }
}

module.exports = Board;
