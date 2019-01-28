// function HAshMap(key,arrlength){
//     var total = 0;
//     primeNumber = 31;
//     for(var i=0;i<Math.min(key.length);i++){
//         var char = key[i];
//         var value = char.charCodeAt(0)-96;
//         total = (total*primeNumber+value)%arrlength;
//     }
//     return total;
// }
// console.log(HAshMap("hello",13));
 
class HashTable{
   constructor(size = 53){
       this.KeyMap = new Array(53);
   }
   _hash(key){
      var total = 0;
      var primeNumber = 31;
      for(var i =0;i<Math.min(key.length,100);i++){
          var char = key[i];
          var  value = char.charCodeAt(0)-96;
          total = (total*primeNumber+value)%this.KeyMap.length;

      }
      return total;
   }
   set(key,value){
       var index =  this._hash(key);
       if(!this.KeyMap[index]){
           this.KeyMap[index]=[];
       }
       this.KeyMap[index].push([key,value]);
   }
   get(key){
       var index = this._hash(key);
       if(this.KeyMap[index]){
           for(var i =0;i<this.KeyMap[index].length;i++){
               if(this.KeyMap[index][i][0]===key){
                   return this.KeyMap[index][i][1];
               }
           }
       }
       return undefined;
   }
   values(){
       var valuesArr= []
       for(var i =0;i<this.KeyMap.length;i++){
           if(this.KeyMap[i]){
           for(var j = 0;j<this.KeyMap[i].length;j++){
            //    return this.KeyMap[i][j][1];
            if(!valuesArr.includes(this.KeyMap[i][j][1])){
                valuesArr.push(this.KeyMap[i][j][1]);
            }
           }
        }
       }
       return valuesArr; 
   }
   keys(){
    var keysArr= []
    for(var i =0;i<this.KeyMap.length;i++){
        if(this.KeyMap[i]){
        for(var j = 0;j<this.KeyMap[i].length;j++){
         //    return this.KeyMap[i][j][1];
         if(!keysArr.includes(this.KeyMap[i][j][0])){
             keysArr.push(this.KeyMap[i][j][0]);
         }
        }
     }
    }
    return keysArr; 
   }

}

let ht = new HashTable(17);
ht.set("maroon","#800000")
ht.set("yellow","#FFFF00")
ht.set("olive","#808000")
ht.set("salmon","#FA8072")
ht.set("lightcoral","#F08080")
ht.set("mediumvioletred","#C71585")
ht.set("plum","#DDA0DD")
var B=ht.get("yellow")
console.log(ht);
console.log(B)
var A = ht.values();
console.log(A);
var c = ht.keys();
console.log(c);
ht.keys().forEach(function(key){
    console.log(ht.get(key));
});