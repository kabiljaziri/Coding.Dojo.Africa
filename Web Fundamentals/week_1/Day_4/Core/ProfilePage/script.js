function removeuser(id) {
    console.log("the button is removed");
    console.log(id);
    document.getElementById("seco²nd").remove();
}

function myFunction() {
    document.getElementById("chg-name").innerHTML = "kabil jaziri";
}

const number1 = document.querySelector('#button1');
const numberElement = document.querySelector('#number');
let counter = 2;
function decr() {
    counter--;
    numberElement.textContent = counter;
}


const numberElement2 = document.querySelector('#acc_conn');
let counter2=418;
function incr() {
    counter2++;
    numberElement2.textContent = counter2;
}