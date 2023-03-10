var btn = document.querySelector("#back-to-top")
btn.addEventListener("click", function(){
    window.scrollTo(0,0);
})

document.addEventListener('scroll',ocultar )

function ocultar(){
        if(window.scrollY > 10){
                btn.style.display="flex"
        }else{
                btn.style.display="none"   
        }
}

ocultar()

 
function myFunction(){
    var x = document.getElementById("myLinks");
    if(x.style.display =="block"){
        x.style.display = "none";
    } else {
        x.style.display ="block";
    }
}
 
