let red = 0,
    green = 0,
    blue = 0;


function range1(value){
    red=value;
    background_change();
}
function range2(value){
    green=value;
    background_change();
}
function range3(value){
    blue=value;
    background_change();
}
function background_change(){
    let value = document.getElementById("value");
    value.innerHTML=red+","+green+","+blue;
    document.body.style.backgroundColor="rgb("+red+","+green+","+blue+")";
}