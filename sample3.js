var input =document.querySelector(".input");
var btns = document.querySelectorAll(".btns");
var output =document.querySelector(".output");

input.addEventListener("input",()=>output.innerText=input.value);
btns.forEach(btn=>{
    btn.addEventListener("click",()=>{
        changeFont(btn);
    })
})

function changeFont(btn){
    switch(btn.textContent){
        case "H1":
            output.innerHTML='<h1>'+input.value+'</h1>';
            break;
        case "H2":
            output.innerHTML='<h2>'+input.value+'</h2>';
            break;
        case "H3":
            output.innerHTML='<h3>'+input.value+'</h3>';
            break;
        default:
            output.innerText=input.value ;
    }
}