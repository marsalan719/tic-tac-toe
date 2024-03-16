let box = document.querySelectorAll(".box");
let heading = document.querySelector(".heading");
let rbbt = document.querySelector(".rbbt");
let New = document.querySelector("New");
let end = document.querySelector(".end");
let rbt = document.querySelectorAll(".rbt");
let p = document.querySelector(".p");
const arr = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

rbt.forEach((rbt) => {
  rbt.addEventListener("click", () => {
    end.classList.add("hide");
    rbbt.classList.remove("hide");
    box.forEach((box) => {
      box.innerText = "";
      box.disabled = false;
    });
  });
});

let text = true;
box.forEach((box) => {
  box.addEventListener("click", () => {
    if (text) {
      box.innerText = "O";
      text = false;
    } else {
      box.innerText = "X";
      text = true;
    }
    box.disabled = true;
    check();
  });
});

function check() {
  for (const value of arr) {
    let a = value[0];
    let b = value[1];
    let c = value[2];
    if (
      box[a].innerText != "" &&
      box[b].innerText != "" &&
      box[c].innerText != ""
    ) {
      if (
        box[a].innerText == box[b].innerText &&
        box[a].innerText == box[c].innerText
      ) {
        console.log("you win");
        box.forEach((box) => {
          box.disabled = true;
        });

        end.classList.remove("hide");
        rbbt.classList.add("hide");
        heading.innerText = box[a].innerText + " is winner";
      }
    }
  }
}
