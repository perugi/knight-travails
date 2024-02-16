# Knight Travails

This is a solution to a Knight Travails problem - the function `knightMoves([originX, originY], [destX, destY])` prints out the number and list of legal moves a knight must make on the chess board to get from the origin to the destination.

## Usage

```js
knightMoves([0, 0], [7, 7]);

// Prints out the following:
//    You made it in 6 moves! Here's your path:
//    [ 0, 0 ]
//    [ 2, 1 ]
//    [ 0, 2 ]
//    [ 2, 3 ]
//    [ 4, 4 ]
//    [ 6, 5 ]
//    [ 7, 7 ]
```

## 🛠️ Technologies, Tools, Design Approaches

- Chess board modeled as an unordered graph using an adjacency list, packaged in a ES6 Class.
- The adjacency list is an object, with keys representing the square coordinates and the values the array of adjacent vertices (squares on the board).
- The `knightMoves` function uses breadth-first search to find the shortest path between the origin and destination. It gets the array of adjacent squares from the board and stores them as a candidate move, with an array of the travelled path up to this point, in a queue. The moves are shifted from the queue and processed until the destination has been reached.
