'use strict';
// assert library is used for testing
const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

let stacks = {
a: [4, 3, 2, 1],
b: [],
c: []
};

const printStacks = () => {
console.log("a: " + stacks.a);
console.log("b: " + stacks.b);
console.log("c: " + stacks.c);
}

// This function takes in the startstack name and endstack name
const movePiece = (startStack,endStack) => {
let moveStack = stacks[startStack]
let twoStack = stacks[endStack]
let piece = moveStack.pop(); // piece equals the last index of the choosen array
twoStack.push(piece); // twoStack moves the piece to the array that was chosen
//twoStack.push(moveStack.pop())
console.log(piece)


}

const isLegal = (startStack,endStack) => {
let moveStack = stacks[startStack] // stacks a
let twoStack = stacks[endStack] //stack b
let moveStackPiece = moveStack[moveStack.length - 1] // stack at "a" will be the last index
let twoStackPiece = twoStack[twoStack.length -1] // stack at "b" will be the last index
console.log(twoStackPiece,"twostackpiece")
console.log(moveStackPiece,"movestackpiece")
//When moving a piece to a postion that is blank the computer does know no less the postion is undefined
if(moveStackPiece < twoStackPiece || twoStackPiece == undefined){
return true
}
else{
return false
}
}

const checkForWin = () => {
if(stacks.b.length === 4){
    console.log("Ya won");
return true;
}
else{
    console.log("no win");
return false;
}
}
const towersOfHanoi = (startStack, endStack) => {
if (isLegal(startStack, endStack)){
movePiece(startStack, endStack);
checkForWin();
}
}



const getPrompt = () => {
printStacks();
rl.question('start stack: ', (startStack) => {
rl.question('end stack: ', (endStack) => {
towersOfHanoi(startStack, endStack);
getPrompt();
});
});
}

getPrompt();