class MaxBinaryHeap{
    constructor(){
        this.values = [];
    }
    insert(element){
        this.values.push(element);
        this.bubble();
    }
    bubble(){
        let idx = this.values.length-1;
        const element = this.values[idx];
        while(idx>0){
            let parentIdx = Math.floor((idx-1)/2);
            let parent = this.values[parentIdx];
            if(parent>element) break;
            this.values[parentIdx]= element;
            this.values[idx] = parent;
            idx = parentIdx;
             }
       }
}
let heap = new MaxBinaryHeap();
heap.insert(20);
heap.insert(26);
heap.insert(23);
heap.insert(12);
heap.insert(100);
heap.insert(60);heap.insert(70);
heap.insert(50);
heap.insert(40);
heap.insert(30);
console.log(heap);
