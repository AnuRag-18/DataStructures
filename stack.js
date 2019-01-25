class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}
class Stack{
    constructor(){
        this.first=null;
        this.last=null;
        this.length =0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first=newNode;
            this.last=newNode
        }
        else{
            var current = this.first;
            this.first = newNode;
            this.first.next = current;
        }
        // this.length++;
        return ++this.length;
    }
    pop(){
        if(!this.first){
            return null;
        }
        if(this.first === this.last){
            this.last =null;
        }
        var temp =this.first;
        this.first = this.first.next;
        this.length--;
        return temp.value;
    }
} 
var stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);
stack.push(60);
stack.push(70);
stack.pop();
console.log(stack);
