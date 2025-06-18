let gameData =[
    [0,0,0],
    [0,0,0],
    [0,0,0]
];
let alter =0;
let player1Score=0;
let player2Score=0;
let tie=0;
let tieData=0;
let result=0;
//Button Variable

let button1 = document.getElementById('slot1');
let button2 = document.getElementById('slot2');
let button3 = document.getElementById('slot3');
let button4 = document.getElementById('slot4');
let button5 = document.getElementById('slot5');
let button6 = document.getElementById('slot6');
let button7 = document.getElementById('slot7');
let button8 = document.getElementById('slot8');
let button9 = document.getElementById('slot9');

//Onclick Section
button1.onclick = function(){
    if(alter===0 && gameData[0][0]===0){
        gameData[0][0]="X";
        document.getElementById('mark1').innerText="X";
        document.getElementById('mark1').style.color='red';
        alter=1;
        tieData+=1;
    }
    else if(alter===1 && gameData[0][0]===0){
        gameData[0][0]="O";
        document.getElementById('mark1').innerText="O";
        document.getElementById('mark1').style.color='blue';
        alter=0;
        tieData+=1;
    }
    displayTurn();
    checker();
    checkerX();
    resultDisplay();
    reset();
};
button2.onclick = function(){
    if(alter===0 && gameData[0][1]===0){
        gameData[0][1]="X";
        document.getElementById('mark2').innerText="X";
        document.getElementById('mark2').style.color='red';
        alter=1;
        tieData+=1;
    }
    else if(alter===1 && gameData[0][1]===0){
        gameData[0][1]="O";
        document.getElementById('mark2').innerText="O";
        document.getElementById('mark2').style.color='blue';
        alter=0;
        tieData+=1;
    }
    displayTurn();
    checker();
    checkerX();
    resultDisplay();
    reset();
};
button3.onclick = function(){
    if(alter===0 && gameData[0][2]===0){
        gameData[0][2]="X";
        document.getElementById('mark3').innerText="X";
        document.getElementById('mark3').style.color='red';
        alter=1;
        tieData+=1;
    }
    else if(alter===1 && gameData[0][2]===0){
        gameData[0][2]="O";
        document.getElementById('mark3').innerText="O";
        document.getElementById('mark3').style.color='blue';
        alter=0;
        tieData+=1;
    }
    displayTurn();
    checker();
    checkerX();
    resultDisplay();
    reset();
};
button4.onclick = function(){
    if(alter===0 && gameData[1][0]===0){
        gameData[1][0]="X";
        document.getElementById('mark4').innerText="X";
        document.getElementById('mark4').style.color='red';
        alter=1;
        tieData+=1;
    }
    else if(alter===1 && gameData[1][0]===0){
        gameData[1][0]="O";
        document.getElementById('mark4').innerText="O";
        document.getElementById('mark4').style.color='blue';
        alter=0;
        tieData+=1;
    }
    displayTurn();
    checker();
    checkerX();
    resultDisplay();
    reset();
};
button5.onclick = function(){
    if(alter===0 && gameData[1][1]===0){
        gameData[1][1]="X";
        document.getElementById('mark5').innerText="X";
        document.getElementById('mark5').style.color='red';
        alter=1;
        tieData+=1;
    }
    else if(alter===1 && gameData[1][1]===0){
        gameData[1][1]="O";
        document.getElementById('mark5').innerText="O";
        document.getElementById('mark5').style.color='blue';
        alter=0;
        tieData+=1;
    }
    displayTurn();
    checker();
    checkerX();
    resultDisplay();
    reset();
};
button6.onclick = function(){
    if(alter===0 && gameData[1][2]===0){
        gameData[1][2]="X";
        document.getElementById('mark6').innerText="X";
        document.getElementById('mark6').style.color='red';
        alter=1;
        tieData+=1;
    }
    else if(alter===1 && gameData[1][2]===0){
        gameData[1][2]="O";
        document.getElementById('mark6').innerText="O";
        document.getElementById('mark6').style.color='blue';
        alter=0;
        tieData+=1;
    }
    displayTurn();
    checker();
    checkerX();
    resultDisplay();
    reset();
};
button7.onclick = function(){
    if(alter===0 && gameData[2][0]===0){
        gameData[2][0]="X";
        document.getElementById('mark7').innerText="X";
        document.getElementById('mark7').style.color='red';
        alter=1;
        tieData+=1;
    }
    else if(alter===1 && gameData[2][0]===0){
        gameData[2][0]="O";
        document.getElementById('mark7').innerText="O";
        document.getElementById('mark7').style.color='blue';
        alter=0;
        tieData+=1;
    }
    displayTurn();
    checker();
    checkerX();
    resultDisplay();
    reset();
};
button8.onclick = function(){
    if(alter===0 && gameData[2][1]===0){
        gameData[2][1]="X";
        document.getElementById('mark8').innerText="X";
        document.getElementById('mark8').style.color='red';
        alter=1;
        tieData+=1;
    }
    else if(alter===1 && gameData[2][1]===0){
        gameData[2][1]="O";
        document.getElementById('mark8').innerText="O";
        document.getElementById('mark8').style.color='blue';
        alter=0;
        tieData+=1;
    }
    displayTurn();
    checker();
    checkerX();
    resultDisplay();
    reset();
    
};
button9.onclick = function(){
    if(alter===0 && gameData[2][2]===0){
        gameData[2][2]="X";
        document.getElementById('mark9').innerText="X";
        document.getElementById('mark9').style.color='red';
        alter=1;
        tieData+=1;
    }
    else if(alter===1 && gameData[2][2]===0){
        gameData[2][2]="O";
        document.getElementById('mark9').innerText="O";
        document.getElementById('mark9').style.color='blue';
        alter=0;
        tieData+=1;
    }
    displayTurn();
    checker();
    checkerX();
    resultDisplay();
    reset();
};

