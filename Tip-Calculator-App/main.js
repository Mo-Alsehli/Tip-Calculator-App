const bill = document.getElementById("bill"); // The Bill Input.
const numPerson = document.getElementById("person"); // Number Of People Input.
const tipAmount = document.getElementById("tip-amount");
const btns = document.querySelectorAll(".tip-btn"); // Array Of Tip Btns.
const customInput = document.querySelector(".custom");
const tipTotal = document.getElementById("tip-total");
const resetBtn = document.querySelector(".reset-btn");

let billValue = 0;
let personValue = 0;
let persentTip = 0.15;
let customPersentTip = 0;

bill.onkeyup = (e) => {
  billValue = e.target.value;
};

customInput.onfocus = (e) => {
  e.target.placeholder = "";
  e.target.style.textAlign = "right";
};

btns.forEach((ele) => {
  ele.classList.remove("active");
  ele.onclick = (e) => {
    btns.forEach((btn) => btn.classList.remove("active"));
    ele.classList.add("active");
    persentTip = ele.value;
    tipAmount.innerHTML = `$${billValue * persentTip}`;
    handleTotal();
  };
});

customInput.onkeyup = (e) => {
  customPersentTip = e.target.value * 0.01;
  if (customPersentTip !== 0) {
    tipAmount.innerHTML = `$${billValue * customPersentTip}`;
    handleTotal();
  }
};

numPerson.onkeyup = (e) => {
  personValue = e.target.value;
  handleTotal();
};

// A Function To Handle The Total Per Person.
const handleTotal = () => {
  if (personValue !== 0) {
    let tipAmountNum = /\d+/;
    tipTotal.innerHTML = `$${
      personValue * tipAmount.innerHTML.match(tipAmountNum)
    }`;
    numPerson.style.border = "2px solid transparent";
  } else {
    numPerson.style.border = "2px solid #ee5253";
  }
};

// Reseting All The Input Functionallity.
resetBtn.onclick = (e) => {
  e.preventDefault();
  bill.value = 0;
  customInput.value = 0;
  numPerson.value = 0;
  tipAmount.innerHTML = `$0.00`;
  tipTotal.innerHTML = `$0.00`;
};
