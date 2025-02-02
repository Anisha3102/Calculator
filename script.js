let nums = document.querySelectorAll(".key");
let del = document.querySelector("#del");
let clr = document.querySelector("#clr");
let eql = document.querySelector("#result");
let opspace = document.querySelector("#output-space");
let modebtn = document.querySelector("#mode");
let page = document.querySelector("#page");
let main = document.querySelector("#main");
let btns = document.querySelectorAll("button");

let mode = "light";

nums.forEach((num) => {
  num.addEventListener("click", () => {
    opspace.value += num.innerText;
  });
});

del.addEventListener("click", () => {
  opspace.value = opspace.value.slice(0, -1);
});

clr.addEventListener("click", () => {
  opspace.value = "";
});

eql.addEventListener("click", () => {
  try {
    opspace.value = eval(opspace.value);
  } catch (err) {
    alert("INVALID");
  }
});

modebtn.addEventListener("click", () => {
  if (mode == "dark") {
    page.classList.replace("container-dark", "container-light");

    main.classList.replace("calculator-dark", "calculator-light");

    opspace.classList.replace("input-dark", "input-light");

    btns.forEach((btn) => {
      btn.classList.replace("btn-dark", "btn-light");
    });

    eql.classList.replace("equal-dark", "equal-light");

    modebtn.classList.replace("mode-dark", "mode-light");
    modebtn.innerText = "Dark Mode";

    mode = "light";
  } else {
    page.classList.replace("container-light", "container-dark");

    main.classList.replace("calculator-light", "calculator-dark");

    opspace.classList.replace("input-light", "input-dark");

    btns.forEach((btn) => {
      btn.classList.replace("btn-light", "btn-dark");
    });

    eql.classList.replace("equal-light", "equal-dark");

    modebtn.classList.replace("mode-light", "mode-dark");
    modebtn.innerText = "Light Mode";

    mode = "dark";
  }
});
