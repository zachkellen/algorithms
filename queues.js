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

}

// compareQueues (even-numbered group)
// return true if the queues have the same values in the same order
// false otherwise
// important: this is a non-destructive operation!
// do not modify either queue
// function compareQueues(queue1, queue2) {

// }
