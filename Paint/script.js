// Sélectionne l'élément <canvas> dans le document
const canvas = document.querySelector("canvas"),
toolBtns = document.querySelectorAll(".tool"),
filleColor = document.querySelector("#fille-color"),
SizeSlider = document.querySelector("#size_slider"),
ColorBtns = document.querySelectorAll(".colors .option"),
ColorPicker = document.querySelector("#color-picker"),
clearCanvas = document.querySelector(".clear-canvas"),
saveImg = document.querySelector(".save_img"),
// Obtient le contexte 2D pour le dessin sur le canvas
ctx = canvas.getContext("2d");

let prevMouseX,prevMouseY, isDrawing,
   snapshot = false,
   selectedTool= "brush",
   brushWidth= 5,
   selectedColor = "#000";
   const setCanvasBackground = () =>{
    ctx.fillStyle ="#fff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle =selectedColor;
   }


// Lors du chargement de la fenêtre, définit la largeur et la hauteur du canvas
window.addEventListener("load", () => {
    // La largeur du canvas est définie en fonction de sa largeur actuelle dans le DOM
    canvas.width = canvas.offsetWidth; 

    // La hauteur du canvas est définie en fonction de sa hauteur actuelle dans le DOM
    canvas.height = canvas.offsetHeight; 
    setCanvasBackground();
});
const drawRect=(e)=>{
    if(!filleColor.checked){

       return ctx.strokeRect(e.offsetX, e.offsetY,prevMouseX - e.offsetX, prevMouseY -e.offsetY );
    }
    ctx.fillRect(e.offsetX, e.offsetY,prevMouseX - e.offsetX, prevMouseY -e.offsetY );
  
};

const drawCircle=(e)=>{
    ctx.beginPath();
    let radiut = Math.sqrt(Math.pow((prevMouseX - e.offsetX), 2) + Math.pow((prevMouseY - e.offsetY), 2));
    ctx.arc(prevMouseX, prevMouseY, radiut, 0, 2*Math.PI);
    filleColor.checked? ctx.fill() : ctx.stroke();
}
const drawTriangle=(e)=>{
    ctx.beginPath();
    ctx.moveTo(prevMouseX, prevMouseY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.lineTo(prevMouseX* 2 - e.offsetX, e.offsetY);
    ctx.closePath();
    filleColor.checked? ctx.fill() : ctx.stroke();
}
// Fonction de dessin qui est appelée lorsqu'on déplace la souris sur le canvas
const drwing = (e) => {
    if(!isDrawing) return;
    ctx.putImageData(snapshot, 0, 0);
    if(selectedTool === "brush" || selectedTool === "eraser"){
    ctx.strokeStyle = selectedTool === "eraser" ? "#fff" : selectedColor;
  // Crée une ligne jusqu'à la position actuelle de la souris (coordonnées x et y sur le canvas)
  ctx.lineTo(e.offsetX, e.offsetY); 

  // Dessine la ligne sur le canvas
  ctx.stroke();
}else if(selectedTool === "rectangle"){
    drawRect(e);

}else if(selectedTool === "circle"){
    drawCircle(e);

}else{
    drawTriangle(e);
}
}
const starDraw =(e) =>{
    isDrawing = true;
    prevMouseX = e.offsetX;
    prevMouseY = e.offsetY;
    ctx.beginPath(); //créé nouvel disgne 
    ctx.lineWidth = brushWidth;
    ctx.strokeStyle = selectedColor;
    ctx.fillStyle = selectedColor;
    snapshot = ctx.getImageData(0, 0, canvas.width, canvas.height)

}
toolBtns.forEach(btn => {
    btn.addEventListener("click", ()=>{
        document.querySelector(".options .active").classList.remove("active");
        btn.classList.add("active");
        selectedTool = btn.id;
        console.log(selectedTool);
    })
    
});
SizeSlider.addEventListener("change",() => brushWidth = SizeSlider.value);
ColorBtns.forEach(btn =>{
    btn.addEventListener("click", ()=>{
        // console.log(btn);
        document.querySelector(".options .selected").classList.remove("selected");
        btn.classList.add("selected");
        selectedColor = window.getComputedStyle(btn).getPropertyValue("background-color")
    })
});
ColorPicker.addEventListener("change", function(){
    this.parentElement.style.background = this.value;
    this.parentElement.click();
});
clearCanvas.addEventListener("click", ()=>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setCanvasBackground();
});
saveImg.addEventListener("click", ()=>{
    const link = document.createElement("a");
    link.download = `${Date.now()}.jpg`;
    link.href = canvas.toDataURL();
    link.click();
});

// Attache un écouteur d'événement pour 'mousemove' sur le canvas
// Cela permet de dessiner lorsque la souris se déplace sur le canvas
canvas.addEventListener("mousedown", starDraw);
canvas.addEventListener("mousemove", drwing);
canvas.addEventListener("mouseup", ()=>isDrawing =false);
