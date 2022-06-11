let grid = document.getElementById("grid");
grid.style.padding = "10px";
grid.style.border = "1px solid black";
var matrix = [];
document.addEventListener("DOMContentLoaded", () => {
  initializeMatrix();

  console.log("matrix", matrix);
});

function initializeMatrix() {
  for (var i = 0; i < 8; i++) {
    matrix[i] = [];
    for (var j = 0; j < 8; j++) {
      matrix[i][j] = 0;
    }
  }
  // console.log("matrix initialized")
}

grid.addEventListener("click", (e) => {
  // console.log(e.target, "this is clicked");
  grid.innerHTML = null;
  generateGrid();
  initializeMatrix();
  let x = parseInt(e.target.getAttribute("i"));
  let y = parseInt(e.target.getAttribute("j"));

  console.log(x, y);
  // let diagonal = [];

  // diagonal  0<(i+j )-i<9

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {

      //for this => / diagonal
      if (x + y - i + 1 < 9 && x + y - i + 1 > 0) {
        res = x + y - i;
        // console.log("res",res)
        matrix[i][res] = 1;
      }

      // i>j => subtract  => i - abs(i-j) >0
      // i<j => add  => i + abs(i-j) <9

      //for this => \ diagonal
      if (x < y) {
        if (i + Math.abs(x - y) < 8) {
          res = i + Math.abs(x - y);
          // console.log("res",res)
          matrix[i][res] = 1;
        }
      } else if (x > y) {
        if (i - Math.abs(x - y) < 8) {
          res = i - Math.abs(x - y);
          // console.log("res",res)
          matrix[i][res] = 1;
        }
      }
      else if(x===y){
        if(i === j)
        {
          matrix[i][j] = 1;
        }
      }
    }
  }

  console.log("matrix", matrix);

  for (let i=0; i<8;i++) {
    let row = document.querySelectorAll("#row")[i];
    // console.log("row",row)
    for (let j=0; j<8;j++) {
      // console.log(i,j ,":",matrix[i][j])
      let selectedElement = row.getElementsByTagName("span")[j];
      if (matrix[i][j] === 1) {
        selectedElement.style.backgroundColor = digonalColor;
      }
    }
  }

});

const color = "#ffffff";
const oddColor = "#000000";
const digonalColor = "#EC3323";
const size = 8;

generateGrid();

function generateGrid() {
  for (let i = 0; i < size; i++) {
    let row = document.createElement("span");
    row.setAttribute("id", "row");
    row.style.display = "flex";

    for (let j = 0; j < size; j++) {
      if ((i + j) % 2 === 0) {
        let div = document.createElement("span");
        div.setAttribute("i", i);
        div.setAttribute("j", j);
        // div.setAttribute("className", j);
        div.style.height = "50px";
        div.style.width = "50px";
        div.style.backgroundColor = color;
        row.appendChild(div);
      } else {
        let div = document.createElement("span");
        div.setAttribute("i", i);
        div.setAttribute("j", j);
        div.style.height = "50px";
        div.style.width = "50px";
        div.style.backgroundColor = oddColor;
        row.appendChild(div);
      }
      grid.appendChild(row);
    }
    // let lineBreak = document.createElement("br");
    // grid.appendChild(lineBreak);
  }
}
