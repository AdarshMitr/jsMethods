import users from "./users.js";


// 1. Write a program to get an array of names from a given array of users.

//2. Get back only active users.

//3. Sort users by age in descending order.


let Names=[];

for(let i=0;i<users.length;i++){
    Names.push(users[i].name);
    console.log(Names)
}

let box=document.getElementById('box');
box.innerHTML=Names;