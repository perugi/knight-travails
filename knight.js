const Board = require('./Board');

const board = new Board();

function knightMoves([originX, originY], [destX, destY]) {
  const moveQueue = [[originX, originY, [[originX, originY]]]];
  const visited = [];
  let foundPath;

  while (moveQueue.length > 0) {
    const [currentX, currentY, path] = moveQueue.shift();

    board.getAdjacentVertices(currentX, currentY).forEach(([moveX, moveY]) => {
      if (!visited.includes([moveX, moveY])) {
        moveQueue.push([moveX, moveY, [...path, [moveX, moveY]]]);
      }
    });

    if (currentX === destX && currentY === destY) {
      foundPath = path;
      break;
    }

    visited.push([currentX, currentY]);
  }

  if (foundPath) {
    console.log(
      `You made it in ${foundPath.length - 1} moves! Here's your path:`
    );
    foundPath.forEach((square) => {
      console.log(square);
    });
  } else {
    console.log('No path found!');
  }
}

knightMoves([0, 0], [3, 3]);
knightMoves([0, 0], [7, 7]);
