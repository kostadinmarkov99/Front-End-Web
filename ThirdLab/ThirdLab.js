var elements = new Array(10,5,13,18,51);
function allElements(array){
    var len = elements.length;
    for(var i = 0; i < len; i++){
        console.log(array[i]);
    }
}

function multiplyTwo(array){
    var len = elements.length;
    var resultArr = new Array();

    for(var i = 0, k = 0; i < len; i++, k++){
        resultArr[k] = array[i] * 2; 
    }

    allElements(resultArr);

    return resultArr;
}

function filterArray(array){
    var len = array.length;
    var resultArr = new Array();

    for(var i = 0, k = 0; i < len; i++){
        if(array[i] % 2 == 0){
            resultArr[k] = array[i];
            k++;
        }
    }
    allElements(resultArr);
}

function isAtLeastOneElLessThan10(array){
    var len = array.length;
    var flag = false;

    for(var i = 0, k = 0; i < len; i++){
       if(array[i] < 10){
           flag = true;
       }
    }

    if(flag)
        return true;
    return false;
}

function arrayBy3(array){
    var len = array.length;
    var resultArr = new Array();

    for(var i = 0; i < len; i++){
        if(array[i] % 3 == 0){
            resultArr[k] = array[i];
            k++;
        }
     }

    return resultArr;
}

function arrayPrototype(array){
    const array1 = array;
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    
    console.log(array1.reduce(reducer));
}

function lastTwoElements(array){
    var len = array.length;     

    var resultArr = array.slice(len - 2, len);
    
    return resultArr;
}

function arrayDate(){
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    
    var arr = new Array(dateTime);
}

function newDate(){
    var arr = arrayDate();

    var d = new Date("July 08, 2018 21:00:00");

    arr[1] = d;    

    return arr;
}

function daysInMonth(anyDateInMonth) {
    return new Date(anyDateInMonth.getFullYear(), 
                    anyDateInMonth.getMonth()+1, 
                    0).getDate();
}

var dateArr = newDate();

function secondArrayDate(dateArr, i){
    var arrWithDaysInMonth = new Array();

    arrWithDaysInMonth[0] = daysInMonth(dateArr[i]);
    arrWithDaysInMonth[1] = dateArr[i].getDate();

    return arrWithDaysInMonth;
}

function fullInfoArray(){
    var fullInfoArr = new Array();

    var weekday = new Array(7);
    weekday[0] = "Неделя";
    weekday[1] = "Понеделник";
    weekday[2] = "Вторник";
    weekday[3] = "Сряда";
    weekday[4] = "Четвъртък";
    weekday[5] = "Петък";
    weekday[6] = "Събота";
    
    var dToday = dateArr[0];
    var secondDate = dateArr[1]; 

    var n = weekday[dToday.getDay()];
    var n1 = weekday[secondDate.getDay()];

    fullInfoArr[0] = dateArr[0] + "," + n + "." + secondArrayDate(dateArr, 0) + "дни";
    fullInfoArr[1] = dateArr[1] + "," + n1 + "." + secondArrayDate(dateArr, 1) + "дни";

    return fullInfoArr;
}