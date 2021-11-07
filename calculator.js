function input(num){
    var a = document.getElementById("output");
    a.value += num; 
}
function Clear(){
    var a = document.getElementById("output");
    a.value = ""; 
}
function result(){
    var get =document.getElementById("output").value;
    var result =eval(get);
    document.getElementById("output").value = result;
}

