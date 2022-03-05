let chose = document.querySelectorAll(".chose a");
let employeeForm = document.querySelector("form.employee");
let studentForm = document.querySelector("form.student");


chose.forEach((e) => {
  e.addEventListener("click", () => {
    chose.forEach((a) => {
      a.classList.remove("active");
      e.classList.add("active");
    });

    if (e.dataset.obj === 'employee') {
      employeeForm.style.transform = `translateX(${0}px)`;
      studentForm.style.transform = `translateX(${-1000}px)`;
   }
    else {
      employeeForm.style.transform = `translateX(${1000}px)`;
      studentForm.style.transform = `translateX(${0}px)`;
    }
  });
});


let inputs = document.querySelectorAll('.inputBox input');

inputs.forEach((e) => {
   e.addEventListener('focus', () => {
      if (e.dataset.user === 'user') {
         document.querySelector('.inputBox .user-st').style.color = "#305497";
         document.querySelector('.inputBox .user-emp').style.color = "#305497";
      } else if (e.dataset.pass === 'pass') {
         document.querySelector('.inputBox .lok-st').style.color = "#305497";
         document.querySelector('.inputBox .lok-emp').style.color = "#305497";
      }
   });
   e.addEventListener('blur', () => {
      if (e.dataset.user === 'user') {
         document.querySelector('.inputBox .user-st').style.color = "#333";
         document.querySelector('.inputBox .user-emp').style.color = "#333";
      } else if (e.dataset.pass === 'pass') {
         document.querySelector('.inputBox .lok-st').style.color = "#333";
         document.querySelector('.inputBox .lok-emp').style.color = "#333";
      }
   });
});