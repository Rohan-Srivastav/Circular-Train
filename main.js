var mouse_event="empty";
var last_x,last_y;
canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");

color;
width;
radius;

color="black";
width=3;
radius=20;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
    radius=document.getElementById("radius").value;

    mouse_event = "mousedown";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouse_event = "mouseleave";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouse_event = "mouseup";
}


canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    current_x = e.clientX - canvas.offsetLeft;
    current_y = e.clientY - canvas.offsetTop;

    if(mouse_event == "mousedown") {


        console.log("Current position of X and Y coordinates = ");
        console.log("x = " + current_x + "y = " + current_y);
       
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.arc(current_x, current_y, radius ,0 , 2 * Math.PI);
        ctx.stroke();
    }

    last_x = current_x;
    last_y = current_y;
}
function clear_area() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); }