let elHeadRes = document.querySelector(".head-res");
let elReload = document.querySelector(".reload");
let elForm = document.querySelector(".form");
let elInput = document.querySelector(".form-input");
// Result boxes
let elTotal1 = document.querySelector(".result-1");
let elTotal2 = document.querySelector(".result-2");
let elTotal3 = document.querySelector(".result-3");
let elTotal4 = document.querySelector(".result-4");
let totalResults = elTotal1 + elTotal2 + elTotal3 + elTotal4;

let pedestrianSpeed = 10;
let bicycleSpeed = 20.1;
let carSpeed = 70;
let planeSpeed = 800;

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  let elInputVal = elInput.value;

  elTotal1.textContent = (elInputVal / pedestrianSpeed).toFixed(2);
  elTotal2.textContent = (elInputVal / bicycleSpeed).toFixed(1);
  elTotal3.textContent = (elInputVal / carSpeed).toFixed(1);
  elTotal4.textContent = (elInputVal / planeSpeed).toFixed(1);
  //   Checks if the users enters less than 0
  if (elInputVal <= 0) {
    elForm.style.display = "none";
    alert("You've lost your chance, Please refresh the page");
    elHeadRes.textContent = "Please refresh the page or click the button!";
    elHeadRes.style.color = "tomato";
    elReload.style.display = "inline-block";

    // For user to refresh the page
    elReload.addEventListener("click", function () {
      window.location.reload();
    });
  }

  //   Checks if the users enters text (string)
  if (isNaN(elInputVal)) {
    elHeadRes.textContent = "You can not enter the text!";
    totalResults.style.display = "none";
  }
});
