/*
Stack is a linear data structure in which insertion and deletion are done at one end this end is generally called the top. It works on the principle of Last In First Out (LIFO) or First in Last out (FILO). LIFO means the last element inserted inside the stack is removed first. FILO means, the last inserted element is available first and is the first one to be deleted. 
*/
// Operations in a Stack:

// Push: Add an element to the top of a stack
// Pop: Remove an element from the top of a stack
// IsEmpty: Check if the stack is empty
// IsFull: Check if the stack is full
// top/Peek: Get the value of the top element without removing it

// push FIFO / LIFO
const arr=[];
arr.push(10);  // first in
arr.push(20);
arr.push(30); // last in 30
console.log(arr);
console.log(arr.pop(), arr); // first out 30

console.log(arr); // [ 10, 20 ]
console.log(arr.pop(), arr); // out 20 , [ 10 ]

console.log(arr);
console.log(arr.pop(), arr); // out 10, last out []

// IsEmpty ?
if(arr.length===0){
    console.log('underflow = ',arr); 
    console.log(arr.pop()); //// Underflow if the stack is empty.
}
// IsEmpty ? for string
const str="";
for(let i=0; i<str.length; i++){
    console.log(str+str[i]+'');
}

// IsFull ?

// top/Peek: Get the value of the top element
const arr2=[11,22,33,44,55];
const peek=arr2.length-1;
console.log(arr2[peek]);  // get the top value