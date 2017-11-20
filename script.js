function firstLast6 (array){
    return array[0] == 6 || array[array.length - 1] == 6;
}


function has23 (array){
    if (array [0] == 2 || array [1] == 2){
        return true;
    }
    if (array [0] == 3 || array [1] == 3){
        return true;
    }
    if (array [0] != 2 || array [1] != 2){
        return false;
    }
    if (array [0] != 3 || array [1] != 3 ){
        return false;
    }
}


function fix23 (array){
    if (array[0] == 2 && array[1] == 3 ){
        array[1] = 0;
    }
    if(array[1] == 2 && array [2] == 3){
        array[2] = 0;
    }
    return array;
}


function countYZ (string){
    string = string.toLowerCase();
    var count = 0;
    for (var i = 0; i <= string.length; i ++){
        if (string[i] == "y" && string[i + 1] == " "){
            count += 1;
        }
        if (string[i] == "z" && string[i + 1] == " "){
            count += 1;
        }
    }
    if (string[string.length - 1] == "y" || string[string.length - 1] == "z"){
        count += 1;
    }
    return count;
}

function endOther (string1, string2){
    var string1 = string1.toLowerCase();
    var string2 = string2.toLowerCase();
    if(string1.endsWith(string2)){
        return true;
    }
    if (string2.endsWith(string1)) {
        return true;
    }else{
        return false;
    }
}


function starOut(string) {
        var string = " ";
        for (var i = 0; i < string.length; i++) {
            if ((string[i + 1] != "*") && (string[i] != "*") && (string[i - 1] != "*")) {
                string += string[i];
            }
        }
        return string;
}

function getSandwich (string){
    var firstBread = string.indexOf("bread");
    var lastBread = string.lastIndexOf("bread");
    if(firstBread == -1 || firstBread == lastBread){
        return "";
    }
    return string.substring (firstBread + 5, lastBread);
}

function canBalance (int){
   var firstSum = 0;
   var secondSum = 0;
   for (var i = 0; i < int.length; i ++){
    firstSum += int [i]
   for(var y = i+1; y < int.length; y++){
    secondSum += int [y]
    }
    if (firstSum == secondSum){
       return true;
    }
    secondSum =0;
   }
   return false;
}


function countClumps(array){
    var int = 0;
    for(var i = 0; i < array.length; i ++){
        if((array[i] == array[i-1] && array[i] != array[i+1])){
            int += 1;
        }
    }
    return int;
}


function evenlySpaced(a, b, c){
    if (c-a == a-b || c-a == b-c || c-b == b-a || a-c == c-b ){
        return true;
    }else{
        return false;
    }
}

function tester() {

    document.getElementById("output").innerHTML = evenlySpaced(2, 4, 6);
    document.getElementById("output2").innerHTML = evenlySpaced(4, 6, 2);
    document.getElementById("output3").innerHTML = evenlySpaced(4, 6, 3);
}


