

let dateOfBirth;
let monthOfBirth;
let yearOfMonth;

//submitbutton//
const inputButton = document.querySelector("#submit");

inputButton.addEventListener("click", function(){
    var dateOfBirth = Number(document.querySelector("#Date").value);
    var monthOfBirth = Number(document.querySelector("#month").value);
    var yearOfMonth = Number(document.querySelector("#year").value);
    var inputDate =[dateOfBirth,monthOfBirth,yearOfMonth]
    if(dateOfBirth===0){
        alert("Enter Date of Birth😥");
    } if(day <= 0 || day>31) {
        alert("invalid Date of Birth😞");
    }
    if(monthOfBirth===0){
        alert("Enter Month of Birth🙃");
    }else if(month <=0 || month >12){
        alert("invalid month of Birth😞")
    }
    //Akhan Names in Arrays

    var maleAkan = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleAkan = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
   if(document.querySelector("#maleGender").checked && (inputDate !=""))

})

