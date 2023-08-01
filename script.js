function randomcolor(){
            
    const red=Math.floor(Math.random()*256);
    const green=Math.floor(Math.random()*256);
    const blue=Math.floor(Math.random()*256);

    return `rgb(${red},${green},${blue})`
   
}
function generatecolor(){
    event.preventDefault();

    const input=document.querySelector('#bg_color');
    const box=document.querySelector('#color_box')

    const generatecolor=randomcolor();
    input.value= generatecolor;
    box.style.backgroundColor=generatecolor;

}