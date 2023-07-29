
// grab the save-el paragraph and store it in a variable called saveEl;
// create a variable that contains both the count and the dash separator, i.e, "12 -"
// render the variable in the saveel using innertext


let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

let count =  0;


function increment(){
    count += 1
    countEl.textContent = count;
    addCount.textContent = count;
}

function decrement(){
    count -= 1;
    countEl.textContent = count;
   

}



function save(){
    let countStr = count + " - "
  
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count -= count;

    
}


console.log(count)
console.log(saveEl);































