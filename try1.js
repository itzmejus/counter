
let countEl = document.getElementById("count-el")
let  saveEl= document.getElementById("save-el")
let count =0
function increment(){
    
    count=count+1
    countEl.innerText=count
    console.log(count)

}
function decrement(){
    count=count-1
    countEl.innerText=count
    console.log(count)
}
function save(){

  
    saveEl.innerText="previous count is  "+count
    console.log(saveEl.textContent )
}


