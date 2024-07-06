function createGrid(size){
for(let i=0;i<size;i++){
    const row=document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);

    for(let j=0;j<size;j++){
        const cell=document.createElement("div");
        cell.classList.add("cell");
        cell.addEventListener("mouseover",hoverCell);
        row.appendChild(cell);
    }
}
}

function clearGrid(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}

function randomizeColor(){
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + randomColor;
}


function hoverCell(e) {
    if (e.target.style.backgroundColor === "") {
        e.target.style.backgroundColor = randomizeColor();
        e.target.style.opacity = 0.1;
        e.target.hoverCount = 1;
    } else {
        let hoverCount = e.target.hoverCount;
        if (hoverCount < 10) {
            hoverCount++;
            e.target.style.opacity = hoverCount * 0.1;
            e.target.hoverCount = hoverCount;
        } else {
            e.target.style.opacity = "1";
        }
    }
}


const container=document.querySelector(".container");
const resetBtn=document.querySelector(".resetBtn");

let size=16;


resetBtn.addEventListener("click",()=>{
    size=Number(prompt("Choose the number of cells between(1-100)",16));
    if(size>=1 && size<=100){
        clearGrid();
        createGrid(size);
    }else{
        alert("Invalid option");
    }
});


createGrid(size);