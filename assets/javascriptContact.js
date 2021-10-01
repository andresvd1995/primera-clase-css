function validFields() {
  var firstName = document.getElementById("firstName").value;
  var secondName = document.getElementById("secondName").value;
  var lastName = document.getElementById("lastName").value;
  var secondLastName = document.getElementById("secondLastName").value;
  var age = document.getElementById("age").value;
  var gender = document.getElementById("gender").value;

  var errorFirstName = document.getElementById("errorFirstName");
  var errorSecondName = document.getElementById("errorSecondName");
  var errorLastname = document.getElementById("errorLastname");
  var errorSecondLastName = document.getElementById("errorSecondLastName");
  var errorAge = document.getElementById("errorAge");
  var errorGender = document.getElementById("errorGender");

  if (firstName === "" || firstName.length > 10) {
    errorFirstName.innerText = "Name empty or size greater thand 10";
    return;
  } else {
    errorFirstName.innerText = "";
  }

  if (secondName.length > 10) {
    errorSecondName.innerText = "size greater thand 10";
    return;
  } else {
    errorSecondName.innerText = "";
  }

  if (isNaN(Number(age))) {
    errorAge.innerText = "Age is not number";
    return;
  } else{
    errorAge.innerText = "";
  }

  if (Number(age) < 0 || Number(age) > 100) {
    errorAge.innerText = "Invalid age";
    return;
  } else {
    errorAge.innerText = "";
  }

  if (gender === "e") {
    errorGender.innerText = "Invalid Gender";
    return;
  } else {
    errorGender.innerText = "";
  }
}

function validFields2() {
  var firstName = document.getElementById("firstName").value;
  var secondName = document.getElementById("secondName").value;
  var lastName = document.getElementById("lastName").value;
  var secondLastName = document.getElementById("secondLastName").value;
  var age = document.getElementById("age").value;
  var gender = document.getElementById("gender").value;

  var errorFirstName = document.getElementById("errorFirstName");
  var errorSecondName = document.getElementById("errorSecondName");
  var errorLastname = document.getElementById("errorLastname");
  var errorSecondLastName = document.getElementById("errorSecondLastName");
  var errorAge = document.getElementById("errorAge");
  var errorGender = document.getElementById("errorGender");

  var count = 0;

  if (firstName === "" || firstName.length > 10) {
    errorFirstName.innerText = "Name empty or size greater thand 10";
    count++;
  } else {
    errorFirstName.innerText = "";
  }

  if (secondName.length > 10) {
    errorSecondName.innerText = "size greater thand 10";
    count++;
  } else {
    errorSecondName.innerText = "";
  }

  if (isNaN(Number(age))) {
    errorAge.innerText = "Age is not number";
    count++;
  } else{
    errorAge.innerText = "";
  }

  if (Number(age) < 0 || Number(age) > 100) {
    errorAge.innerText = "Invalid age";
    count++;
  } else {
    errorAge.innerText = "";
  }

  if (gender === "e") {
    errorGender.innerText = "Invalid Gender";
    count++;
  } else {
    errorGender.innerText = "";
  }

  if (count > 0) {
    return;
  }
}

// FillTable();
function FillTable() {
  var tbody = document.getElementById("tbody");

  for (let i = 1; i <= 10; i++) {
    var body = "<tr>" +
                `<td>${i}</td>` +
                `<td>Test ${i}</td>` +
                `<td>${1000000 * i}</td>` +
                `<td>${i % 2 == 0 ? "Activo" : "Inactivo"}</td>` +
               "</tr>";

               tbody.innerHTML += body;
    // if (body.includes("Activo")) {
    //   tbody.innerHTML += body;
    // }
  }
}

FillTable2();
function FillTable2() {
  var tbody = document.getElementById("tbody");

  var lst = [
    {Id: 0, Name: "Carlos", Salario: 3000000, Activo: true},
    {Id: 0, Name: "Juan", Salario: 2000000, Activo: true},
    {Id: 0, Name: "Pepito", Salario: 5000000, Activo: false},
    {Id: 0, Name: "Alejandro", Salario: 6000000, Activo: true},
    {Id: 0, Name: "Estefania", Salario: 7000000, Activo: false},
    {Id: 0, Name: "Pedro", Salario: 3000000, Activo: true}
  ];

  for (let i = 0; i < lst.length; i++) {
    var body = "<tr>" +
                `<td>${i}</td>` +
                `<td>${lst[i].Name}</td>` +
                `<td>${lst[i].Salario}</td>` +
                `<td>${lst[i].Activo ? "Activo" : "Inactivo"}</td>` +
               "</tr>";

    tbody.innerHTML += body;
  }
}