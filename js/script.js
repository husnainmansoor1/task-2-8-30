// alert('error')

let user =document.querySelector('.username')
let pass=document.querySelector('.password')
let btn = document.querySelector('.btn')

btn.addEventListener('click',()=>{
   
console.log("username: " + user.value)
console.log("password: " + pass.value)
   

})