var capitol = "QWERTYUIOPASDFGHJKLZXCVBNM";
var lower = "qwertyuiopasdfghjklzxcvbnm";
var spec = "!@#$%^&*()";
var num = "1234567890";
var password = "";
var howMany = prompt("how many characters would you like?");
var upper = confirm("do you want upper case?");
var special = confirm("do you want special characters?");
var nums = confirm("do you want numbers?");
var low = confirm("do you want lower case?");


function generate() {
    password = ""
    var final = ""
    if (howMany <= 7) {
        alert("password too short")
        generate()
    }
    else if (howMany >= 129) {
        alert("password is too long")
        generate()
    }
    else {
        alert("your password will be " + howMany + " characters long")

    }

    if (upper === true) {
        final += capitol;
    }


    if (special === true) {
        final += spec
    }


    if (nums === true) {
        final += num
    }

    if (low === true) {
        final += lower
    }

    for (var i = 0; i < howMany; i++) {
        var rando = final[Math.floor(Math.random() * final.length)];
        password += rando
    }
    
    document.getElementById("display").innerHTML = password
    
}
generate()
document.getElementById("myBtn").addEventListener("click", myFunction);
document.getElementById("myBtn").addEventListener("click", secondFunction);
function myFunction() {
  document.getElementById("display").textContent = "";
}
function secondFunction() {
    generate()
}




