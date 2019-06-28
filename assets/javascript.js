function increase() {
   var val = document.getElementById("split").innerHTML;
   if (val === "no"){
    document.getElementById("split").innerHTML = 2;
   } else {
    document.getElementById("split").innerHTML = parseInt(document.getElementById("split").innerHTML) + 1 
   }

}

function decrease() {
    var val = document.getElementById("split").innerHTML;
    if (val === "no"){
    } else if (val === "1") {
    document.getElementById("split").innerHTML = "no"
    }
    else
    {
     document.getElementById("split").innerHTML = parseInt(document.getElementById("split").innerHTML) - 1
    }
 
 }