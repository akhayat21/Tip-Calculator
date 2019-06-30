function increaseCount() {
    var val = document.getElementById("split").value;
    if (val === "no") {
        document.getElementById("split").value = 2;
    } else {
        document.getElementById("split").value = parseInt(document.getElementById("split").value) + 1;
    }

}

function decreaseCount() {
    var val = document.getElementById("split").value;
    if (val === "no") {
    } else if (val === "2") {
        document.getElementById("split").value = "no";
    }
    else {
        document.getElementById("split").value = parseInt(document.getElementById("split").value) - 1;
    }

}

function increaseTip() {
    var val = document.getElementById("split").value;
    if (val === "no") {
        document.getElementById("split").value = 2;
    } else {
        document.getElementById("split").value = parseInt(document.getElementById("split").value) + 1;
    }

}

function decreaseTip() {
    var val = document.getElementById("split").value;
    if (val === "no") {
    } else if (val === "2") {
        document.getElementById("split").value = "no";
    }
    else {
        document.getElementById("split").value = parseInt(document.getElementById("split").value) - 1;
    }

}

function splitFinder() {
    var split = document.getElementById("split").value;
    if(split === "no"){
        split = 1;
        return split;
    } else {
        split = parseInt(document.getElementById("split").value);
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
    document.getElementById("result").innerHTML = totalEach;
    document.getElementById("res").style.visibility = "visible";
}