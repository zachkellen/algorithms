class BSTNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}
class BST {
    constructor() {
        this.root = null
    }

    add(value) {
        var new_node = new BSTNode(value);
        if(this.root == null){
            this.root = new_node;
            return this;
        }
        let runner = this.root;
        while(runner){
            if(runner.value > new_node.value){
                if(runner.left == null) {
                    runner.left = new_node;
                    return this;
                }
                runner = runner.left;
            } 
            else if(runner.value < new_node.value) {
                if(runner.right == null){
                    runner.right = new_node;
                    return this;
                }
                runner = runner.right;
            }
            // console.log(runner)
        }
    }

    findMin() {
        if(this.root == null){
            return null;
        }
        let runner = this.root;
        while(runner){
            if(runner.left == null){
                return runner.value;
            }
            runner = runner.left;
        }
    }

    findMax() {
        if(this.root == null){
            return null;
        }
        let runner = this.root;
        while(runner){
            if(runner.right == null){
                return runner.value;
            }
            runner = runner.right;
        }
    }

    print(){
        if(this.root == null){
            return null;
        }
        let runner = this.root;
        console.log(runner.value);
        console.log("");
        console.log(runner.left.value)
        console.log(runner.right.value)
    }

    depthFirst(runner = this.root){
        if(runner){
            console.log(runner.value)
            this.depthFirst(runner.left)
            this.depthFirst(runner.right)
        }
    }

    breadthFirst(runner = this.root){
        function bf(queue) {
            var newQueue = [];
            
        }
    }
}

let test_bst = new BST();
test_bst.add(34);
// console.log("34 done")
test_bst.add(17);
// console.log("17 done")
test_bst.add(10);
// console.log("10 done")
test_bst.add(22);
// console.log("22 done")
test_bst.add(41);
// console.log("41 done")
test_bst.add(37);
// console.log("37 done")
test_bst.add(62);
// console.log("62 done")
console.log("*************")
test_bst.depthFirst();
console.log("*************")
console.log(test_bst.findMax());
console.log(test_bst.findMin());
