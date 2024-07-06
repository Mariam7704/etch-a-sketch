const container=document.querySelector(".container");

function createGrid(size){
for(let i=0;i<size;i++){
    const row=document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);

    for(let j=0;j<size;j++){
        const cell=document.createElement("div");
        cell.classList.add("cell");
        row.appendChild(cell);
    }
}
}

createGrid(7);