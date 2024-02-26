let englishButton = document.querySelector(".english-button");
let ssButton = document.querySelector(".ss-button");
let mathButton = document.querySelector(".math-button");
let scienceButton = document.querySelector(".science-button");
let englishmessage = document.querySelector(".english-message");
let mathmessage = document.querySelector(".math-message")
let ssmessage = document.querySelector(".ss-message")
let sciencemessage= document.querySelector(".science-message")

// For each of the test questions:
//  - Use conditionals to check whether the correct answer was provided by the user. 
//  - The click handlers for each question have been provided for you.

// CODE ALONG
// 1. Take a look at the code provided:
//  - Each of the buttons for the first three subjects have already been stored in its own variable.


englishButton.addEventListener("click", function() {
    let englishInput = document.querySelector(".english").value;

    // 2. Write an if-else conditional statement.
    //  - Check if the value of the variable englishInput is correct.
  if (englishInput==="Mon"){
  englishmessage.innerHTML = "Correct!"
    englishmessage.style.color = "green"
  } else if (englishInput === "mon"){
    englishmessage.innerHTML = "Correct!"
    englishmessage.style.color = "green"
  }
  else {
    englishmessage.innerHTML = "Wrong! try again."
    englishmessage.style.color = "red"
  }
    //  - The answer should be "Mon".
    //  - If the user enters the correct answer, use .innerHTML to display the word "Correct!" in the ".english-message" div. 
    //  - If incorrect, display "Wrong! Try again."
    



});


// CODE SOLO

mathButton.addEventListener("click", function() {
    // NOTE: we treat numbers slightly different than strings.
    //  - We need to write 'Number' before the grabbed value. 
    let mathInput = Number(document.querySelector(".math").value);

    // 3. Write an if-else conditional statement.
    //  - Check if the value of the variable mathInput is correct.
  if (mathInput===10+10+10){
    mathmessage.innerHTML = "Correct!"
    mathmessage.style.color = "green"
  } else{
    mathmessage.innerHTML = "Wrong! try again."
    mathmessage.style.color = "red"
  }
    //  - The answer should be 30.
    //  - If the user enters the correct answer, use .innerHTML to display the word "Yessss!" in the ".math-message" div. 
    //  - If incorrect, display "Wrong! Try again."
    

});


ssButton.addEventListener("click", function() {
    let ssInput = document.querySelector(".social-studies").value;

    // 4. Write an if-else conditional statement.
    //  - Check if the value of the variable ssInput is correct.
  if (ssInput==="Albany"){
    ssmessage.innerHTML = "Correct!"
    ssmessage.style.color = "green"
  } else{
    ssmessage.innerHTML = "Wrong! try again."
    ssmessage.style.color = "red"
  }
    //  - The answer should be "Albany".
    //  - If the user enters the correct answer, use .innerHTML to display the word "You got it!" in the ".ss-message" div. 
    //  - If incorrect, display "Womp, womp. Try again."



});


scienceButton.addEventListener("click", function() {
  let scienceInput = document.querySelector(".science").value;
                                            
    // 5. Declare a variable that stores the value of the user input in the science section.
    //  - Look at previous lines of code to help you out.


    // 6. Write an if-else conditional statement.
    //  - Check if the value of the input variable is correct.
  if (scienceInput==="solid"){
    sciencemessage.innerHTML = "Correct!"
    sciencemessage.style.color = "green"
  } else{
    sciencemessage.innerHTML = "Wrong! try again."
    sciencemessage.style.color = "red"
  }
    //  - The answer should be "solid".
    //  - If the user enters the correct answer, use .innerHTML to display the word "Rockstar!" in the ".science-message" div. 
    //  - If incorrect, display "Sad. Try again."



});

// Finish Early?
//  - When a student gets the answer right, make it so their answer turns green. 

//  - If they get it wrong, make their answer turn red.
//  - Write a conditional statement so the English answer is correct for both the user inputs Mon and mon. 
//  - Google compound conditionals to help you figure out how to do this!