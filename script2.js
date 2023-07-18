import users from "./users.js";

// 1. Check if user with such name exists.
// 2. Adding element to the array.
// 3. Remove duplicate element(s) in the array
// 4. Concatenating the array


// 1. ----Check if user with such name exists.----

 //level 0 (using for loop)
/*
let isNameExist=(name,users)=>{
    let exist=false;
    for(let i=0;i<users.length;i++){
        if(users[i].name === name){
            exist=true;
        }
    }
    return exist;
}

*/

//level 1 (using find method)
 /* 
const isNameExist=(name,users)=>{
    const user=users.find((user)=>user.name === name);
    return Boolean(user);
}
*/

//level 2 (using findIndex)
/*
const isNameExist=(name,users)=>{
    const index=users.findIndex((user)=>user.name === name);
    return index >=0;
}
*/

//level 3 (using some)

/*
const isNameExist=(name,users)=>{
    const user=users.some((user)=>user.name ===name);
    return user;
}
*/

// const box=document.getElementById('box');
// box.innerHTML=isNameExist('Mohan',users);


// 2. ------Adding element to the array---------

//using arr.push(); -it modifies the original array

//const arr=[4,5];
/*
const addToArr=(arr,ele)=>{
    arr.push(ele)
    return arr;
}
const newArr=(addToArr(arr,6));
console.log(newArr);
console.log(arr) //  Original array modified which was not desirable 

*/

// using spread operator (without modifying the original array)
/*
const addToArr=(arr,ele)=>{
    return [...arr,ele];
}
console.log(addToArr(arr,7))
console.log(arr);
*/

//3. ---------Remove duplicate elements in the Array----------

// the Set object is a built-in Javscript data structure that allows you to store unique values of any data type.
//level 0
/*
const arr=[2,3,6,4,1,6,8,2];

function uniqueArr(){
    const uniqueElm=[];
    arr.forEach((elm)=>{
     if(!uniqueElm.includes(elm)){
        uniqueElm.push(elm)
     }   
    })
    return uniqueElm;
}
console.log(uniqueArr(arr));
*/

//level 1 (using Set method)
 /*
const arr=[2,3,6,4,1,6,8,2];
function uniqueArr(){
return [...new Set(arr)];
}

console.log(uniqueArr(arr));
console.log(arr); //original array did not modified
*/


// level 2 (using reduce method)
/*
   const arr=[1,2,3,5,6,2,5];
   const uniqueArr=(arr)=>{
    return arr.reduce((acc,elm)=>{
return acc.includes(elm)?acc:[...acc,elm]
    },[])
   }

   console.log(uniqueArr(arr));
   console.log(arr); // original array remains unchanged

*/

   //4.--------concatenating the array-----------

//level 0,1

/*
   const mergeArr=(arr1,arr2)=>{
//arr1.push(...arr2)
//return arr1; ---arr1 modified here by using push

return [...arr1,...arr2]; // * original arr1 is not modified
   }

   const arr1=[9];
   const arr2=[8,7,6];
const result=mergeArr(arr1,arr2);
console.log(result,arr1,arr2); 

*/

//level2 (using concat method)

const mergeArr=(arr1,arr2)=>{
    return arr1.concat(...arr2);
}

const arr1=[2,3,4];
const arr2=[5,6];
const result=mergeArr(arr1,arr2);
console.log(result,arr1,arr2);





