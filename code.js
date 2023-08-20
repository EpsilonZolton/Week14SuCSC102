//jave time :3

//a function to play craps on the index page
function playCraps(){
    //troubleshooting playCraps() function
    console.log("begun playing craps");

    var die1 = 0;
    var die2 = 0;

    die1 = Math.ceil(6*Math.random());
    die2 = Math.ceil(6*Math.random());

    //console.log(die1)
    //console.log(die2)

    document.getElementById("die1Res").innerHTML = "The result of die 1 is: " + die1;
    document.getElementById("die2Res").innerHTML = "The result of die 2 is: " + die2;

    var sum = die1 + die2;
    if(sum == 7 || sum == 11){
        document.getElementById("gameRes").innerHTML = "you lose";
    }else if(die1 % 2 == 0 || die1 == die2){
        document.getElementById("gameRes").innerHTML = "you win!";
    }else{
        document.getElementById("gameRes").innerHTML = "no winner";
    }
}

//checking login crdentials function for string.html page
function checkCreds(){
    console.log("checkCreds() started");
    var firstName;
    var lastName;
    var zipCode;
    var fullName;
    var fullNameLength;
    //getting our vars their values from the inputed set from the lock
    firstName = document.getElementById("fName").value;
    //console.log("First name is " + firstName);

    lastName = document.getElementById("lName").value;
    //console.log("Last name is " + lastName);

    zipCode = document.getElementById("zipCode").value;
    //console.log("zip code is " + zipCode);

    fullName = firstName + " " + lastName;
    //console.log("full name is " + fullName);

    fullNameLength = fullName.length;
    //console.log("name length is " + fullNameLength);

    zipCodeNumb = parseInt(zipCode);
    console.log("zip code number is " + zipCodeNumb);

    if(fullNameLength > 20){ //making sure everything entered into the login page is "correct"
        document.getElementById("loginStatus").innerHTML = "Invalid username, try again"
    }else if(zipCode.length != 5 || zipCodeNumb > 99999 || zipCodeNumb < 0){
        document.getElementById("loginStatus").innerHTML = "Invalid Zip code, try again"
    }else{
        alert("Crdentals accepted welcome to the page");
        document.getElementById("loginStatus").innerHTML = "welcome " + fullName; 
    }
}

function startFun(){
    //this is for the start button on the index page to move the image
    console.log("startFun() started")
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
    document.getElementById('mymarquee').start();
}

function stopFun(){
    //this is for the start button on the index page to stop moveing the image
    console.log("stopFun() started")
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
    document.getElementById('mymarquee').stop();
}

function checkPalin(){ //check if a sentence is a palindrome
    console.log("checkPalin() started");
    var inputText = document.getElementById("palinInput").value;
    console.log("input is " + inputText);
    var spacelessText = inputText.split(" ").join("");
    console.log("text without spaces is " + spacelessText);
    var reverseArray = [];
    length = spacelessText.length - 1;
    console.log("string length = " + length);
    for(let i = length; i >= 0; i--){
        reverseArray.push(spacelessText[i]);
    }
    console.log(reverseArray);
    var reverseText = reverseArray.join("");

    console.log("reversedText is " + reverseText);

    var comparison = (spacelessText ===  reverseText);
    console.log("comparison = " + comparison);

    if(comparison == true){
        document.getElementById("palinStatus").innerHTML = "\"" + inputText + "\" is a palindrome."
    }else if(comparison == false){
        document.getElementById("palinStatus").innerHTML = "\"" + inputText + "\" is a not palindrome."
    }
}

function playDuck(){ //this function is just a way to play a duck sound with sound() fucntion
    console.log("QUACK!");
    duckSound = new sound("duck-quack.wav");
    duckSound.play();
}

function playTest(){ //this was a test function juts to play a diffrent sound than the duck to make sure it was the sound function that is broken and yes it is the sound functino that is broken so this function has done its job
    console.log("playTest() started");
    testSound = new sound("");
    testSound.play();
}

