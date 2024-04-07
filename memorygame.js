const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];


let choice_one = null
let choice_two = null


function shuffle(array) {
  let counter = array.length;

 
  while (counter > 0) {
   
    let index = Math.floor(Math.random() * counter);

    
    counter--;

    
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

function createDivsForColors(colorArray) {
  for (let color of colorArray) {
   
    const newDiv = document.createElement("div");


    newDiv.classList.add(color);

   
    newDiv.addEventListener("click", handleCardClick);

   
    gameContainer.append(newDiv);
  }
}


function handleCardClick(event) {
 
  console.log("you just clicked div element", event.target);

 
  const user_selected_choice_color = event.target.className;
  console.log("This is the color from that div element", user_selected_choice_color)


  
  if(choice_one === null && choice_two === null) { 
    console.log("Scenario 1 just happened")

    
    choice_one = event.target

  
    event.target.style.backgroundColor = user_selected_choice_color


  } else if(choice_one !== null && choice_two === null) { 

    console.log("Scenario 2 just happened")

    
    choice_two = event.target

    
    event.target.style.backgroundColor = user_selected_choice_color


  
    setTimeout(function(){
      console.log("Scenario 3 just happened")

      
      if(choice_one.className === choice_two.className) {
     
        choice_one = null
        choice_two = null
        return
      }

      
      choice_one.style.backgroundColor = ""
      choice_two.style.backgroundColor = ""
      
    
      choice_one = null
      choice_two = null
    }, 1000) 

  }

}

let shuffledColors = shuffle(COLORS);


createDivsForColors(shuffledColors);
