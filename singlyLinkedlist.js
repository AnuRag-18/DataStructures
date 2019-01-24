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
          if( index<0 || index >=this.length){
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
       set(index,value){
           var foundNode =this.get(index);
           if(foundNode){
               foundNode.val = value;
               return true;
           }
           return false;
       }
       insert(index,value){
         if(index<0 || index >this.length) return false;
         if(index === this.length) return !!this.push(value);
         if(index === 0) return !!this.unshift(value);
         var newNode = new Node(value);
         var prev = this.get(index-1);
         var temp = prev.next;
         prev.next = newNode;
         newNode.next = temp;
         this.length++;
         return true;
       }
       remove(index){
           if(index <0 || index>=this.length ) return undefined;
           if(index ===this.length-1) return this.pop();
           if(index === 0 ) return this.shift();
           var previousNode = this.get(index-1);
           var removed = previousNode.next;
           previousNode.next = removed.next;
           this.length--;
           return removed;

       }
       print(){
         var arr = [];
         var current = this.head;
         while(current){
             arr.push(current.value)
             current = current.next;
         }
         console.log(arr);
       }
       reverse(){
           var node = this.head ;
           this.head = this.tail;
           this.tail = node ;
           var next;
           var prev = null;
           for(var i=0;i<this.length;i++){
               next = node.next ;
               node.next = prev;
               prev = node;
               node = next;
           }
            return this;
           
       }
}
var list = new LinkedList();
list.push(20);
list.push(30);
list.push(40);
// list.pop('rao');
// list.shift('hello');
// list.unshift('siddhu');
// list.get(0);
// list.set(0,8);
// list.set(1,8);
list.insert(0,50);
list.insert(4,25);
list.insert(2,5);
list.insert(3,46);
// list.remove(0);
// list.remove(5);
list.print();
list.reverse();
list.print();

console.log(list);