
// Create a function called highLow that takes in a number and returns whether the number is higher or lower than the "answer".
// Create an HTML page and link your JavaScript file. More info here.
// As a user, I see a prompt or input where I can guess a number between 1 and 100 (both inclusive).
// As a user, I can see if my guess is too high or too low.
// As a user, if I guess the "answer" correctly I am notified that I won.
// As a user, I can continue to guess the "answer" until I am correct.
// STRETCH: As a user, if I have not guessed the correct number in seven tries I see a losing message.

// Use math.random to assign a random number to a variable called theAnswer
// Console log theAnswer to be able to troubleshoot
// Use conditional statement and logic and return the appropriate response
// Set up an input box

// Need to account for 0
const theAnswer = Math.floor(Math.random() * 101)
console.log(theAnswer)

var guess = document.getElementById("userGuess").value ;

const highLow = ()=>{
    if( guess === theAnswer){
        alert('You win!')
    }
}