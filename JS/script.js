var i = 0
    for (i = 0; i < movies.length; i++) {
    	document.getElementsByClassName("movieimg")[i].innerHTML="<div><img src=' " + movies[i].img + " ' alt='film'  height='200'  width='140'></div>"
    	document.getElementsByClassName("movieinfo")[i].innerHTML="<div class='infoup'>		<h3> " + movies[i].title + " </h3><p> " +movies[i].description + " </p></div>";
    }

//this part is for the counting. Not nice, but still working on a loop solution... 

var clicks = 0;
    function counter() {
        clicks += 1;
        document.getElementById("number").innerHTML = clicks;
        //$("#number").append("#number").text(clicks);
        if (clicks > 9) {
        	$("#number").css("padding","5px 7px");
        }
    };

document.getElementById("thumb").addEventListener("click", counter);  


var clicks2 = 0;
    function counter2() {
        clicks2 += 1;
        document.getElementById("number2").innerHTML = clicks2;
        if (clicks2 > 9) {
        	$("#number2").css("padding","5px 7px");
        }
    };
 
document.getElementById("thumb2").addEventListener("click", counter2); 

var clicks3 = 0;
    function counter3() {
        clicks3 += 1;
        document.getElementById("number3").innerHTML = clicks3;
        if (clicks3 > 9) {
        	$("#number3").css("padding","5px 7px");
        }
    };
 
document.getElementById("thumb3").addEventListener("click", counter3); 

var clicks4 = 0;

    function counter4() {
        clicks4 += 1;
        document.getElementById("number4").innerHTML = clicks4;
        if (clicks4 > 9) {
        	$("#number4").css("padding","5px 7px");
        }
    };
 
document.getElementById("thumb4").addEventListener("click", counter4); 

var clicks5 = 0;

    function counter5() {
        clicks5 += 1;
        document.getElementById("number5").innerHTML = clicks5;
        if (clicks5 > 9) {
        	$("#number5").css("padding","5px 7px");
        }
    };
 
document.getElementById("thumb5").addEventListener("click", counter5);

 var clicks6 = 0;
    function counter6() {
        clicks6 += 1;
        document.getElementById("number6").innerHTML = clicks6;
        if (clicks6 > 9) {
        	$("#number6").css("padding","5px 7px");
        }
    };
 
document.getElementById("thumb6").addEventListener("click", counter6);

 var clicks7 = 0;

    function counter7() {
        clicks7 += 1;
        document.getElementById("number7").innerHTML = clicks7;
        if (clicks7 > 9) {
        	$("#number7").css("padding","5px 7px");
        }
    };
 
document.getElementById("thumb7").addEventListener("click", counter7); 


var clicks8 = 0;

    function counter8() {
        clicks8 += 1;
        document.getElementById("number8").innerHTML = clicks8;
        if (clicks8 > 9) {
        	$("#number8").css("padding","5px 7px");
        }
    };
 
document.getElementById("thumb8").addEventListener("click", counter8); 

var clicks9 = 0;

    function counter9() {
        clicks9 += 1;
        document.getElementById("number9").innerHTML = clicks9;
        if (clicks9 > 9) {
        	$("#number9").css("padding","5px 7px");
        }
    };
 
document.getElementById("thumb9").addEventListener("click", counter9); 

var clicks10 = 0;

    function counter10() {
        clicks10 += 1;
        document.getElementById("number10").innerHTML = clicks10;
        if (clicks10 > 9) {
        	$("#number10").css("padding","5px 7px");
        }
    };
 
document.getElementById("thumb10").addEventListener("click", counter10); 

var clicks11 = 0;
    function counter11() {
        clicks11 += 1;
        document.getElementById("number11").innerHTML = clicks11;
        if (clicks11 > 9) {
        	$("#number11").css("padding","5px 7px");
        }
    };
 
document.getElementById("thumb11").addEventListener("click", counter11); 

var clicks12 = 0;

    function counter12() {
        clicks12 += 1;
        document.getElementById("number12").innerHTML = clicks12;
        if (clicks12 > 9) {
        	$("#number12").css("padding","5px 7px");
        }
    };
 
document.getElementById("thumb12").addEventListener("click", counter12); 

var clicks13 = 0;

    function counter13() {
        clicks13 += 1;
        document.getElementById("number13").innerHTML = clicks13;
        if (clicks13 > 9) {
        	$("#number13").css("padding","5px 7px");
        }
    };
 
document.getElementById("thumb13").addEventListener("click", counter13); 

var clicks14 = 0;

    function counter14() {
        clicks14 += 1;
        document.getElementById("number14").innerHTML = clicks14;
        if (clicks14 > 9) {
        	$("#number14").css("padding","5px 7px");
        }

    };
 
document.getElementById("thumb14").addEventListener("click", counter14); 



/*ranking - working on it

function ranking () {

var films = [clicks,clicks2,clicks3,clicks4,clicks5,clicks6,clicks7,clicks8,clicks9,clicks10,clicks11,clicks12,clicks13,clicks14];
document.getElementById("sort").innerHTML = films;

function myFunction() {
    films.sort(function(a, b){return b-a});

    document.getElementById("sort").innerHTML = films;
    
}
myFunction()
}


document.getElementById("button").addEventListener("click", ranking);*/


