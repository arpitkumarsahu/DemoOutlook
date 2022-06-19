let internationalNewsArrr = JSON.parse(localStorage.getItem("internationalnews"));

let first = document.getElementById("first-div-international");
let last = document.getElementById("last-div-international");


function displayData(data){

    let cont = document.getElementById("container-international");
    cont.innerHTML = null;

    let elem = data[0];

    let box = document.creat
}