function out(){
  let username_1;
  username_1= document.getElementById("txt2").innerHTML=document.getElementById("username").value; 
  
}
function butt(){
  let date_1;
  date_1= document.getElementById("txt3").innerHTML=document.getElementById("date").value; 
  
}


let money=0;
function add()
{
    let first= document.getElementById("inputObject");
    let second=first.value;
    money=money+Number(second);
    document.getElementById("bill").innerHTML=money;
    first.value="";
}
function take()
{
    let first= document.getElementById("inputObject");
    let second=first.value;
    money=money-Number(second);
    document.getElementById("bill").innerHTML=money;
    first.value="";
}
let money1=0;
function add1()
{
    let summa_1= document.getElementById("inputObject1");
    let summa_2=summa_1.value;
    money1=money1+Number(summa_2);
    document.getElementById("bill1").innerHTML=money1;
    summa_1.value="";
}
function take1()
{
    let difference_1= document.getElementById("inputObject1");
    let difference_2=difference_1.value;
    money1=money1-Number(difference_2);
    document.getElementById("bill1").innerHTML=money1;
    difference_1.value="";
}
