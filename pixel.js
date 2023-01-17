"use strict";
const plusHidden = document.getElementsByClassName("fa-plus");
const content = document.getElementsByClassName("Lake-Tahoe-Yosimite");

// Adding button functionality
console.log(plusHidden.length);
for (let i = 0; i < plusHidden.length; i++) {
  plusHidden[i].addEventListener("click", function () {
    content[i].classList.toggle("displayNothing");
  });
}
// plusHidden.addEventListener("click",function()
// {
//     content.classList.toggle("displayNothing");
// });
