let myname = {
    firstName: 'Anudeep',
    lastName: 'Appikatla',
    printFullName: function (gender, country) {
        console.log(this.firstName + " " + this.lastName + ' gender is ' + gender + ' from ' + country);
    }
}

myname.printFullName('Male', 'India'); // Output will be -> Anudeep Appikatla gender is Male from India


let name2 = {
    firstName: 'Lionel',
    lastName: 'Messi'
}

// Generally to borrow functions from others and use we use call .

//Using call method we can perform Function borrowing
//name.printFullName.call(name2); // Output will be -> Pesto Tech when passed with out arguments

// Now if we have to pass the arguments to the function  we can do as follows

myname.printFullName.call(name2, 'Male', 'Argentina') // Output will be -> Lionel Messi is male from Argentina.

/*The difference between call and apply is params are passed in the form of array*/

myname.printFullName.apply(name2, ['Male', 'Argentina']); // Output will be -> Lionel Messi is male from Argentina.


// bind method

let getMyName = myname.printFullName.bind(name2, 'Male', 'France');
console.log(getMyName); //Output will be a function
getMyName(); // Output will be  -> Lionel Messi gender is Male from France.
