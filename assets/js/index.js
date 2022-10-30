function out(){
document.getElementById("txt").innerHTML = document.getElementById("fio").value;
}

function btn(){
document.getElementById("txt2").innerHTML=document.getElementById("date").value;
}

let money = 0;

function add(){
    let a = document.getElementById("input");
    let b = a.value;
    money = money + Number(b);
    document.getElementById("cashe").innerHTML=money;
    a.value ="";
}

function remove(){
    let a = document.getElementById("input");
    let b = a.value;
    money = money - Number(b);
    document.getElementById("cashe").innerHTML=money;
    a.value="";
}