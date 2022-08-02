const bill = document.querySelectorAll(".input")[0];
const peopleInput1 = document.querySelectorAll('.peopleInput')[0];
const peopleInput2 = document.querySelectorAll('.peopleInput')[1];
const people = document.querySelectorAll(".input")[1];
const tip_percentage = document.querySelectorAll(".tip_button")
const tip_per_person_show = document.querySelectorAll(".amount")[0];
const total_per_person_show = document.querySelectorAll(".amount")[1];
const reset = document.querySelector(".reset");
const custom = document.querySelector(".custom");
const custom2 = document.querySelectorAll(".custom")[1];
const custom_tip_input = document.querySelector(".custom_tip_input");
const tip_input = document.querySelector('.tip_input')
let total = 0;
let amount = 0;
let tip = 0;
let peop = 0;
let tip_per_person = 0;
tip_percentage.forEach(box => {
    box.addEventListener('click', () => {
        let content = box.textContent
        content = content.substring(0, content.length - 1);
        tip = Number(content);
        console.log(tip);
        custom.classList.remove('custom_hide');
        custom_tip_input.classList.remove("custom_tip_input_show")
        calculate();
    })
})

bill.addEventListener("change", (e) => {
    amount = Number(e.target.value);
    if (amount === 0 || amount === null) {
        bill.classList.add("red")
    }
    else {
        bill.classList.remove("red")
        console.log(amount);
    }
    calculate();
})

people.addEventListener("change", (e) => {
    peop = Number(e.target.value)
    if (peop === null || peop === 0) peopleInput1.classList.add('red');
    else peopleInput1.classList.remove('red');
    console.log(peop)
    calculate();
})

function calculate() {
    if (peop === null || peop === 0 || amount === 0 || amount === null) {
        peopleInput1.classList.add('red');
        peopleInput2.classList.add("red")
    } else {
        peopleInput1.classList.remove('red');
        peopleInput2.classList.remove("red")
        tip_per_person = (tip * amount / 100) / peop;
        console.log(tip_per_person)
        total = amount + (tip * amount / 100);
        console.log(total);
        total /= peop;
        console.log(total);
        tip_per_person_show.innerText = tip_per_person;
        total_per_person_show.innerText = total;
    }
}

reset.addEventListener('click', () => {
    tip_per_person_show.innerText = 0.00;
    total_per_person_show.innerText = 0.00;
    custom.classList.remove('custom_hide');
    custom_tip_input.classList.remove("custom_tip_input_show")
    peopleInput1.classList.remove('red');
    peopleInput2.classList.remove("red")
    tip_input.value = 0;
    bill.value = 0;
    people.value = 0;
})

custom.addEventListener('click', () => {
    custom.classList.add('custom_hide');
    custom_tip_input.classList.add("custom_tip_input_show")
})

tip_input.addEventListener('change', (e) => {
    tip = (Number)(e.target.value);
    console.log(tip);
    calculate();
})