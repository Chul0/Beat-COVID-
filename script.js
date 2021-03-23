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

class Virus {
    constructor(icon, points) {
    this.icon = icon
    this.points = points 
  }
}
let greenVirus = new Virus('virus', 2)
let redVirus = new Virus('virus2', 5)
let rainbowVirus = new Virus('virus3', -4)

/*REFERENCE:
[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#strict_mode]
-Classes are "special functions", and just as you can define function expressions and function declarations
-To declare a class, you use the class keyword with the name of the `class`.
-A JavaScript class is not an object, It is a template for JavaScript objects.
-The constructor method is a special method for creating and initializing an object created with a class. There can only be one special method with the name "constructor" in a class.
*/


document.querySelector('.time-number').innerText=timeRemaining;
document.querySelector('.score-number').innerText=score;
document.querySelector('.winning-message').innerText=winningMessage



document.querySelector('.start-button').addEventListener('click', (event) => {
    document.querySelector('.game-board').classList.add('hidden');
    document.querySelector('.game-board2').classList.remove('hidden');
    document.querySelector('.game-board3').classList.add('hidden');
    backgroundMusic.play();
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
        }}if (type === rainbowVirus) {
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
    addVirus(1, rainbowVirus)

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
            backgroundMusic.pause();
        }, 30000)
        
})    



//for/of - loops through the values of an iterable object
for (hole of document.querySelectorAll('.hole')) {
    hole.addEventListener('click', (event) => {
        if(event.target.classList.contains('virus')){
            event.target.classList.remove('virus')
            score += 2;
            document.querySelector('.score-number').innerText=score
            clickingVirus.play();
        } else if (event.target.classList.contains('virus2')){
            event.target.classList.remove('virus2')
            score += 5;
            document.querySelector('.score-number').innerText=score
            clickingVirus2.play();
        } else if (event.target.classList.contains('virus3')){
            event.target.classList.remove('virus3')
            score -= 4;
            document.querySelector('.score-number').innerText=score
            losingScore.play();
        }
    })
}
    let  resultValidation = () => {
        if (score >= winningCondition) {
            document.querySelector('.winning-message').innerHTML=winningMessage;
            winSound.play();
            return;
        }else {
            document.querySelector('.winning-message').innerHTML=losingMessage;
            lostSound.play();
            return;
        }
    }
    
    /*Function to refresh page on button click 
    https://www.includehelp.com/code-snippets/javascript-function-to-refresh-page-on-button-click.aspx*/
document.querySelector('.restart-button').addEventListener('click', () => {
    location.reload();
})
document.querySelector('.go-back').addEventListener('click', () => {
    location.reload();
})
    



//SOUNDS
let backgroundMusic = new Audio ("./SoundEffect/background.mp3")
backgroundMusic.volume = 0.3;
let startRestart = new Audio("./SoundEffect/buttonClick.wav")
startRestart.volume = 0.7;
let losingScore = new Audio("./SoundEffect/UhOh2.mp3")
losingScore.volume = 0.7;
let clickingVirus = new Audio("./SoundEffect/killingVirus.mp3")
clickingVirus.volume = 0.7;
let clickingVirus2 = new Audio("./SoundEffect/killingVirus2.mp3")
clickingVirus.volume = 0.7;
let lostSound = new Audio("./SoundEffect/losing.mp3")
lostSound.volume = 0.7;
let winSound = new Audio("./SoundEffect/youWin.mp3")
winSound.volume = 0.7;


const buttonHover = document.querySelectorAll('.button-hover')
buttonHover.forEach(button => {
    button.addEventListener('mouseover',  () => {
        startRestart.play();
        // console.log('button sound is working')
    })
})


const musicButton = document.querySelector('.musicOn').addEventListener('click', () => {
    backgroundMusic.pause();
})

//Game instruction 
document.querySelector('.instruction').addEventListener('click', ()=> {
    document.querySelector('.instruction-board').classList.remove('hidden');
    document.querySelector('.game-board').classList.add('hidden');
    document.querySelector('.game-board2').classList.add('hidden');
    document.querySelector('.game-board3').classList.add('hidden');
    console.log('instruction')
})

