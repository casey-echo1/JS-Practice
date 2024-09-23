const hidebtn = document.getElementById('hide-btn');
const showBtn = document.getElementById('show-btn');
const hideAndShowBtn = document.getElementById('hide-and-show')
const changeColorBtn = document.getElementById('change-color-btn');
const demoHeading = document.getElementById('demo-heading');

const colors = ['red', 'blue', 'orange', 'purple'];
let colorIndex = 0;
function changeColor() {
    demoHeading.style.color = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;

}
setInterval(changeColor, 1000);

//hide hedding
hidebtn.addEventListener('click', () => {
    demoHeading.style.display = 'none';
});

//show heading
showBtn.addEventListener('click', () => {
    demoHeading.style.display = '';
});

//change heading color when clicked

changeColorBtn.addEventListener('click', () => {
    demoHeading.style.color = 'blue';
});

// toggle visibility of heading
hideAndShowBtn.addEventListener('click', () => {
    if(demoHeading.style.display === '') {
        demoHeading.style.display = 'none';
    }
    else {
        demoHeading.style.display = '';
    }
});


