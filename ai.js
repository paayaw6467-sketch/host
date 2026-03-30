const wins=[
[0,1,2],[3,4,5],[6,7,8],
[0,3,6],[1,4,7],[2,5,8],
[0,4,8],[2,4,6]
]

function bestMove(){

let bestScore=-Infinity
let move

for(let i=0;i<9;i++){

if(board[i]==""){

board[i]="O"

let score=minimax(board,false)

board[i]=""

if(score>bestScore){
bestScore=score
move=i
}

}

}

return move

}

function minimax(board,isMax){

let result=checkMini()

if(result!==null){

const scores={
O:10,
X:-10,
draw:0
}

return scores[result]

}

if(isMax){

let best=-Infinity

for(let i=0;i<9;i++){

if(board[i]==""){

board[i]="O"
best=Math.max(best,minimax(board,false))
board[i]=""

}

}

return best

}else{

let best=Infinity

for(let i=0;i<9;i++){

if(board[i]==""){

board[i]="X"
best=Math.min(best,minimax(board,true))
board[i]=""

}

}

return best

}

}