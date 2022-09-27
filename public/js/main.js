
const createNewButton = document.getElementById("createNewBtn");
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