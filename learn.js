//reverse
// function reverse(a) {
//     return a.split("").reverse().join("")
// }
// const result = reverse("Hello")
// console.log(result)


//remove duplicate

// function duplicate(b) {
//     return [...new Set(b)]
// }

// const result_1 = duplicate([1, 1, 1, 2])
// console.log(result_1)


// or

// const array = [1, 2, 2, 2, 3];

// const result_2 = array.filter((value, index) => {
//     return array.indexOf(value) === index
// })

// console.log(result_2)



//largest

// const a = [10, 20, 30];

// const result_4 = a.sort((a, b) => b - a)

// console.log(result_4[0])

// or

// const result_5=a
// console.log(result_5[2])




//flatten a nested array

// function flat(a){
//     return a.flat(Infinity)
// }

// console.log(flat([1, [2, [3, 4]], 5]))


// //curring function

// function curry(a){
//     return function(b){
//         return function(c){
//             return a + b + c;
//         }
//     }
// }

// console.log(curry(1)(2)(2))


// closure

// function outer(){
//     let count=0;
//     return function(){
//         count++;
//         return count
//     }
// }
// const result_6=outer();
// console.log(result_6());
// console.log(result_6());
// console.log(result_6());



//reverse the each word sentences


// function final_reverse(word){
//     return word.split(" ").map(item=>item.split("").reverse().join("")).join(" ");
// }

// console.log(final_reverse("Hello EveryBody And Welcome"))



//remove duplicate without Build in method

// var str="Hello";

// var reversed="";

// for (let i=str.length-1;i>=0;i--){
//     reversed+=str[i];

// }

// console.log(reversed)




//remove the duplicate without builin method


// var sring=[1,1,2,2]
  
// var result= sring.filter((value,index)=>{
//   return  sring.indexOf(value)===index
//  })

// console.log(result)


var duplicate="aabbccdd";

var original="";

for(let i=0;i<duplicate.length;i++){
    let isduplite=false
    for(let j=0;j<original.length;j++){
        if(duplicate[i]===original[j]){
            isduplite=true;
            break
        }
    }
    if(!isduplite){
        original+=duplicate[i]
    }
}


console.log(original)








