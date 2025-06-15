const playerText=document.querySelector('#playerText')
const conputerText=document.querySelector('#computerText')
const resultText=document.querySelector('#resultText')
const choiceBtns=document.querySelectorAll('.choiceBtn')

let player;
let computer;
let result;

choiceBtns.forEach(button=>button.addEventListener('click',()=>{
  player=button.textContent;
  computerChoice()
  playerText.textContent=`Ти: ${player}`
  conputerText.textContent=`Компютър: ${computer}`
  resultText.textContent=`Резултат: ${chekWinner()}`
}))

function computerChoice(){
  const randNum=Math.floor(Math.random()*3)+1


  switch(randNum){
    case 1:
      computer='Камък'
      break
    case 2:
      computer='Хартия'
      break
    case 3:
      computer='Ножица'
      break
}
}

function chekWinner(){

  if(player===computer){
    return 'Равенство!'
  }else if(computer==='Камък'){
    return(player==='Хартия')? 'Ти Спечели!':'Ти Загуби!'
  }else if(computer==='Хартия'){
    return(player==='Ножица')? 'Ти Спечели!':'Ти Загуби!'
  }else if(computer==='Ножица'){
    return(player==='Камък')? 'Ти Спечели!':'Ти Загуби!'
  }

}
