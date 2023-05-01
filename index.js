let count = document.querySelector(".count")
let reset = document.querySelector(".reset")
let start = document.querySelector(".start")

let num = 0;
start.onclick = () => {
    num+=1
    count.innerHTML = num;
    if (count.innerHTML == 100) {
        num=0;
    }else{
        console.log(" xato");
    }
}

reset.onclick = () =>{
    num = 0;
    count.innerHTML = num;
}
   
    

