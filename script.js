let darkMode = document.querySelector("#btnDark");
let lightMode = document.querySelector("#btnLight");

darkMode.addEventListener("click", () => {  //dark mode js logic
    document.querySelector("body").style.backgroundColor = "black";
});

lightMode.addEventListener("click", () => {  // light mode js logic
    document.querySelector("body").style.backgroundColor = "white";
});