

var dateOfBirth = Number(document.querySelector("#Date").value);
var monthOfBirth = Number(document.querySelector("#month").value);
var yearOfMonth = Number(document.querySelector("#year").value);
var inputButton = document.querySelector("#Akhan");
inputButton.addEventListener("click",function(){
    var dateOfBirth = Number(document.querySelector("#Date").value);
    var monthOfBirth = Number(document.querySelector("#month").value);
    var yearOfMonth = Number(document.querySelector("#year").value);
    var inputButton = document.querySelector("#submit");

    if(dateOfBirth===0){
        alert("Enter Date of Birth");
    }else if(day <= 0 || day>31) {
        alert("invalid Date of Birth");
    }
    if(monthOfBirth===0){
        alert("Enter Month of Birth");
    }else if(month <=0 || month >12){
        alert("invalid month of Birth")
    }
    var genderMale = document.querySelector("#genderMale");
var genderFemale = document.querySelector("#genderFemle");
    var maleAkan = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleAkan = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];


})