function sound(scrFile){ //this function is meant to play a sound however it doesnt work for some reason and will just create a empty audio player box that you cant do anything with
    this.sound = document.createElement("audio");
    this.sound.scr = scrFile;
    this.sound.setAttribute("preload", "audio");
    this.sound.setAttribute("controls", "none");
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
    //i dont know why this function doesnt work and i dont care to fix it
}

//var countUp = undefined; //i know its not good codint practice to store varibles in a place like this but i dont care

function toggleCount(){ //fucntion to make a counting button the toggle in the title is there from the initial idea of the button
    console.log("toggleCount() reached");
    var starter = document.getElementById("counter").innerHTML;
    var timer = 1000;
    //var countUp = undefined;

    if(starter == "start counting"){
        starter = 0;
        document.getElementById("counter").innerHTML = starter;
    }else{
        starter++;
        document.getElementById("counter").innerHTML = starter;
    }//this makes the text in the button count up every time its pressed


    /*while(timer>0){
        timmer--;
    }
    if(timer == 0){
        starter++;
        document.getElementById("counter").innerHTML = starter;
        timer=1000;
    }*/ //second attempt at a counter that went up every second but it didnt work so im gonna just make ti go up every press

    /*if(countUp == undefined){
        countUp = true;
        console.log("if statment used");
    }else{}*/
    //console.log("count up = " + countUp);

    /*while(countUp == true && timer==0){
        starter++;
        document.getElementById("counter").innerHTML = starter;
    }*/
    //this was an attempt to use a loop however it would freeze the code so i couldnt stop it
   
    //console.log("starter is " + starter);


}

function textReverser(){ //this function takes inupted text cuts it in half and reverses the two halfves order
    console.log("text Reverseer() reached");
    var initial = document.getElementById("forwardText").value; //getting the inital text
    var noSpace = initial.split(" ").join(""); //removing the spaces just in case
    var splitPoint = noSpace.length/2; // finding the middle of the string
    splitPoint = Math.floor(splitPoint); //rounding it down just in case
    //console.log("half length is " + splitPoint);
    var firstHalf = noSpace.slice(0, splitPoint); //grabbing our first half of the string
    //console.log("first half is " + firstHalf);
    var secondHalf = noSpace.slice(splitPoint, noSpace.length); //grabbign our secodn half of the string
    //console.log("second half is " + secondHalf);

    var swapedText = secondHalf + firstHalf; //slapping our two halves together in reversed order
    //console.log("swapped text is " + swapedText);
    document.getElementById("swapResult").innerHTML = "Reversed text is: " + swapedText; //sending the result back on over to the document

}

function switch1(){ //function to switch the state of button 1 when its pressed
    console.log("switch1() reached");
    if(document.getElementById("button1").innerHTML == "Off"){
        document.getElementById("button1").innerHTML = "On";
    }else if(document.getElementById("button1").innerHTML == "On"){
        document.getElementById("button1").innerHTML = "Off";
    }
    XORGate(); // check the XOR gate logic
}

function switch2(){ //function to switch the state of button 2 when its pressed
    console.log("switch2() reached");
    if(document.getElementById("button2").innerHTML == "Off"){
        document.getElementById("button2").innerHTML = "On";
    }else if(document.getElementById("button2").innerHTML == "On"){
        document.getElementById("button2").innerHTML = "Off";
    }
    XORGate(); // once again check the XOR gate logic
}

function XORGate(){ //this is just simple XRO gate logic however when i wrote it i didnt do it in the best order to it would get stuck whenever ther was one On but couldht check if two were On so i had to reorganize the if statment logic 
    console.log("XORGate() reached");
    if(document.getElementById("button1").innerHTML == "Off" && document.getElementById("button2").innerHTML == "Off"){
        document.getElementById("btnOutput").innerHTML = "Result from gate is: Off";
    }else if(document.getElementById("button1").innerHTML == "On" && document.getElementById("button2").innerHTML == "On"){
        document.getElementById("btnOutput").innerHTML = "Result from gate is: Off";
    }else if(document.getElementById("button1").innerHTML == "On" || document.getElementById("button2").innerHTML == "On"){
        document.getElementById("btnOutput").innerHTML = "Result from gate is: On";
    }
}