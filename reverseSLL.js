class Node {
    constructor(valueInput) {
        this.value = valueInput;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    addToFront(value) {
        var node = new Node(value);
        node.next = this.head;
        this.head = node;
        return this;
    }
display() {
        let result = "";
        let runner = this.head;
        while (runner != null) {
            result += `${runner.value}--> `;
            runner = runner.next;
        }
        console.log(result);
    }

reverseList() {
    if(this.head == null || this.head.next == null) return; 

    let backRunner = this.head;
    let frontRunner = backRunner.next;
    let temp;
    if(frontRunner.next!=null) temp = frontRunner.next;
    else temp=frontRunner;

    while (backRunner != frontRunner) {
        frontRunner.next = backRunner;
        if(backRunner==this.head) backRunner.next = null;
        backRunner = frontRunner;
        frontRunner = temp;
        if(temp.next != null) temp = temp.next;
    }
    this.head = frontRunner;
}
}

var new_sll = new SLL();
new_sll.addToFront(5);
new_sll.addToFront(4);
new_sll.addToFront(3);
new_sll.addToFront(2);
new_sll.addToFront(1);
new_sll.display();
new_sll.reverseList()
new_sll.display();