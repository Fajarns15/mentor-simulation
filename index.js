// reference html in JavaScript
const formTask=document.querySelector(".form-task");
// menambahkan event listener di element form
formTask.addEventListener("submit",(event)=>{
  event.preventDefault();

// reference html  input in JavaScript
  const inputForm = document.querySelector(".input-form");

// reference html element url
const wrapperList = document.querySelector(".task-list-wrapper");
// create li using js

const taskList= document.createElement("li");

// masukkam input value ke li
taskList.innerHTML=inputForm.value;

// append <>ke<ul>
wrapperList.append(taskList);

inputForm.value='';
});
