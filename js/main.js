const allBtn = document.querySelector("#allBtn");
const workBtn = document.querySelector("#workBtn");
const familyBtn = document.querySelector("#familyBtn");

const conForm = document.querySelector("#conForm")
const conlist = document.querySelector("#conlist")
const addBtn = document.querySelector("#addBtn");
const select = document.querySelector("#select");

const last = document.querySelector("#last");
const first = document.querySelector("#first");
const number = document.querySelector("#number");

const allVal = document.querySelector("#allVal");
const workVal = document.querySelector("#workVal");
const familyVal = document.querySelector("#familyVal");


conForm.addEventListener('submit', addContacts);


function addContacts(e) {
  e.preventDefault();

  let lastValue = last.value;
  let firstValue = first.value;
  let numberValue = number.value;




  let object = {
    lastname: `${lastValue}`,
    firstname: `${firstValue}`,
    number: `${numberValue}`
  }


  console.log(object);

  let li = document.createElement('li');

  li.className = "con__item";
  let conItemBox = document.createElement('div')
  conItemBox.className = "con__item-box d-flex align-items-center";
  conItemBox.innerHTML = `<div class="con__icon">
      <i class='bx bxs-contact'></i>
      </div>
      <div class="con__names">
        <p class="ite__tit">${lastValue}</p>
        <p class="ite__tit">${firstValue}</p>
        <a class="ite__link" href="tel:123456789">+998 9${numberValue}</a>
      </div>`;


  li.appendChild(conItemBox)
  conlist.appendChild(li)


  let nat = false

  allVal.addEventListener('click', () => {
    li.remove();
  })

  workBtn.addEventListener('click', () => {
    conItemBox.classList.add('Work')
  })
  familyBtn.addEventListener('click', () => {
    conItemBox.classList.add('Family')
  })

  workBtn.addEventListener('click', workFilter);

  // allBtn.addEventListener('click', () => {
  //   if (select.value == "All") {
  //     li.remove();
  //   }
  // })


  function workFilter(e) {
    let options = select.childNodes;

    for (let i = 0; i < options.length; i++) {
      let option = options[i]

      switch (e.target.value) {
        case "All":
          option.style.display = 'flex'
          break;
        case "Work":
          if (option.classList.contains("Work")) {
            option.style.display = 'flex'
          } else {
            option.style.display = 'none'
          }
          break;
        case "Family":
          if (!option.classList.contains("Work")) {
            option.style.display = 'flex'
          } else {
            option.style.display = 'none'
          }
          break;
      }
    }
  }


  last.value = "";
  first.value = "";
  number.value = "";
}


