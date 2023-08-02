const btn = document.getElementById("button")


//function which is giving me hex value
const randomColor = () =>{
    let val = "0123456789ABCDF"
    let cons = "#"
    for(let i = 0; i<6; i++){
        cons = cons + val[Math.floor(Math.random() * 16)]
    } 
    return cons
}


function changeRandomColor(){
    document.body.style.backgroundColor = randomColor();
}

btn.addEventListener("click",changeRandomColor)