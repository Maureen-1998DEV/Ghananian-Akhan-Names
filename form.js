

let dateOfBirth;
let monthOfBirth;
let yearOfMonth;

//submitbutton//
const inputButton = document.querySelector("#submit");

inputButton.addEventListener("click", function(){
    var dateOfBirth = Number(document.querySelector("#Date").value);
    var monthOfBirth = Number(document.querySelector("#month").value);
    var yearOfMonth = Number(document.querySelector("#year").value);

    //month date//
    if(dateOfBirth===0){
        alert("Enter Date of Birth😥");
    } else if(dateOfBirth <= 0 || dateOfBirth >31) {
        alert("invalid Date of Birth😞");
    }
    if(monthOfBirth===0){
        alert("Enter Month of Birth🙃");
    }else if(monthOfBirth <=0 || monthOfBirth >12){
        alert("invalid month of Birth😞")
    }
    //Akhan Names in Arrays

    var maleAkan = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleAkan = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    //males Gender//
   var gender= document.querySelector('input[name="gender"]:checked');
    if(gender==null){
        alert("Select Gender")
    }
    var inputDate = new Date(yearOfMonth+"/"+monthOfBirth+"/"+dateOfBirth);
    console.log(inputDate)
    var d =inputDate.getDay();
    console.log(d);
    if(gender.value == "male") {
        alert(`Your akan name is: ${maleAkan[d]}`)
    } else if(gender.value == "female") {
        alert(`Your akan name is: ${femaleAkan[d]}`)
    }
    
//    (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(monthOfBirth+1)/10)) + dateOfBirth) %7

//    if(document.querySelector("#maleGender").checked && (inputDate !="")){
//        document.querySelector("#result").innerHTML =
//        "<strong>" + maleAkan[inputDate] + "</strong>";

//        //female Gender//
//    }else if(document.querySelector("#femaleGender").checked && (inputDate !="")){
//        document.querySelector("#result").innerHTML = 
//        "<strong>" + femaleAkan[inputDate] + "</stong>";
//    }else if(!document.querySelector("femaleGender").checked && !document.getElementById("MaleGender").checked) {
// //warning//
//     document.getElementById("warning").innerHTML = 
//     "*Select your gender*😠";



})