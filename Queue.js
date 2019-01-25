class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}
class Queue{
    constructor(){
        this.first=null;
        this.last = null;
        this.length =0;
    }
    enqueue(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;

        }
        else {
           this.last.next = newNode;
           this.last = newNode;
        }
        // this.length++;
        return ++this.length;
    }
    dequeue(){
        if(!this.first){
            return null;
        }
        if(this.first === this.last){
            this.first = null;
        }
        var temp = this.first ;
        this.first = this.first.next;
        this.length++;
        return temp.val;
    }
}
var queue = new Queue();
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(50);
queue.enqueue(40);
queue.dequeue();

console.log(queue);