class Node{
    constructor(val){
        this.val=val;
        this.left=null;
        this.right=null;
    }
}
class BST{
    constructor(){
        this.root = null;
    }
    insert(label){
        var newNode = new Node(label);
        
        if(!this.root) {
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            
            if(label===current) return undefined;
            if(label>current){
                if(current.right ===null){
                    current.right=newNode;
                    return this;
                 }
                 else
                    current=current.right;
                 
            }
            else{
                if(current.left ===null){
                current.left=newNode;
                return this;
                }
                 else
                 current=current.left;
             
            }
        }
    }
    find(label){
        if(this.root === null) return false;
        var current = this.root;
        var found = false;
        while(current &!found){
            // if(label===current.val) return true;
            if(label>current.val){
                current = current.right;

            }
            else if(label<current.val){
                current = current.left;''
            }
            else{
               found = true;
            }
           
        }
        if(!found) return undefined;
        return current;
    }
    contains(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
    BFS(){
        var data = [];
        var queue =[];
        var node = this.root;
        queue.push(this.root);
        while(queue.length){
            node = queue.shift();
            data.push(node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        console.log("bcjbijqi",data);
        return data;   
       
    }
    DFSpreorder(){
        var data = [];
        function helper(node){
            data.push(node.val);
            if(node.left) helper(node.left);
            if(node.right) helper(node.right);
        }
        helper(this.root);
        console.log("preorder",data);
        return data;
    }
    DFSinorder(){
        var data = [];
       function helper(node){
            if(node.left)  helper(node.left);
            data.push(node.val);
            if(node.right) helper(node.right);
        }
        helper(this.root);
        console.log("inorder",data);
        return data;
    }
    DFSpostorder(){
        var data = [];
       function helper(node){
            if(node.left)  helper(node.left);
            if(node.right) helper(node.right);
            data.push(node.val);
        }
        helper(this.root);
        console.log("postorder",data);
        return data;
    }
   
}
var tree = new BST();
tree.insert(10);
tree.insert(2);
tree.insert(15);
tree.insert(45);
tree.insert(30);
tree.insert(5);
tree.insert(89);
tree.insert(8);

tree.BFS();
tree.DFSinorder();
tree.DFSpostorder();
tree.DFSpreorder();
// tree.insert(25);
// tree.find(2);
// tree.root= new Node(10);
// tree.root.right=new Node(15);
// tree.root.left=new Node(9);
console.log(tree);
