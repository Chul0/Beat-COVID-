console.log('JS is linked!')
/*1.Plan out first. break them all into little pieces
2.Focus on making MVP
3.stretch goals adding cool features 
COMMIT and COMMIT! everytime you make big changes!!!!!!! */

const START_TIMER = 30; //second
 /* Generally use upper case for constants that are “hard-coded”. Or, in other words, when the value is known prior to execution and directly written into the code.*/
for (let i = 0; i < 10; i++) {
    const hole = document.createElement('div');
    hole.classList.add('hole');
    document.querySelector('.game-board2').append(hole);
}

const winningMessage = `You saved the world!`;
const losingMessage = `You were close!`
const winningCondition = 100 ;

let timeRemaining =START_TIMER;
let score = 0 ; //score has to be changed so value is 0
let tickId = null; //same goes for tick and mole
let virusID = null;

class Virus {
    constructor(icon, points) {
    this.icon = icon
    this.points = points 
  }
}
let greenVirus = new Virus('virus', 2)
let redVirus = new Virus('virus2', 5)
let blackVirus = new Virus('virus3', -3)

document.querySelector('.time-number').innerText=timeRemaining;
document.querySelector('.score-number').innerText=score;
document.querySelector('.winning-message').innerText=winningMessage


document.querySelector('.start-button').addEventListener('click', (event) => {
    document.querySelector('.game-board').classList.add('hidden');
    document.querySelector('.game-board2').classList.remove('hidden');
    document.querySelector('.game-board3').classList.add('hidden');
   //  console.log('you cliked');
   const addVirus = (num, type) => {
       if (type === greenVirus) {
        while(num > 0) {
            setInterval(() => {
                const allHoles = document.querySelectorAll('.hole');
                const randomHole = Math.floor(Math.random() * allHoles.length);
                allHoles[randomHole].classList.add(type.icon);
                setTimeout(() => {
                    allHoles[randomHole].classList.remove(type.icon);
                }, 10000)
            }, 1000);
            num--;
        }}if (type === redVirus) {
            console.log('hihihihihi')
            while(num > 0 ){
            setInterval(() => {
                const allHoles = document.querySelectorAll('.hole');
                const randomHole = Math.floor(Math.random() * allHoles.length);
                allHoles[randomHole].classList.add(type.icon);
                setTimeout(() => {
                    allHoles[randomHole].classList.remove(type.icon);
                }, 10000)
            }, 7000);
            num--;
        }}if (type === blackVirus) {
            console.log('hihihihihi')
            while(num > 0 ){
            setInterval(() => {
                const allHoles = document.querySelectorAll('.hole');
                const randomHole = Math.floor(Math.random() * allHoles.length);
                allHoles[randomHole].classList.add(type.icon);
                setTimeout(() => {
                    allHoles[randomHole].classList.remove(type.icon);
                }, 10000)
            }, 7000);
            num--;
        }}
    } 
    addVirus(3, greenVirus) //always invoke function!!
    addVirus(1, redVirus)
    addVirus(1, blackVirus)

    let interval = setInterval(()=> {
        document.querySelector('.time-number').innerText=timeRemaining;
        timeRemaining--;
            if (timeRemaining === 0){
                clearInterval(interval);
             document.querySelector('.time-number').innerText='0';
            }
    }, 1000);
        setTimeout(() => {
            console.log("game over!")
            document.querySelector('.game-board2').classList.add('hidden')
            document.querySelector('.game-board3').classList.remove('hidden')
            resultValidation() //invoke this here because it should be showing after timeout runs!!!
        }, 30000)
        
})    

//for/of - loops through the values of an iterable object
for (hole of document.querySelectorAll('.hole')) {
    hole.addEventListener('click', (event) => {
        if(event.target.classList.contains('virus')){
            event.target.classList.remove('virus')
            score += 2;
            document.querySelector('.score-number').innerText=score
        } else if (event.target.classList.contains('virus2')){
            event.target.classList.remove('virus2')
            score += 5;
            document.querySelector('.score-number').innerText=score
        } else if (event.target.classList.contains('virus3')){
            event.target.classList.remove('virus3')
            score -= 4;
            document.querySelector('.score-number').innerText=score
        }
    })
}
    let  resultValidation = () => {
        if (score >= winningCondition) {
            document.querySelector('.winning-message').innerHTML=winningMessage;
            return;
        }else {
            document.querySelector('.winning-message').innerHTML=losingMessage;
            return;
        }
    }
    
    /*Function to refresh page on button click 
    https://www.includehelp.com/code-snippets/javascript-function-to-refresh-page-on-button-click.aspx*/
document.querySelector('.restart-button').addEventListener('click', () => {
    location.reload();
})

    

