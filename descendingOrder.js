function descendingOrder(n){
   const arr = Array.from(String(n))
   const num = arr.sort().reverse().join('')
   const output = parseInt(num, 10)
   return output
   //console.log(parseInt(num, 10))
}
console.log(descendingOrder(0))
console.log(descendingOrder(1))
console.log(descendingOrder(111))
console.log(descendingOrder(1021))
console.log(descendingOrder(6709337532))
