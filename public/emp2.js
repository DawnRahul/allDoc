

let addLabel2 = document.querySelector(".add-emp-2-label");
let btn2 = document.querySelector(".add-emp-2-btn");
let previousEmp2 = document.querySelector(".emp-previous-2");

btn2.addEventListener('click', addPreviousEmployment);

let countUp = 1;

function addPreviousEmployment() {
    countUp++;

    if(countUp % 2 == 0){
        addLabel2.innerHTML = "Don't have another employment !"
        btn2.innerHTML = "-";

        previousEmp2.style.setProperty('display', 'block', 'important');
        //using setProperty() because to be able to use !important also with the 'block' value
        // console.log(count + "\n");

    }else {
        addLabel2.innerHTML = "Have another employment ?"
        btn2.innerHTML = "+";

        previousEmp2.style.setProperty('display', 'none', 'important');
        // console.log(count + "\n");
    }

}