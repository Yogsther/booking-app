const MONTHS = "Januari Februari Mars April Maj Juni Juli Augusti September Oktober November December".split(" ");


window.onload = function(){
    loadMonths();
}

function loadMonths(){
    var string = "";
    MONTHS.forEach(month => {
         string+="<option value='" + month.toLowerCase() + "'>" + month + "</option>"
    });

    document.getElementById("month").innerHTML = string;    
}

