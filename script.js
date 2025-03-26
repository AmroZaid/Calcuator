let display = document.getElementById("display");
let pracetAmount = 0;
let prace = document.getElementById("pracet");
let lastChar;
function clears() {//clear
    console.log("C is pressed");
    display.value = "";
}
function pracet(){
    console.log("pracet is pressed");
    if (pracetAmount % 2 === 0) {
        display.value = display.value + '(';
        pracetAmount++;
        prace.innerText = ')';
    }
    else {
        display.value = display.value + ')';
        pracetAmount++;
        prace.innerText = '(';
    }
}
function mod() {//oprator
    console.log("mod is pressed");
lastChar = display.value.slice(-1);
    if (lastChar === '/'||lastChar=== '*'||lastChar=== '+'||lastChar=== '-'||lastChar=== '%')
    {
        return;
    }
    display.value += '%';
}
function divition(){//opretor
    console.log("dicition is pressed");
    lastChar = display.value.slice(-1);
    if (lastChar === '/'||lastChar=== '*'||lastChar=== '+'||lastChar=== '-'||lastChar=== '%')
    {
        return;
    }
    display.value += '/';
}

function multi(){//opretor
    console.log("multi is pressed");
    lastChar = display.value.slice(-1);
    if (lastChar === '/'||lastChar=== '*'||lastChar=== '+'||lastChar=== '-'||lastChar=== '%')
    {
        return;
    }
    display.value += '*';
}

function subtract(){//opretor
    console.log("subtract is pressed");
    lastChar = display.value.slice(-1);
    if (lastChar === '/'||lastChar=== '*'||lastChar=== '+'||lastChar=== '-'||lastChar=== '%')
    {
        return;
    }
    display.value += '-';   
}

function addition(){//opretor
    console.log("addition is pressed");
    lastChar = display.value.slice(-1);
    if (lastChar === '/'||lastChar=== '*'||lastChar=== '+'||lastChar=== '-'||lastChar=== '%')
    {
        return;
    }
    display.value += '+';   
}

function point(){
    console.log("point is pressed");
    lastChar = display.value.slice(-1);
    if (lastChar === '.'||lastChar === '/'||lastChar=== '*'||lastChar=== '+'||lastChar=== '-'||lastChar=== '%')
    {
        return;
    }
    display.value += '.';   
}

function solve(){//opretor
    console.log("dicition is pressed");
    try {
        display.value = eval(display.value);

    }
    catch(error)
    {
        display.value = "Error";
    }

}
function nine() {
    display.value += '9';
}

function eight() {
    display.value += '8';
}

function seven() {
    display.value += '7';
}

function six() {
    display.value += '6';
}

function five() {
    display.value += '5';
}

function four() {
    display.value += '4';
    
}
function three() {
    display.value += '3';

} 
function two() {
    display.value += '2';
}

function one() {
    display.value += '1';
}

function zero() {
    display.value += '0';
}