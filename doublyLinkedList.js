class Node{
    constructor(value){
    this.value=value;
    this.next=null;
    this.prev = null;
    } 
}
class DoublyList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length =0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail= newNode;
        }
        else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head ) return undefined;
        if(this.length===1){
            this.tail=null;
            this.head =null;
        }
        else{
        var temp = this.tail;
        this.tail= temp.prev;
        this.tail.next= null;
        temp.prev = null;
        }
        this.length--;
        return temp;
    }
    shift(){
        var oldHead=this.head;
        if(!this.head){
            this.head =null;
            this.tail=null;
        }
        else{
            this.head=oldHead.next;
            this.head.prev=null;
            oldHead.next=null;

        }
        this.length--;
        return oldHead;
    }
    unshift(value){
        var newNode = new Node(value);

        if(!this.head){
            this.head = newNode;
            this.tail=newNode;
        }
        else{
            //  var temp = this.head;
            //  this.head= newNode;
            //  newNode.prev =null;
            //  newNode.next=temp;
            this.head.prev = newNode;
            newNode.next= this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index){
         if(index<0 || index>=this.length){
             return undefined;
         }
         var count,current;
         if(index<=this.length/2){
             count =0;
             current = this.head;
             while(count!==index){
               current = current.next;
               count++;
             }
         }
         else {
             count = this.length-1;
             current = this.tail;
             while(count!==index){
                 current= current.prev;
                 count--;
             }
         }
         return current;
    }
    set(index,value){
        var valid=this.get(index);
        if(valid!=null){
         valid.value=value
        return true
          }
          return false;
    }
    insert(index,value){
        if(index<0 || index>this.length) return false;
        if(index===this.length) return this.push(value);
        if(index===0) return this.unshift(value);
        var newNode = new Node(value);
        var beforeNode = this.get(index-1);
        var afterNode =beforeNode.next;
        beforeNode.next=newNode;
        newNode.prev= beforeNode;
        newNode.next=afterNode;
        afterNode.prev=newNode;
        this.length++;
        return true;

    }
    remove(index){
        if(index<0 || index>=this.length) return false;
        if(index===0) return this.shift();
        if(index===this.length-1)return this.pop();
        var removedNode = this.get(index);
        var beforeNode = removedNode.prev;
        var afterNode=removedNode.next;
        beforeNode.next=afterNode;
        afterNode.prev=beforeNode;

        // removedNode.prev.next=removedNode.next;

        // removedNode.next.prev=removedNode.prev;

        removedNode.next=null;
        removedNode.prev=null;
        this.length--;
        return removedNode;
         
    }

}
var list = new DoublyList();
list.push(10);
list.push(30);
list.push(20);
list.push(22);
list.push(41);
list.set(1,99);
list.insert(0,44);
list.insert(1,88);
list.remove(3);

// list.shift();

// list.unshift(5);// list.pop(30);
// list.unshift(15);
// console.log("bkbhsdho",list.get(2));
console.log( list);