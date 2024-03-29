const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const sudoku = [
                [
                  [5,3,0,0,7,0,0,0,0],
                  [6,0,0,1,9,5,0,0,0],
                  [0,9,8,0,0,0,0,6,0],
                  [8,0,0,0,6,0,0,0,3],
                  [4,0,0,8,0,3,0,0,1],
                  [7,0,0,0,2,0,0,0,6],
                  [0,6,0,0,0,0,2,8,0],
                  [0,0,0,4,1,9,0,0,5],
                  [0,0,0,0,8,0,0,7,9]
                ],
                [
                  [4,0,0,0,0,0,0,0,0],
                  [0,0,3,0,0,5,0,1,0],
                  [0,2,0,6,0,0,4,9,0],
                  [0,0,5,0,0,4,0,3,0],
                  [0,0,0,0,0,0,9,0,0],
                  [0,1,0,9,0,0,0,0,2],
                  [0,0,6,0,8,0,0,5,4],
                  [0,8,7,5,0,0,1,0,9],
                  [0,0,0,0,0,9,7,6,0]
                ],
                [
                  [0,6,0,0,0,9,0,7,0],
                  [5,0,0,0,0,0,0,1,6],
                  [0,0,1,0,3,0,4,0,0],
                  [1,0,0,0,6,0,0,0,4],
                  [0,0,2,1,0,4,3,0,0],
                  [6,0,0,0,5,0,0,0,2],
                  [0,0,6,0,8,0,2,0,0],
                  [2,7,0,0,0,0,0,0,5],
                  [0,8,0,3,0,0,0,4,0]
                ],
                [
                  [4,0,6,3,8,0,0,2,0],
                  [5,0,3,4,0,7,0,0,0],
                  [0,0,0,9,0,0,8,4,3],
                  [2,3,0,0,1,0,9,0,0],
                  [0,4,0,0,0,0,5,7,1],
                  [0,5,0,6,4,7,0,0,0],
                  [9,0,1,4,0,8,3,0,0],
                  [0,6,4,0,0,0,0,0,7],
                  [8,0,5,1,0,3,0,9,2]
                ],
                [
                  [3,0,0,2,4,0,0,6,0],
                  [0,4,0,0,0,0,0,5,3],
                  [1,8,9,6,3,5,4,0,0],
                  [0,0,0,0,8,0,2,0,0],
                  [0,0,7,4,9,6,8,0,1],
                  [8,9,3,1,5,0,6,0,4],
                  [0,0,1,9,2,0,5,0,0],
                  [2,0,0,3,0,0,7,4,0],
                  [9,6,0,5,0,0,3,0,2]
                ],
                [
                  [0,0,0,0,0,0,0,0,0],
                  [0,9,3,6,2,8,1,4,0],
                  [0,6,0,0,0,0,0,5,0],
                  [0,3,0,0,1,0,0,9,0],
                  [0,5,0,8,0,2,0,7,0],
                  [0,4,0,0,7,0,0,6,0],
                  [0,8,0,0,0,0,0,3,0],
                  [0,1,7,5,9,3,4,2,0],
                  [0,0,0,0,0,0,0,0,0]
                ],
                [
                  [7,0,0,1,0,8,0,0,0],
                  [0,9,0,0,0,0,0,3,2],
                  [0,0,0,0,0,5,0,0,0],
                  [0,0,0,0,0,0,1,0,0],
                  [9,6,0,0,2,0,0,0,0],
                  [0,0,0,0,0,0,8,0,0],
                  [0,0,0,0,0,0,0,0,0],
                  [0,0,5,0,0,1,0,0,0],
                  [3,2,0,0,0,0,0,0,6]
                ],
                [
                  [1,0,0,0,0,0,0,0,5],
                  [0,0,0,0,3,0,0,0,0],
                  [0,0,2,0,4,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0],
                  [0,3,4,0,0,0,7,0,0],
                  [0,0,0,2,0,6,0,0,1],
                  [2,0,0,0,0,5,0,0,0],
                  [0,7,0,0,0,0,0,3,0],
                  [0,0,0,0,0,0,1,0,0]
                ],
                [
                  [0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,3,0,8,5],
                  [0,0,1,0,2,0,0,0,0],
                  [0,0,0,5,0,7,0,0,0],
                  [0,0,4,0,0,0,1,0,0],
                  [0,9,0,0,0,0,0,0,0],
                  [5,0,0,0,0,0,0,7,3],
                  [0,0,2,0,1,0,0,0,0],
                  [0,0,0,0,4,0,0,0,9]
                ]
              ];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/sudoku', (req, res) => { 
  let i=parseInt(Math.random()*10);
  res.json(sudoku[i]);
 });
const port = process.env.PORT || 5000 ;
app.listen(port, () => console.log(`Running on port ${port}`) );