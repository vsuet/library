
function out(){
   var p;
    p= document.getElementById("out").innerHTML=document.getElementById("name").value; 
     var p;
   p= document.getElementById("out2").innerHTML=document.getElementById("date").value; 
} 



 
var money=0;
function add()
{
    var a= document.getElementById("inputoperations");
    var b=a.value;
    money=money+Number(b);
    document.getElementById("bill").innerHTML=money;
    a.value="";
}
function takeoff()
{
    var a= document.getElementById("inputoperations");
    var b=a.value;
    money=money-Number(b);
    document.getElementById("bill").innerHTML=money;
    a.value="";
}


var money1=0;
function add1()
{
    var k= document.getElementById("inputoperations1");
    var c=k.value;
    money1=money1+Number(c);
    document.getElementById("bill1").innerHTML=money1;
    k.value="";
}
function takeoff1()
{
    var k= document.getElementById("inputoperations1");
    var c=k.value;
    money1=money1-Number(c);
    document.getElementById("bill1").innerHTML=money1;
    k.value="";
} 
