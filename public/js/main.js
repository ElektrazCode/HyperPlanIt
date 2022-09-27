
const createNewButton = document.getElementById("createNewBtn");
const addTaskButton = Array.from(document.querySelectorAll("#addTaskBtn"));
console.log(addTaskButton);
createNewButton.addEventListener('click', ()=>{
    
    const createNewSection = document.getElementById("createNewSec");
    
    if(createNewSection.style.display === "block"){
        createNewSection.style.display = "none";
        createNewButton.innerText = "Create New";
    }
    else{ 
        createNewSection.style.display = "block";
        createNewButton.innerText = "Close Form";
    }
  });

addTaskButton.forEach(btn => btn.addEventListener('click', ()=>{
    const addTaskSection = btn.parentNode.querySelector("#addTaskSec");
    
    if(addTaskSection.style.display === "block"){
        addTaskSection.style.display = "none";
    }
    else{ 
        addTaskSection.style.display = "block";
    }
  }));