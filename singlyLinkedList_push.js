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
        shift(){
            if(this.head == 0){
                return undefined;
            }
            var currentHead=this.head;
            this.head = currentHead.next;
            this.length--;
            if(this.length===0){
            this.tail=null;
            }
            return currentHead;
        }
        unshift(val){
            var newNode = new Node(val);
            if(!this.head){
                this.head=newNode;
                this.tail=this.head;
             }
             else{
                 newNode.next=this.head;
                 this.head = newNode;
             }
             this.length++;
             return this;
            }

        get(index){
          if(index >=this.length && index<0){
              return null;
          }
          var counter =0;
          var current = this.head;
          while(counter !==index){
              current = current.next;
              counter++;
          }
          return current;

        }    
}
var list = new LinkedList();
list.push("hello");
list.push('hi AnuRag');
list.push("rao");
// list.pop('rao');
// list.shift('hello');
// list.unshift('siddhu');
list.get(0);

console.log(list);