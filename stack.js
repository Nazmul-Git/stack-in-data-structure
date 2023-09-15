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
arr.push(10);
arr.push(20);
arr.push(30); // last in 30
console.log(arr);
console.log(arr.pop(), arr); // first out 30
