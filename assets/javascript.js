function increase() {
    var val = document.getElementById("split").innerHTML;
    if (val === "no") {
        document.getElementById("split").innerHTML = 2;
    } else {
        document.getElementById("split").innerHTML = parseInt(document.getElementById("split").innerHTML) + 1;
    }

}

function decrease() {
    var val = document.getElementById("split").innerHTML;
    if (val === "no") {
    } else if (val === "2") {
        document.getElementById("split").innerHTML = "no";
    }
    else {
        document.getElementById("split").innerHTML = parseInt(document.getElementById("split").innerHTML) - 1;
    }

}

function splitFinder() {
    var split = document.getElementById("split").innerHTML;
    if(split === "no"){
        split = 1;
        return split;
    } else {
        split = parseInt(document.getElementById("split").innerHTML);
        return split;
    }
}

function calculate() {
    var split = splitFinder();
    var billTotal = parseInt(document.getElementById("total").value)
    var tip = document.getElementById("tip").value.replace("%","")/100

    var billEach = billTotal/split;
    var tipTotal = billTotal*tip;
    var tipEach = tipTotal/split;
    var totalEach = billEach + tipEach; 
}