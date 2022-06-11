let floors = document.getElementById("floors")

function addFloors(){
    let userInput = document.getElementById("noOfFloor");
    console.log(userInput.value);
    for (let index = 1; index <=userInput.value; index++) {
      
      floorUi(index);
    }   
}



function floorUi(floorNo){

  let floor = document.createElement('div');
  floor.setAttribute('id', "floor");


  let p = document.createElement('p');
  p.innerText="Floor " + floorNo;
  floor.append(p);

  let container = document.createElement('div');
  container.setAttribute("id","container");

  let buttonContainer = document.createElement('div');
  container.setAttribute("id","button-container");

  let upButton = document.createElement('button');
  upButton.innerText="Up";

  let downButton = document.createElement('button');
  downButton.innerText="Down";

  buttonContainer.append(upButton);
  buttonContainer.append(downButton);
  container.append(buttonContainer);

  floor.append(container);

  floors.append(floor);
  

}