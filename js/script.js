let dataUser = {
    name:"Marcel",
    role: "Front End Designer",
    availability: "Full Time",
    age: 19,
    location: "Jakarta",
    exp: 2,
    email: "email@gmail.com"
};

let displayName = document.getElementById("displayName");
    let displayRole = document.getElementById("displayRole");
    let displayAvailability = document.getElementById("displayAvailability");
    let displayAge = document.getElementById("displayAge");
    let displayLocation = document.getElementById("displayLocation");
    let displayExp = document.getElementById("displayExp");
    let displayEmail = document.getElementById("displayEmail");

    let formName = document.getElementById("fname");
    let formRole = document.getElementById("role");
    let formAva = document.getElementById("ava");
    let formAge = document.getElementById("age");
    let formLoc = document.getElementById("address");
    let formExp = document.getElementById("exp");
    let formEmail = document.getElementById("email");  


function toggleEdit(){
    const cardSectionForm = document.getElementById("cardSectionForm");

    if(cardSectionForm.classList.contains("hidden")){
        cardSectionForm.classList.remove("hidden");
    }
    else{
        cardSectionForm.classList.add("hidden");
    }
    
    renderUser();
}

function submitForm(event){
    event.preventDefault();

    dataUser.name = formName.value;
    dataUser.role = formRole.value;
    dataUser.availability = formAva.value;
    dataUser.age = formAge.value;
    dataUser.location = formLoc.value;
    dataUser.exp = formExp.value;
    dataUser.email = formEmail.value;

    renderUser();
}


function renderUser(){
    displayName.innerHTML = dataUser.name;
    displayRole.innerHTML = dataUser.role;
    displayAvailability.innerHTML = dataUser.availability;
    displayAge.innerHTML = dataUser.age;
    displayLocation.innerHTML = dataUser.location;
    displayExp.innerHTML = dataUser.exp;
    displayEmail.innerHTML = dataUser.email;

    formName.value = dataUser.name;
    formRole.value = dataUser.role;
    formAva.value = dataUser.availability
    formAge.value = dataUser.age;
    formLoc.value = dataUser.location;
    formExp.value = dataUser.exp;
    formEmail.value = dataUser.email;
}