function Star(el, count, callback) {
  // Write a logic to create star rating problem
  let star = document.querySelector(el);
  let emptyStar = document.createElement("i");
  emptyStar.setAttribute("class", "fa fa-star-o");

  let filledStar = document.createElement("i");
  filledStar.setAttribute("class", "fa fa-star");

  let startContainer = document.createElement("div");
  startContainer.style.display = "flex";

  for (let index = 0; index < 5; index++) {
    startContainer.append(filledStar);
  }

  star.appendChild(startContainer);

}

function getStar(value) {
  document.getElementById("display-star").innerHTML = value;
}
new Star("#star", 5, getStar);
