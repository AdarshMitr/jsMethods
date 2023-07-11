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


// 2. ------Adding element to the array------

//using arr.push(); -it modifies the original array

const arr=[4,5];
/*
const addToArr=(arr,ele)=>{
    arr.push(ele)
    return arr;
}
const newArr=(addToArr(arr,6));
console.log(newArr);

*/

// using spread operator (without modifying the original array)

const addToArr=(arr,ele)=>{
    return [...arr,ele];
}
console.log(addToArr(arr,7))
console.log(arr);
