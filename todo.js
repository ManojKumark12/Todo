const inputBox=document.querySelector("#input");
const button=document.querySelector('#button');
const tasks=document.querySelector("#tasks");
button.addEventListener("click",(e)=>{
let li=document.createElement("li");
li.innerText=inputBox.value;
tasks.appendChild(li);
let end=document.createElement("span");
end.textContent="DEL";
li.appendChild(end);
inputBox.value='';
})
tasks.addEventListener("click",(e)=>{
if(e.target.tagName==='LI'){
e.target.classList.toggle("checked");
}
if(e.target.tagName==="SPAN"){
e.target.parentElement.remove();
}
})
