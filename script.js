console.log('JS is linked!')
/*1.Plan out first. break them all into little pieces
2.Focus on making MVP
3.stretch goals adding cool features 
COMMIT and COMMIT! everytime you make big changes!!!!!!! */

const START_TIMER = 30; //second
const NUM_HOLES = 30; /* Generally use upper case for constants that are “hard-coded”. Or, in other words, when the value is known prior to execution and directly written into the code.*/
for (let i = 0; i < 10; i++) {
    const hole = document.createElement('div');
    hole.classList.add('hole');
    document.querySelector('.game-board2').append(hole);
}

const winningMessage = () => `You saved the world!`;
const losingMessage = () => `You were close!`
const winningCondition = 100;

let timeRemaining =START_TIMER;
let score = 0 ; //score has to be changed so value is 0
let tickId = null; //same goes for tick and mole
let virusID = null;

document.querySelector('.time-number').innerText=timeRemaining;
document.querySelector('.score-number').innerText=score;



document.querySelector('.start-button').addEventListener('click', (event) => {
    document.querySelector('.game-board').classList.add('hidden');
    document.querySelector('.game-board2').classList.remove('hidden');
    document.querySelector('.game-board3').classList.add('hidden');
   //  console.log('you cliked');
   const addVirus = (num) => {
        while(num > 0) {
            setInterval(() => {
                const allHoles = document.querySelectorAll('.hole');
                const randomHole = Math.floor(Math.random() * allHoles.length);
                allHoles[randomHole].classList.add('virus');
                setTimeout(() => {
                    allHoles[randomHole].classList.remove('virus');
                }, 10000)
            }, 1000);
            num--;
        }
    } 
    const addVirus2 = () => {
        setInterval(() => {
            const allHoles = document.querySelectorAll('.hole');
            const randomHole = Math.floor(Math.random() * allHoles.length);
            allHoles[randomHole].classList.add('virus2');
            setTimeout(() => {
                allHoles[randomHole].classList.remove('virus2');
            }, 5000)
        }, 10000);
    }
    
    addVirus(3) //always invoke function!!
    addVirus2(1)

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
        }, 31000)
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
        }
    })
}















    // const removeVirus = () => {
    //     setTimeout(() => {
    //             const allHolesR = document.querySelectorAll('.hole');
    //             const randomHoleR = Math.floor(Math.random() * allHoles.length);
    //             allHolesR[randomHoleR].classList.remove('virus');
    //         }, 10000)
    // }

    // const removeVirus = () => {
    //     setInterval(()=> {
    //         const allHoles = document.querySelectorAll('.hole');
           
    //     })
    // }
//Random numbers of virus (1 - 3) will show up, so I set infinite while loop
// invoked setInterval with 3 and num-- 






// document.querySelector('.time-number').innerText=timeRemaining