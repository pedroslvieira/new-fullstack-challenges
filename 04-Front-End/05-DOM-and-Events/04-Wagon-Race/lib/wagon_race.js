// TODO: write your code here

const carOne = document.querySelector('#player1-race .active');
document.addEventListener("keyup", (event) => {
  if (event.key == "o") {
    carOne.classList.toggle("active");
  } else {
    console.log("not the right key");
  }
});
