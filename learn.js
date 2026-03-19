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


// var duplicate="aabbccdd";

// var original="";

// for(let i=0;i<duplicate.length;i++){
//     let isduplite=false
//     for(let j=0;j<original.length;j++){
//         if(duplicate[i]===original[j]){
//             isduplite=true;
//             break
//         }
//     }
//     if(!isduplite){
//         original+=duplicate[i]
//     }
// }


// console.log(original)


// Flat without using flatmap


// const nested=[1, [2, 3], [4, 5]];

// const flat=[];

// for(let i=0;i<nested.length;i++){

//     const result=nested[i]

//     if(Array.isArray(result)){
//         for(let j=0;j<result.length;j++){
//             flat.push(result[j])
//         }
//     }
//     else{
//         flat.push(result)
//     }
// }


// console.log(flat);




// add the value and find the index
// function result(arr){
//     let index=[];
//     let sum=0;


//     for(let i=0;i<arr.length;i++){

//         index.push(i);
//         sum+=arr[i]

//         if(sum===125){
//             return index
//         }
//         if(index.length>3){
//             index.shift()
//         }
     
//     }
//        return index
// }
// const arr=[15,20,35,60,30]
// console.log(result(arr))


// same but logic change
// function main_result(){
// let arr_1=[2,3,6,7,8,9]

// for(let i=0;i<arr_1.length;i++){
//     for(let j=i+1;j<arr_1.length;j++){
//         for(let k=j+1;k<arr_1.length;k++){
//             if(arr_1[i]+arr_1[j]+arr_1[k]===11){
//             return[i,j,k]
//         }
//         }
        
//     }
// }
// }

// console.log(main_result())







// function add(){
//     const array=[2,4,5,7,8,4];


//     for(let i=0;i<array.length;i++){
//         for(let j=i+1;j<array.length;j++){
//             if(array[i]+array[j]===6){
//                 return [i,j]
//             }
//         }
//     }

// }



// console.log(add())



let string="Hello";

let reverseed="";

for(let i=string.length-1;i>=0;i--){
    reverseed+=string[i]
}


console.log(reverseed)












