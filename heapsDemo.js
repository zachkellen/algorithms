class MinHeap{
    constructor(){
        this.heap = ["it's a secret to everybody!"];
    }

    insert(val){
        this.heap.push(val);
        this.shiftUp();
    }

    shiftUp(){
        if(this.heap.length > 1){
            let currentIndex = this.heap.length - 1;

            while(this.heap[currentIndex] < this.heap[Math.floor(currentIndex/2)] && currentIndex > 1){
                //swap currentIndex with its parent
                let parentIndex = Math.floor(currentIndex/2);
                let temp = this.heap[currentIndex];
                this.heap[currentIndex] = this.heap[parentIndex];
                this.heap[parentIndex] = temp;
                //set current to the index it was moved to
                currentIndex = parentIndex;
            }
        }
    }

    remove(){
        if(this.heap.length === 1)
            return null;

        const min = this.heap[1];

        const lastNode = this.heap.pop();

        if(this.heap.length === 1)
            return min;

        this.heap[1] = lastNode;

        this.shiftDown();

        return min;
    }

    shiftDown(){
        let currentIndex = 1;

        let leftChildIndex = currentIndex * 2;

        while(leftChildIndex < this.heap.length){
            
            console.log(this.heap);
            let rightChildIndex = leftChildIndex + 1;
            let smallerIndex = leftChildIndex;

            if(rightChildIndex >= this.heap.length && this.heap[rightChildIndex] < this.heap[leftChildIndex]){
                smallerIndex = rightChildIndex;
            }

            if(this.heap[currentIndex] < this.heap[smallerIndex]){
                break;
            }

            console.log(`swap value ${this.heap[currentIndex]} with ${this.heap[smallerIndex]} ${smallerIndex}`)
            let temp = this.heap[currentIndex];
            this.heap[currentIndex] = this.heap[smallerIndex];
            this.heap[smallerIndex] = temp;

            currentIndex = smallerIndex;

            leftChildIndex = currentIndex * 2;

        }
    }

    printMe(){
        // for(let i = 1; i < this.heap.length; ++i){
        //     console.log(this.heap[i]);
        // }
        const [ , ...rest] = this.heap;
        console.log(rest);
    }
}

const testHeap = new MinHeap();

testHeap.insert(1);
// testHeap.printMe();
testHeap.insert(5);
// testHeap.printMe();
testHeap.insert(7);
// testHeap.printMe();
testHeap.insert(9);
// testHeap.printMe();
testHeap.insert(3);
// testHeap.printMe();
testHeap.insert(4);
// testHeap.printMe();
testHeap.insert(-1);
testHeap.printMe();

testHeap.remove();
testHeap.printMe();
// testHeap.remove();
// testHeap.printMe();