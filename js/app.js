let listItems = document.querySelectorAll('.nav-item');

let toggle = document.querySelector('.toggle');
let navigation = document.querySelector('.sidebar');
let main = document.querySelector('.main');
let close = document.querySelector('.toggle i[name="close"]');
let menu = document.querySelector('.toggle i[name="menu"]');


// listItems.forEach((item) => {
//   // Adding class active to to list item when clicked

//   // let activeItem = item.classList.contains('active')
//   console.log(item.parentNode.childNodes)


//   item.addEventListener('click', () => {
//     item.classList.add('active');
//     classList.contains
//   })
// });


//  Sidebar Toggler
// Menu Toggle
toggle.onclick = function () {
  navigation.classList.toggle('active');
  main.classList.toggle('active');

  if (navigation.classList.contains('active')) {
    menu.style.display = 'none';
    close.style.display = 'block';
  } else {
    menu.style.display = 'block';
    close.style.display = 'none';
  }
}

// User drop down menu toggle
const resultBox = document.querySelector('.result-box'),
  selectBtn = document.querySelector('.select-btn')

selectBtn.addEventListener('click', () => {
  resultBox.classList.toggle('active');
  selectBtn.classList.toggle('active');
})