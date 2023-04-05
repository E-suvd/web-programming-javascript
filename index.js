function greet(name) {
    console.log("Hello " + name);
}

greet("Suvd");

function kawadrat(a) {
    a = a*a
    console.log(" Tanii toonii kwadrat: " + a);
}

kawadrat(2);



function greet(name) {
    console.log("Hello " + name);
}

greet("Suvd");

function square(a) {
    return a*a;
}

console.log(square(2));


function test() {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let uls = document.getElementById("country").value;

    alert("First name is "+ fname + "\nLast name is " + lname 
    + "\nCountry: " + uls);
    document.getElementById("print").innerHTML = "First name is "+ fname + "\nLast name is " + lname 
    + "\nCountry: " + uls;
}