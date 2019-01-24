class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class LinkedList{
   constructor(){
       this.head = null;
       this.tail = null;
       this.length = 0;
   }
   push(val){
       var newNode = new Node(val);
       if(!this.head){
           this.head=newNode;
           this.tail=this.head;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;

        }
        this.length++;
        return this;
   }
}
var list = new LinkedList();
list.push("hello");
list.push('hi AnuRag');
console.log(list);