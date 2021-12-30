document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square)=>{
        square.addEventListener('click', handleClick);
    })
})

function handleClick(event){
    
    let square = event.target;
    let position = square.id;

    if (handleMove(position)){   

        setTimeout(()=>{
            alert("O jogado Acabou, Vitoria");
        },10);
            
        };
    updateSquares();
    displayButton('bot')

}

function updateSquares(){

    let squares = document.querySelectorAll(".square");

    squares.forEach((square)=>{
        let position = square.id;
        let symbol = board[position];

        if (symbol != ''){
            square.innerHTML = `<div class='${symbol}'></div`
            
        }
    })
}

function displayButton(id){
    let display = document.getElementById(id).style.display;
    if(gameOver== true)
        document.getElementById(id).style.display="block";    
    else
    document.getElementById(id).style.display="none";

}

