let choos = document.querySelectorAll('.choos a');
let studentForm = document.querySelector('.student ');
let employeeForm = document.querySelector('.employee ');
let titelForm = document.querySelector('#titelForm ');
choos.forEach((ch) => {
    ch.addEventListener('click', () => {
        choos.forEach((a) => {
            a.classList.remove('active');
            ch.classList.add('active');
        });
        if (ch.dataset.obj === "employee") {
            employeeForm.style.transform = `translateX(${0}px)`;
            studentForm.style.transform = `translateX(${-400}px)`;
            titelForm.innerHTML = `Employee Form`;
        } else {
            employeeForm.style.transform = `translateX(${400}px)`;
            studentForm.style.transform = `translateX(${0}px)`;
            titelForm.innerHTML = `Student Form`;
        }
    });
});
