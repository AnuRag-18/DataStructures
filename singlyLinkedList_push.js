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
   pop(){
       if(!this.head) return undefined;
       var current = this.head;
       var newTail= current;
       while(current.next){
            newTail= current;
            current=current.next;
          }
          this.tail = newTail;
          this.tail.next==null;
          this.length--;
          return current;
          if(this.length===0){
              this.head=null;
              this.tail=null;
          }
          
        }
}
var list = new LinkedList();
list.push("hello");
list.push('hi AnuRag');
list.push("rao");
list.pop('rao');
console.log(list);