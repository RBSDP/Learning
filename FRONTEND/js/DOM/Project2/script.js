let count = 0;
let value = document.getElementById("value")

let btns = document.querySelectorAll(".btn");


btns.forEach(function(item){
    item.addEventListener("click",function(val){
        let style =val.currentTarget.classList;
        if(style.contains("increase")){
            count++
        }
        else if (style.contains("minus")){
            count --

        }else{
            count = 0;
        }
        value.textContent = count;
    });
});




