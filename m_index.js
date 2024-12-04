
// function about(){

//     document.getElementById("abchange").innerHTML = "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae minima eos libero sapiente alias vitae iusto nesciunt incidunt tempore cumque.</p>";

// }

// targeting welcome first button
document.querySelector("#btn1").style.padding = "10px 20px";
document.querySelector("#btn1").style.backgroundColor = "green";
document.querySelector("#btn1").style.color = "white";

document.getElementById("btn1").addEventListener("mouseenter", abc);

function abc(){
    document.querySelector("#btn1").style.padding = "10px 20px";
    document.querySelector("#btn1").style.backgroundColor = "rgb(9, 180, 40)";
  
    
    
}


document.getElementById("btn1").addEventListener("mouseleave", xyz);

function xyz(){
    
    document.querySelector("#btn1").style.backgroundColor = "green";
    
}