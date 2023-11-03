const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const salary = document.querySelector("#salary");
const loadBtn = document.querySelector("#load");
const addBtn = document.querySelector("#add");
const list = document.querySelector(".list");
const tbody = document.querySelector("table tbody");
let containerForValidation1 = document.querySelector("#validationContainer1");
let containerForValidation2 = document.querySelector("#validationContainer2");
let containerForValidation3 = document.querySelector("#validationContainer3");

// const worker1 = {
//   firstName: "Tunar",
//   lastName: "Aliyev",
//   salary: 1800,
// };
// const worker2 = {
//   firstName: "Cavid",
//   lastName: "Eyyubov",
//   salary: 1200,
// };

const validation = [
  {
    message: "Enter your first name!",
  },
  {
    message: "Enter your last name!",
  },
  {
    message: "Salary must be included!",
  },
  {
    message: "Salary must be 4 symbol!",
  },
];

let salaryAdd = [];
let salaryAddTable = [];

const clearInput = function () {
  firstName.value = "";
  lastName.value = "";
  salary.value = "";
  containerForValidation1.innerHTML = "";
  containerForValidation2.innerHTML = "";
  containerForValidation3.innerHTML = "";
};

const validationCheck = function () {
  if (firstName.value == "") {
    containerForValidation1.innerHTML = `<div class="text-danger mt-3">${validation[0].message}</div>`;
  } else {
    containerForValidation1.innerHTML = "";
  }

  if (lastName.value == "") {
    containerForValidation2.innerHTML = `<div class="text-danger mt-3">${validation[1].message}</div>`;
  } else {
    containerForValidation2.innerHTML = "";
  }

  if (salary.value == "") {
    containerForValidation3.innerHTML = `<div class="text-danger mt-3">${validation[2].message}</div>`;
  } else if (salary.length < 4) {
    containerForValidation3.innerHTML = `<div class="text-danger mt-3">${validation[3].message}</div>`;
  } else {
    containerForValidation3.innerHTML = "";
  }
};

const showSalaryDetails = function (tableData) {
  tbody.innerHTML = "";
  tableData.forEach((worker) => {
    let tableBodyHtml = `
                  <tr>
                      <td>${worker.firstName}</td>
                      <td>${worker.lastName}</td>
                      <td>${worker.salary}</td>
                  </tr>
      `;
    tbody.insertAdjacentHTML("beforeend", tableBodyHtml);
  });
};

addBtn.addEventListener("click", () => {
  validationCheck();

  if (
    containerForValidation1.innerHTML === "" &&
    containerForValidation2.innerHTML === "" &&
    containerForValidation3.innerHTML === ""
  ) {
    const salaryItemHtml = `<li>
    <input type="checkbox" />
    <p>${lastName.value} ${firstName.value}</p>
    <p>${salary.value}$</p>
  </li>`;

    list.insertAdjacentHTML("beforeend", salaryItemHtml);

    const newWorker = {
      firstName: firstName.value,
      lastName: lastName.value,
      salary: +salary.value,
    };

    salaryAdd.push(newWorker);
    clearInput();
  }
});

loadBtn.addEventListener("click", () => {
  if (salaryAdd.length > 0) {
    salaryAddTable = [...salaryAddTable, ...salaryAdd];
    showSalaryDetails(salaryAddTable);
    salaryAdd = [];
    clearInput();
  }
});

showSalaryDetails(salaryAddTable);
