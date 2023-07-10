import users from "./users.js";


// 1. Write a program to get an array of names from a given array of users.

//2. Get back only active users.

//3. Sort users by age in descending order.




// -----------------Solution 1-----------------------
// using for loop (level 1):


let Names=[];

/*
for(let i=0;i<users.length;i++){
    Names.push(users[i].name);
    //console.log(Names)
}
*/



// using forEach method
//* forEach is an iterative method that does not return anything.It always return undefined and is unchainable. It does not mutates the array. It expects a synchronous function -it does not wait for promises.

/*
users.forEach((user)=>{
    Names.push(user.name)
    //console.table(Names);
})

*/

//   ----------Solution 2------------

//using for loop

/*
for (let i=0;i<users.length;i++){
    if(users[i].isActive){
        Names.push(users[i].name)
    }
    console.log(Names);
}

*/
//using forEach method

/*
users.forEach((user)=>{
    if(user.isActive){
    Names.push(user.name)
    }
})
*/


//using map method:
//It returns a new array.
/*
Names=users.filter((user)=>user.isActive).map((user)=>user.name)

console.log(Names);
*/

//-------------Solution 3------------

// Sort Function

//in ascending age order
/*
users.sort((user1,user2)=>
    user1.age < user2.age ? -1 :1);
console.log(users);
*/

//in descending age order
/*
users.sort((user1,user2)=>
    user1.age < user2.age ? 1 :-1);
console.log(users);

*/

Names=users.filter((user)=>user.isActive).sort((user1,user2)=>
user1.age < user2.age ? 1 :-1).map((user)=>user.name)

console.log(Names);


let box=document.getElementById('box');
box.innerHTML=Names;