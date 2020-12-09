const smallcups = document.querySelectorAll(".cup-small");

const liters = document.getElementById("liters");

const percentage = document.getElementById("percentage");

const remained = document.getElementById("remained");

updateBigCup();

smallcups.forEach((cup, index) => {
  cup.addEventListener("click", () => {
    highlightCups(index);
  });
});

function highlightCups(idx) {
  if (
    smallcups[idx].classList.contains("full") &&
    !smallcups[idx].nextElementSibling.classList.contains("full")
  ) {
    idx--;
  }
  smallcups.forEach((cup, index) => {
    if (index <= idx) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });
  updateBigCup();
}

function updateBigCup() {
  const fullcups = document.querySelectorAll(".cup-small.full").length;
  const totalCups = smallcups.length;

  if (fullcups === 0) {
    percentage.style.height = 0;
    percentage.style.visibility = "hidden";
  } else {
    percentage.style.visibility = "visible";
    console.log(fullcups, totalCups);
    percentage.style.height = `${(fullcups / totalCups) * 330}px`;
    percentage.innerText = `${(fullcups / totalCups) * 100}%`;
  }
  if (fullcups === totalCups) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
    remained.style.visibility = "visible";
    liters.innerText = `${2 - (250 * fullcups) / 1000}L`;
  }
}
