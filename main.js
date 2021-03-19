/**
 * bai tap js buoi 06
 */



function timSoNguyenNN(){
    var num1 = 0;
    var count = 0;
    while(num1 < 10000){
        count++;
        num1 += count;
        console.log("i= " + count + ", num=" + num1);
    }
    return count;
}

var num = timSoNguyenNN();
document.getElementById("txtKQBT01").innerHTML = "n = " + num;

/**
 * Bai tap 02
 */


document.getElementById("btnbt02").onclick = function(){
    var x = document.getElementById("soX").value;
    var n = document.getElementById("soN").value;

    var s = tongXN(x,n);

    document.getElementById("txtKQBT02").innerHTML = "S(n) = " + s;
};

function tongXN(x, n){
    var luyThua = 1;
    var s = 0;
    for(var i = 0; i < n; i++){
        luyThua *= x;
        s += luyThua;
    }
    return s;
};


/**
 * Bai tap 03 
 */


document.getElementById("btnbt03").onclick = function(){
    var x = document.getElementById("giaiThuaX").value;

    document.getElementById("txtKQBT03").innerHTML = "GT = " + giaiThua(x);

}

function giaiThua(x){
    var gt = 1;
    for(var i = 1; i <= x; i++){
        gt *= i;
    }
    return gt;
};


/**
 * Bai tap 04
 */

 document.getElementById("btnbt04").onclick = function(){

    var spanELE = document.getElementById("txtKQBT04");

    var redDiv = document.createElement("div");
    redDiv.style.width = "500px";
    redDiv.style.height = "20px";
    redDiv.style.background = "red";

    var blueDiv = document.createElement("div");
    blueDiv.style.width = "500px";
    blueDiv.style.height = "20px";
    blueDiv.style.background = "blue";

    


    for(var i = 1; i <= 10; i++){
        if(i % 2 != 0){
            spanELE.innerHTML += blueDiv.outerHTML;
        }else{
            spanELE.innerHTML += redDiv.outerHTML;
        }
    }
}











/**
 * Bai tap 05
 */

document.getElementById("btnbt05").onclick = function(){
    var n = parseInt(document.getElementById("txt05").value);

    var kq03ELE = document.getElementById("txtKQBT05");
    kq03ELE.innerHTML = "2 ";

    for(var i = 3; i <= n; i++){
        console.log(isSNT(i));
        if(isSNT(i) == true){
            kq03ELE.innerHTML += i + " ";
        }
    }
}

function isSNT(x){
    var is = true;

    for(var i = 2; i < x; i++){
        if(x % i == 0){
            is = false;
        }
    }
    return is;
}