# Exercise 3.1:

Create a memoize function that remembers previous inputs and stores them in cache so that itwon’t have to compute the same inputs more than once. The function will take an unspecifiednumber of integer inputs and a reducer method.


# Exercise 3.2:

Create 3 simple functions where call, bind and apply are used. The intention of this exercise isto understand how they work and their differences.


# Excercise 3.3:

What is the output of the below problem and why:

```
function createIncrement() {
    let count = 0;
    //let message;
    function increment() {
        count++;
        // message = `Count is ${count}`;
    }
    let message = `Count is ${count}`;
    function log() {
        console.log(message);
    }
    return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log(); // What is logged
	
```

# Excercise 3.4

Refactor the above stack implementation, using the concept of closure, such that there is noway to access items array outside of createStack() function scope:

```
function createStack() {
    return {
        items: [],
        push(item) {
            this.items.push(item);
        },
        pop() {
            return this.items.pop();
        },
    };
}
const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop(); // => 5
stack.items; //=> 10
stack.items = [10,100,1000]; // => encapsulation is broken.


```