//Checker
//Checker still not working
function checker(){
    for(let i=0;i<gameData.length;i++){
    //Vertical Variable
    let checkVertical="";

    //Horizontal Variable
    let checkHorizontal="";
  
    
    //Vertical Checker
    for(let j=0;j<gameData[i].length;j++){
        if(gameData[i][j]==="X"){
            checkVertical+="X";
        }
        else if(gameData[i][j]==="O"){
            checkVertical+="O";
        }

        if(gameData[j][i]==="X"){
            checkHorizontal+="X";
        }
        else if(gameData[j][i]==="O"){
            checkHorizontal+="O";
        }
    }
    

    if((checkHorizontal==="XXX"||checkHorizontal==="OOO")||(checkVertical==="XXX"||checkVertical==="OOO")){
        result= (checkHorizontal==="XXX"||checkHorizontal==="OOO")?checkHorizontal:checkVertical;
        break;
    }
    

}


}

function checkerX() {
    let diagonalChecker = "";
    let inverseChecker = "";
    let num = (gameData.length - 1);

    for (let i = 0; i < gameData.length; i++) {
        //Diaganonal Checker
            if(gameData[i][i]==="X"){
                diagonalChecker+="X";
            }else if (gameData[i][i]==="O") {
                diagonalChecker+="O";
                
            }

            //Inverse Diagonal Checker
            if(gameData[i][num]==="X"){
                inverseChecker+="X";
            }
            else if (gameData[i][num]==="O") {
                inverseChecker+="O";                
            }

            //Check if there is a winner in diagonal or inverse diagonal to break the loop
            if((diagonalChecker==="XXX"||diagonalChecker==="OOO")||(inverseChecker==="XXX"||inverseChecker==="OOO")){
                result =(diagonalChecker==="XXX"||diagonalChecker==="OOO")?diagonalChecker:inverseChecker;
                break;
            }
            num--;
    }

    }


//Result
function resultDisplay(){
    switch(result){
        case "XXX":
            player1Score+=1;
            document.getElementById('player1').innerText="Player 1: "+player1Score;
            document.getElementById('playerTurn').innerText="Player 1 WIN!";
            document.getElementById('playerTurn').style.color="red";
            break;
        case "OOO":
            player2Score+=1;
            document.getElementById('player2').innerText="Player 2: "+player2Score;
            document.getElementById('playerTurn').innerText="Player 2 WIN!";
            document.getElementById('playerTurn').style.color="blue";
            break;       
    }
    if(tieData===9 &&(result!="XXX"||result!="OOO")){
        document.getElementById('playerTurn').innerText="TIE!!!";
        document.getElementById('playerTurn').style.color="green";
        alter=0;
        tie+=1;
        document.getElementById('tie').innerText="Tie: "+tie;
    }
}

// reset
function reset(){
    if(result==="XXX" ||result==="OOO"||tieData===9){
        document.getElementById('playerTurn').innerText="Player 1 Turn";
        document.getElementById('playerTurn').style.color="red";
            document.getElementById('grid').style.boxShadow="2px 2px 10px #df0303, 1px 1px 10px #f5f3f3, -2px -2px 10px #df0303, -1px -1px 10px #f5f3f3";
        result=0;
        tieData=0;
        alter=0;
        gameData = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];
        for(let i=1;i<=9;i++){
            document.getElementById('mark'+i).innerText="";
        }
    
    }
}


//Display Scores
function displayTurn(){
    if(alter===1){
    document.getElementById('playerTurn').innerText="Player 2 Turn";
    document.getElementById('playerTurn').style.color="blue";
    document.getElementById('grid').style.boxShadow="2px 2px 10px #1e0191, 1px 1px 10px #f5f3f3, -2px -2px 10px #1e0191, -1px -1px 10px #f5f3f3";
    }
    else if(alter===0){
    document.getElementById('playerTurn').innerText="Player 1 Turn";
    document.getElementById('playerTurn').style.color="red";
    document.getElementById('grid').style.boxShadow="2px 2px 10px #df0303, 1px 1px 10px #f5f3f3, -2px -2px 10px #df0303, -1px -1px 10px #f5f3f3";
    }
}

