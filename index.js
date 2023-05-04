let text = document.getElementById("text")
let list = document.getElementById("list");
let button = document.getElementById("button");

button.addEventListener('click', () => {
    let paragraph = document.createElement("p");
    let deleteButton = document.createElement('button');
    let checkbox = document.createElement("input");
    let block = document.createElement("div");
    paragraph.style.lineHeight = "0px";
    paragraph.style.marginLeft = '10px';
    block.classList.add('grid');
    checkbox.type = 'checkbox';
    deleteButton.innerText = "delete";
    deleteButton.addEventListener('click', () => {
        list.removeChild(block);                
    })
    paragraph.innerText = text.value;
    block.appendChild(checkbox);
    block.appendChild(paragraph);
    block.appendChild(deleteButton);
    list.appendChild(block);
    
    
    text.value = "";  
})
