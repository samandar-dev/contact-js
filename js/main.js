const allBtn = document.querySelector("#allBtn");
const workBtn = document.querySelector("#workBtn");
const familyBtn = document.querySelector("#familyBtn");

const conForm = document.querySelector("#conForm")
const conlistAll = document.querySelector("#conlistAll")
const conlistWork = document.querySelector("#conlistWork")
const conlistFam = document.querySelector("#conlistFam")
const select = document.querySelector("#select");

const last = document.querySelector("#last");
const first = document.querySelector("#first");
const number = document.querySelector("#number");


let arr = [];
let allArr = [];
let workArr = [];
let famArr = [];

let h_arr = [
  {
    lastname: 'John',
    firstname: 'Doe',
    categor: 'Family',
    number: '8 765 43 21',
  },
  {
    lastname: 'Tom',
    firstname: 'Hardy',
    categor: 'Work',
    number: '8 765 43 21',
  },
  {
    lastname: 'Jamoliddin',
    firstname: 'Najmiddinov',
    categor: 'All',
    number: '8 765 43 21',
  }
]

let foreachh = h_arr.forEach((e) => {
  let li_i = document.createElement('li');
  li_i.className = "con__item";
  li_i.innerHTML = `
  <div class="con__item-box d-flex align-items-center">
  <p class="conn-namee">${e.categor} contact</p>
  <div class="con__icon">
  <i class='bx bxs-contact'></i>
  </div>
  
  <div class="con__names">
  <p class="ite__tit">${e.lastname}</p>
  <p class="ite__tit">${e.firstname}</p>
  <a class="ite__link" href="tel:123456789">+998 9${e.number}</a>
  </div>
  </div>`;

  if (e.categor == 'All') {
    conlistAll.appendChild(li_i);
  }
  if (e.categor == 'Work') {
    conlistWork.appendChild(li_i);
  }
  if (e.categor == 'Family') {
    conlistFam.appendChild(li_i);
  }
});

let removeBtn = document.querySelector('.remove');

categores();

conForm.addEventListener('submit', addContacts);

function addContacts(e) {
  e.preventDefault();

  let lastValue = last.value;
  let firstValue = first.value;
  let numberValue = number.value;
  let vall = select.value

  let obj = {
    lastname: lastValue,
    firstname: firstValue,
    categor: vall,
    number: numberValue,
  }

  arr.push(obj);

  let li = document.createElement('li');
  li.className = "con__item";

  let foreach = arr.forEach((e) => {
    li.innerHTML = `
      <div class="con__item-box d-flex align-items-center">
        <p class="conn-namee">${e.categor} contact</p>
        <div class="con__icon">
          <i class='bx bxs-contact'></i>
        </div>

        <div class="con__names">
          <p class="ite__tit">${e.lastname}</p>
          <p class="ite__tit">${e.firstname}</p>
          <a class="ite__link" href="tel:123456789">+998 9${e.number}</a>
        </div>
      </div>`;
  });

  conlistAll.appendChild(li);

  workArr = arr.filter((e) => {
    if (e.categor == 'Work') {
      conlistWork.appendChild(li);
    }
  })

  famArr = arr.filter((e) => {
    if (e.categor == 'Family') {
      conlistFam.appendChild(li);
    }
  })

  categores();

  last.value = "";
  first.value = "";
  number.value = "";
}

function categores() {
  allBtn.addEventListener('click', () => {
    conlistAll.classList.remove('d-none');
    conlistWork.classList.remove('d-none');
    conlistFam.classList.remove('d-none');
  })

  workBtn.addEventListener('click', () => {
    conlistWork.classList.remove('d-none');
    conlistFam.classList.add('d-none');
    conlistAll.classList.add('d-none');
  })

  familyBtn.addEventListener('click', () => {
    conlistFam.classList.remove('d-none');
    conlistWork.classList.add('d-none');
    conlistAll.classList.add('d-none');
  })
}