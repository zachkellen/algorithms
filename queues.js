class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class SLLQueue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.counter = 0;
    }
    enqueue(value) {
        var new_node = new ListNode(value);
        if (this.head == null) {
            this.head = new_node;
            this.tail = new_node;
            ++this.counter;
        }

        else {
            this.tail.next = new_node;
            this.tail = new_node;
            ++this.counter;
        }
    }
    dequeue() {
        if (this.head == null) {
            return null;
        }
        else if (this.head == this.tail) {
            var temp = this.head;
            this.head = null;
            this.tail = null;
            --this.counter;
            return temp.value;
        }

        var temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        --this.counter;

        return temp.value;

    }
    front() {
        return this.head.value;
    }

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
    isEmpty() {
        return (this.head == null)
    }
    size() {

        return this.counter

    }
    compareQueues(queue2) {

        if (this.size() != queue2.size()) {
            return false
        }
        var runner_this = this.head
        var runner_queue2 = queue2.head

        while (runner_this != null) {

            if (runner_this.value != runner_queue2.value) {
                return false;
            }
            runner_this = runner_this.next
            runner_queue2 = runner_queue2.next
        }
        return true;
    }

    // isPalindrome() - return true if the values of the queue form a palindrome,
    // and false otherwise. don't put the values of the queue into an array!
    // (or turn them into a string, either - your queue listnode values
    // may not always be able to be turned into a string)
    // do not modify the queue state in any way
    // also don't add some kind of tricky extra queue methods - they're not needed
    // maybe... use a stack? you'll need to copy that class into this file
    // you ain't gotta tho nbd it's just a suggestion

    // isPalindrome() {
    // // Check head and tail value first
    // if (this.head.value != this.tail.value) {
    //     return false;
    // }
    // var runner = this.head;
    // var runner2 = this.head
    // var marker = this.tail;
    // while(runner.value != null) {
    //     if (runner.value != marker.value) {
    //         return false
    //     }
    //     runner = runner.next
    //     console.log("runner =" , runner)
    //     console.log("runner2 =" , runner2)
    //     console.log("marker =" , marker)
    //     while(runner2.next != marker) {
    //         runner2 = runner2.next
    //     }
    //     marker = runner2
    // }
    // return true;
    // }

    isPalindrome() {
        if (this.head == null) {
            return false;
        }
        if (this.head.value != this.tail.value) {
            return false;
        }
        
        var runner = this.head;
        var stack = new SLLStack()
        while(runner != null) {
            stack.push(runner.value);
            runner = runner.next;
        }
        var runner2 = this.head;
        while(runner2 != null) {
            // console.log(runner2.value)
            // console.log(stack.head.value)
            // console.log("")
            if(runner2.value != stack.head.value) {
                return false;
            }
            runner2 = runner2.next;
            stack.pop();
        }
        return true;
    }
}

class SLLStack {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // push(value) - adds the given value to the stack
    push(value) {
        var newNode = new ListNode(value)
        if(this.head == null && this.tail == null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            newNode.next = this.head;
            this.head = newNode;
        }
    }
    
    pop() {
        if(this.head == null && this.tail == null) {
            return undefined
        }
        else if (this.head == this.tail) {
            var temp = this.head;
            this.head = null;
            this.tail = null;
            return temp.value;
        }
        else {
            var temp = this.head.next;
            var oldHead = this.head;
            this.head.next = null;
            this.head = temp;
        }
        return oldHead.value;
    }

    // top() - returns the top value without removing it
    top() {
        if(this.head == null && this.tail == null) {
            return undefined
        }
        else {
            return this.head.value;
        }
    }

    // contains(target) - returns true if the target value is in the stack,
    // false if not
    contains(target) {
        if(this.head == null && this.tail == null) {
            return false;
        }
        var runner = this.head;
        while(runner != null) {
            if(runner.value == target) {
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    // isEmpty() - returns true if the stack is empty, false otherwise
    isEmpty() {
        // if(this.head == null && this.tail == null) {
        //     return true;
        // }
        // return false;
        return (this.head == null && this.tail == null);
    }


    size() {
        if(this.head == null && this.tail == null) {
            return 0;
        }
        var runner = this.head;
        var counter = 0;
        while(runner != null) {
            counter++;
            runner = runner.next;
        }
        return counter;
    }
    
}

var qA = new SLLQueue
qA.enqueue('hi')
qA.enqueue('hello')
qA.enqueue('bye')
qA.enqueue('hello')
qA.enqueue('hi')
// qA.enqueue(5)
// qA.enqueue(4)
// qA.enqueue(3)
// qA.enqueue(2)
// qA.enqueue(1)

console.log(qA.isPalindrome())