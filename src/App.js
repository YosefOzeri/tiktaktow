import logo from './logo.svg';
import './App.css';
import React from 'react';

// eslint-disable-next-line no-undef
class App extends React.Component {
  state={
    board:[[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']]
    , player:'X'
    ,countSteps:0
    ,win:false
  }

  drow=(rIndex,cIndex)=>{
    let board=this.state.board;
    let simbol=this.state.player;
    if(this.state.countSteps===9 || this.state.win){
      alert("The gameEnded you mother fucker! stop being so annoying god-dam");
    }else if(board[rIndex][cIndex]!==' '){
        alert("its already painted, please try another place!")
      }else {
          board[rIndex][cIndex]=simbol;
          simbol=simbol==='X'?'O':'X';
          this.setState({board:board,player:simbol,countSteps:this.state.countSteps+1 },()=>{
          });
          this.CheckWinner(rIndex,cIndex);
        }




  }

  // checkRow=()=>{
  //   let board=this.state.board;
  //   let countX=0;
  // //  let countO=0;
  //   for(let i=0;i<board.length;i++){
  //     countX=0;
  //     for(let j=0;j<board[i].length-1;j++){
  //       if(board[i][j]===board[i][j+1]&&board[i][j]==='X'){
  //         countX++;
  //       }
  //     }
  //     if(countX===2){
  //       alert("are you ready for lose? click ok");
  //     }
  //   }
  // }

  checkRow=(row)=>{
    let board=this.state.board;
    return ((board[row][0]!==' ' && board[row][1]!==' ' && board[row][2]!==' '
        && board[row][0] === board[row][1]) && (board[row][0] === board[row][2]));
}

  checkCol=(col)=>{
  let board=this.state.board;
    return ((board[0][col]!==' ' && board[1][col]!==' ' && board[2][col]!==' ' &&
        board[0][col] === board[1][col]) && (board[0][col] === board[2][col]));
  }

  checkLDiagonal=()=>{
    let board=this.state.board;
    let i=0;
    return board[i][i]!==' ' && board[i+1][i+1]!==' ' && board[i+2][i+2]!==' '
        && board[i][i] === board[i+1][i+1] && board[i][i] === board[i+2][i+2];
  }

  checkRDiagonal=()=>{
    let board=this.state.board;
    let count=0;
    let i=0
    let j=board.length-1
    //לעשות [j-i]
    return board[i][j]!==' ' && board[i+1][j-1]!==' ' && board[i+2][j-2]!==' '
        && board[i][j] === board[i+1][j-1] && board[i][j] === board[i+2][j-2];
  }

  CheckWinner=(rIndex, cIndex)=>{
    let currentPlayer=this.state.player;
    let isWin=false;
    if(this.checkRow(rIndex)){
      isWin=true;
      alert("Grate job,you'r " + currentPlayer + " kicked his/her ass in a RoW!! haha haha his/she's crying!!")
    }else if(this.checkCol(cIndex)){
      isWin=true;
      alert("Grate job,you'r " + currentPlayer + " kicked his/her ass in a COL!! haha haha his/she's crying!!")
    }    else if(this.checkRDiagonal()){
      isWin=true;
      alert("Grate job,you'r " + currentPlayer + " kicked his/her ass in a RDIAGONAL!! haha haha his/she's crying!!")
    }
    else if(this.checkLDiagonal()){
      isWin=true;
      alert("Grate job,you'r " + currentPlayer + " kicked his/her ass LDIAGONAL!! haha haha his/she's crying!!")
    }
    this.setState({win:isWin});
  }

  render() {
    return(
        <div>
          <h1>WELCOME TO OUR TIK-TAK-TOW, THE BEST FUCKING GAME EVER!</h1>
          <h1>Prepare for humiliation...</h1>

          <div className={"App"}>

            {
              <table>

                {
                  this.state.board.map((row, rIndex) => {
                    return (
                        <tr>

                          {
                            row.map((col, cIndex) => {
                              return (
                                  <td onClick={() => this.drow(rIndex, cIndex)}>

                                    {
                                      <div>{col}</div>
                                    }

                                  </td>
                              )
                            })
                          }

                        </tr>
                    )
                  })

                }


              </table>


            }
          </div>
        </div>

    )
  }
}


export default App;
