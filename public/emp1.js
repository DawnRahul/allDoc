
let addLabel = document.querySelector(".add-emp-1-label");
let btn = document.querySelector(".add-emp-1-btn");
let previousEmp1 = document.querySelector(".emp-previous-1");
let previousEmp_2 = document.querySelector(".emp-previous-2");

btn.addEventListener('click', addPreviousEmp);

let count = 1;

function addPreviousEmp() {
    count++;

    if(count % 2 == 0){
        addLabel.innerHTML = "Don't have previous employment(s) !"
        btn.innerHTML = "-";

        previousEmp1.style.setProperty('display', 'block', 'important');
        previousEmp_2.style.setProperty('display', 'none', 'important');
        document.querySelector(".more-emp2-box").style.display = "block";
        //using setProperty() because to be able to use !important also with the 'block' value
        // console.log(count + "\n");

    }else {
        addLabel.innerHTML = "Have previous employment(s) ?"
        btn.innerHTML = "+";

        previousEmp1.style.setProperty('display', 'none', 'important');
        previousEmp_2.style.setProperty('display', 'none', 'important');
        document.querySelector(".more-emp2-box").style.display = "none";
        // console.log(count + "\n");
    }

}