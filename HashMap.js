function HAshMap(key,arrlength){
    var total = 0;
    primeNumber = 31;
    for(var i=0;i<Math.min(key.length);i++){
        var char = key[i];
        var value = char.charCodeAt(0)-96;
        total = (total*primeNumber+value)%arrlength;
    }
    return total;
}
console.log(HAshMap("hello",13));
 