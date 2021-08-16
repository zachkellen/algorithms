// singly linked lists
// ListNode class: we'll be using this

class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// var x = new ListNode(7);

// var y = new ListNode(17);
// x.next = y;

// var z = new ListNode(3);
// y.next = z;

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    // addToFront - adds a node with the given value to the head of the list
    addToFront(value) {
        
        var newNode = new ListNode(value);

        if (this.head == null && this.tail == null) {
            this.head = newNode;
            this.tail = newNode;
        }

        else {
            newNode.next = this.head;
            this.head = newNode;
        }

    }
    // addToBack - adds a node with the given value to the tail of the list
    addToBack(value) {
        
        var newNode = new ListNode(value);

        if (this.head == null && this.tail == null) {
            this.head = newNode;
            this.tail = newNode;
        }

        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
    // contains - returns true if target is in the linked list (as a node value),
    // false otherwise
    contains(target) {
        var runner = this.head;

        while (runner != null) {

            if (runner.value == target) {
                return true;
            }
            runner = runner.next;
        }

        return false;
    }
    
    // display()
    // return a string with the value of every node from the
    // linked list - like "3 - 7 - 13 - 4 - 8"
    display() {
        var runner = this.head;
        var output = '';

        while (runner != null) {
            if (runner == this.tail) {
                output += runner.value;
            }
            else {
                output += runner.value + ' - ';
            }
            runner = runner.next;
        }

        return output;
    }

    // removeFront() - remove the head of the linked list and
    // return that node's value - not the node itself
    // that means that this.head is going to change as well
    // is there a special case for if the linked list only has two nodes? one node?
    // zero nodes????????

    removeFront() {

        if (this.head == null && this.tail == null) {
            return undefined;
        }
        if (this.head == this.tail) {
            var temp = this.head;
            this.head = null;
            this.tail = null;
            return temp.value
        }
        else{
            var oldHead = this.head;
            var newHead = this.head.next;
            this.head.next = null;
            this.head = newHead;
        }
        return oldHead.value;
    }

    // removeBack() - remove the tail of the linked list and return its value
    // again, this means this.tail will change
    // as above - is there a special case for linked lists with a minimal number of
    // nodes inside them?

    removeBack() {

        if (this.head == null && this.tail == null) {
            return undefined;
        }
        else if (this.head == this.tail) {
            this.head = null;
            this.tail = null;
            return null
        }
        else {
            var runner = this.head;
            while(runner.next != this.tail) {
                runner = runner.next;
            }
            var oldTail = runner.next;
            this.tail = runner;
            runner.next = null;
        }
        return oldTail.value
    }
    // findMinNode() {
    //     var runner = this.head;
    //     var min = this.head;
    //     while(runner.next != null) {
    //         if(runner.value < min.value) {
    //             min = runner;
    //         }
    //         runner = runner.next;
    //     }
    //     return min;
    // }
    // findMaxNode() {
    //     var runner = this.head;
    //     var max = this.head;
    //     while(runner.next != null) {
    //         if(runner.value > max.value) {
    //             max = runner;
    //         }
    //         runner = runner.next;
    //     }
    //     return max;
    // }
    findMinNode() {
        if (this.head == null) {
            return null;
        }

        var runner = this.head;
        var currentMin = runner;
        while (runner != null) {

            if (runner.value < currentMin.value) {
                currentMin = runner;
            }

            runner = runner.next;
        }

        return currentMin;
    }

    // findMaxNode() - find the node in the linked list with the highest value
    // and return that node - the node itself, not its value
    // if you find two or more nodes tied for that value,
    // return the first one you find
    findMaxNode() {
        if (this.head == null) {
            return null;
        }

        var runner = this.head;
        var currentMax = runner;
        while (runner != null) {

            if (runner.value > currentMax.value) {
                currentMax = runner;
            }

            runner = runner.next;
        }

        return currentMax;
    }
    secondToLast() {
        var runner = this.head;
        while(runner != null) {
            if(runner.next == this.tail) {
                return runner;
            }
            runner = runner.next;
        }
    }
    // moveMinToFront() - take the node with the minimum value in the list
    // and make it the head. do not just swap the values in the nodes!
    // special cases for if it's already the head? or if it's the tail?
    moveMinToFront(){

        var temp = this.findMinNode();
        var oldHead = this.head;
        var runner = this.head;
        if(temp == this.head) {
            return this;
        }
        while(runner != null) {
            if(runner.next == temp) {
                runner.next = temp.next;
                this.head = temp;
                temp.next = oldHead;
                return this;
            }
            runner=runner.next;
        }
    }

    // moveMaxToBack() - take the node with the maximum value in the list
    // and make it the tail. again, we can't just swap the values in the nodes
    // what if it's already the tail? what if it's the head?
    moveMaxToBack(){

        var temp = this.findMaxNode();
        var oldTail = this.tail;
        var runner = this.head;
        // console.log('works so far');
        if(temp == this.tail) {
            return this;
        }
        // console.log('still working');
        
        while(runner.next != null) {
            if(runner.next == temp) {
                runner.next = temp.next; 
                oldTail.next = temp;
                this.tail = temp; // Infinite loop??
                this.tail.next = null; //Infinite loop fixed... ugh
                return this;
            }
            // console.log('still??')
        runner=runner.next;
        }
        
    }

    partition(target){
        if (this.head == null && this.tail == null){
            return undefined;
        }
        if (this.head == this.tail){
            return this
        }
        var less_than = [];
        var greater_than = [];
        var in_between = [];
        var runner = this.head;
        while(runner != null){
            if( runner.value < target){
                less_than.push(runner);
            }
            if(runner.value > target){
                greater_than.push(runner);
            }
            if(runner.value == target){
                in_between.push(runner);
            }
            runner = runner.next;
        }
        var final_array = less_than.concat(in_between, greater_than);
        this.head = final_array[0];
        this.tail = final_array[final_array.length - 1];
        for (var i = 0; i < final_array.length ; ++i){
            final_array[i].next = final_array[i+1];
        }
        this.tail.next = null;
    
        return this
    
    }


}

// bonus: making these linked lists to test is kind of tedious. what if...
// what if... we had a function (not a method of the SLL class) to make them
// for us?
// generateNewList(length, min_value, max_value) -> creates a new SLL of the
// given length, with nodes containing values from min_value up to max_value
// some random integers may be helpful here

function generateNewList(length, min_value, max_value) {
    var newSLL = new SinglyLinkedList();
    for(var i = 0; i < length;i++) {
        newSLL.addToBack(Math.floor(Math.random() * (max_value - min_value + 1) + min_value));
    }
    return newSLL;
}

var newSLL = new SinglyLinkedList();

newSLL.addToBack(5);
newSLL.addToBack(4);
newSLL.addToBack(3);
newSLL.addToBack(98);
newSLL.addToBack(1);
newSLL.addToBack(8);
newSLL.addToBack(9);

console.log(newSLL.display());
// console.log(newSLL.findMinNode());
// console.log(newSLL.findMaxNode());
// console.log(newSLL.secondToLast());
newSLL.moveMinToFront()
console.log(newSLL.display());
newSLL.moveMaxToBack();
// console.log(newSLL.findMaxNode());
console.log(newSLL.display());

// console.log(newSLL.removeFront())
// console.log(newSLL.removeFront())
// console.log(newSLL.removeFront())
// console.log(newSLL.removeFront())
// console.log(newSLL.removeFront())
// console.log(newSLL.removeFront())
// console.log(newSLL.removeFront()) // return 5

// console.log(newSLL.removeBack()) // return 1

// var x = generateNewList(6,3,10);
// console.log(x.display());