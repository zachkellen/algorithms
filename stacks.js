class ArrayStack {
    constructor() {
        this.contents = [];
    }
    // push(value) - adds the given value to the stack
    push(value) {
        this.contents.push(value);
    }

    // pop() - removes the top value from stack and returns it
    pop() {
        return this.contents.pop();
    }

    // top() - returns the top value without removing it
    top() {
        // if(this.contents.length == 0) {
        //     return undefined;
        // }
        // else {
            return this.contents[this.contents.length - 1];
        // }
    }

    // contains(target) - returns true if the target value is in the stack,
    // false if not
    contains(target) {
        if(this.contents.length == 0) {
            return undefined;
        }
        else {
            for(var i = 0; i < this.contents.length; i++) {
                if(this.contents[i] == target){
                    return true;
                }
            }
        }
        return false;
    }

    // isEmpty() - returns true if the stack is empty, false otherwise
    isEmpty() {
        if(this.contents.length == 0) {
            return true;
        } else {
            return false;
        }
    }

    // size() - returns the size of the stack
    size() {
        return this.contents.length;
        // return length;
    }

}

// make sure you test all six methods!
// make sure that you test any edge cases you find

var x = new ArrayStack();
x.push(1);
x.push(2);
x.push(3);
x.push(4);
x.push(5);
console.log(x);
console.log(x.pop());
console.log(x);
console.log(x.top());
console.log(x.contains(3));
console.log(x.contains(7));
console.log(x.isEmpty());
console.log(x.size());