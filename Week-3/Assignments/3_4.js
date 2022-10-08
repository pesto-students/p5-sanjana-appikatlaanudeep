// function createStack() {
//     return {
//         items: [],
//         push(item) {
//             this.items.push(item);
//         },
//         pop() {
//             return this.items.pop();
//         },
//     };
// }
// const stack = createStack();
// stack.push(10);
// stack.push(5);
// stack.pop(); // => stack.items;// => [10]stack.items= [10,100,1000]
// // console.log(stack.push(10));
// // console.log(stack.push(5));
// // console.log(stack.pop());
// console.log(stack.items);
// stack.items = [10, 100, 1000];
// console.log(stack.items); //This code is allowing me to modify the items 

/* MODIFIED CODE START*/

function createStack() {
    const items = [];
    return {
        push(item) {
            items.push(item);
        },
        pop() {
            items.pop();
        },
    };
}

const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop();
console.log(stack.items);
stack.items = [10, 100, 200];
console.log(stack.items);