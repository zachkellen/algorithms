class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addToFront(value) {
        var new_node = new ListNode(value);
        if (this.head == null) {
            this.head = new_node;
            this.tail = new_node;
        }
        else {
            new_node.next = this.head;
            this.head.previous = new_node;
            this.head = new_node;
            
        }
    }

    addToBack(value) {
        var new_node = new ListNode(value);
        if (this.head == null) {
            this.head = new_node;
            this.tail = new_node;
        }
        else {
            this.tail.next = new_node;
            new_node.previous = this.tail;
            this.tail = new_node;
        }
    }

    display() {
        if (this.head == null) {
            return null;
        }

        var output = this.head.value;
        var runner = this.head.next;

        while (runner != null) {
            output += " - " + runner.value;
            runner = runner.next;
        }

        return output;
    }

    displayReverse() {
        if (this.head == null) {
            return null;
        }

        var output = this.tail.value;
        var runner = this.tail.previous;

        while (runner != null) {
            output += " - " + runner.value;
            runner = runner.previous;
        }

        return output;
    }

    removeFront() {
        if (this.head == null) {
            return null;
        }
        else if (this.head == this.tail) {
            var temp = this.head;
            this.head = null;
            this.tail = null;
            return temp.value;
        }

        var temp = this.head;
        this.head = this.head.next;
        this.head.previous = null;
        temp.next = null;

        return temp.value;

    }

    removeBack() {
        if (this.head == null) {
            return null;
        }

        else if (this.head == this.tail) {
            var temp = this.head;
            this.head = null;
            this.tail = null;
            return temp.value;
        }

        var temp = this.tail;
        this.tail = this.tail.previous;
        this.tail.next = null;
        temp.previous = null;

        return temp.value;
    }

    reverse() {
        let runner = this.tail;
        while(runner != null){
            let temp = runner.next;
            runner.next = runner.previous;
            runner.previous = temp;
            runner = runner.next;
        }
        let temp = this.head;
        this.head = this.tail;
        this.tail=temp;
    }

    recurseReverse(runner = this.head) {
        if(runner != null){
            let nextJump = runner.next;
            let temp = runner.next;
            runner.next = runner.previous;
            runner.previous = temp;
            this.recurseReverse(nextJump)
        } else {
            let temp = this.head;
            this.head = this.tail;
            this.tail=temp;
            return this;
        }
    }
}

let testDLL = new DoublyLinkedList();
testDLL.addToBack(1);
testDLL.addToBack(2);
testDLL.addToBack(3);
testDLL.addToBack(4);
testDLL.addToBack(5);
console.log(testDLL.display());
testDLL.recurseReverse();
console.log(testDLL.display());
testDLL.recurseReverse();
console.log(testDLL.display());
testDLL.recurseReverse();
console.log(testDLL.display());
testDLL.reverse();
console.log(testDLL.display());
