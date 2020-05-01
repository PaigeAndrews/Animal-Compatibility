let openingParagraph = document.getElementById("openingParagraph");
let questionSection = document.getElementById("questionSection");
let questionContainer = document.getElementById("questionContainer");
let subQ = document.getElementById("subQ");
let mainQ = document.getElementById("mainQ");
let choice1 = document.getElementById("choice1");
let choice2 = document.getElementById("choice2");
let choice3 = document.getElementById("choice3");
let resultsHeader =document.getElementById("resultsHeader")
let resultsContainer = document.getElementById("resultsContainer");
let animalInformation = document.getElementById("animalInformation");
let animalName = document.getElementById("animalName");
let animalParagraph = document.getElementById("animalParagraph");
let nextButton = document.getElementById("nextButton");
let back = document.getElementById("back");
let cat = document.getElementById("cat");
let fish = document.getElementById("fish");
let ferret = document.getElementById("ferret");
let smallDog = document.getElementById("smallDog");
let LargeDog = document.getElementById("largeDog");
let goat = document.getElementById("goat");
let smallBird = document.getElementById("smallBird");
let largeBird = document.getElementById("largeBird");
let horse = document.getElementById("horse");
let medToHave = document.getElementsByClassName("medToHave");
let easyToHave = document.getElementsByClassName("easyToHave");
let choices = document.getElementsByClassName("choices");


// window.onload = function() {
//   var node = document.createElement("LI");
//   var textnode = document.createTextNode("Water");
//   node.appendChild(textnode);
//   document.getElementById("myList").appendChild(node);

//   mainQ.innerHTML = titleArray[0]
//   subQ.innerHTML= subTitle[0]
//   choice1.innerHTML = choice1Array[0]
//   choice2.innerHTML = choice2Array[0]
//   choice3.innerHTML = choice3Array[0]
// };


// Animal values for refference
// const animalObject = {
// cat : 16,
// smallDog : 16,
// largeDog : 24,
// smallPet : -24,
// smallBird : -24,
// largeBird : 30,
// reptile : -24,
// amphibian : -24,
// fish : -40,
// Pig:16,
// ferret:0,
// goat:8,
// horse:36
// }


let nextClicked = 0;
let petPoints = 0;

let titleArray = [
  "If you have children, how will having a pet affect them?",
  "Will you want a pet that is less destructive to the home or outside area?",
  "How much space do you have inside and outside your home?",
  "How much time do you have to spend with a pet?",
  "What is your activity level?",
  "How much money could you spend on your new pet?",
  "Do you have a secondary caregiver?"
];

let subTitle = [ 
"Is that animal safe around small children?",
"If you rent, do you have permission from the property owner?",
"Will you need a fenced yard?",
"Depending on the pet, some require a great deal of attention!",
"Are you sedentary or physically active?",
"Do you have the financial resources if your pet has a medical crisis and has high veterinary bills?",
"If an emergency happens, or you are simply away from home or on vacation, can you rely on them?"
];

let choice1Array= [
"I have small children's saftely to consider",
"I don't want a pet that can leave marks on the home whatsoever",
"I only have enough room for a pet to stay stationary(mostly) in one room",
"I'm busy with little free time and I'm out of the house for more than 5 hours most days",
"I'm not very active and don't really spend much time outdoors",
"I could spend $150 to $1,000 per year",
"I'm unsure who I could get to take care of my pet"
];

let choice2Array = [
"I have small children but I've taught them how to behave around animals",
"I don't mind having the occational wear-and-tear caused by pets",
"I have room for a pet to roam free in the home or some room outdoors",
"I'm out of the house for most of the day but I have quite a lot of free time once I'm home",
"I spend lots of time outdoors and would enjoy playing with a pet but I prefer shorter walks",
"I could spend $1,000 to $3,000 per year",
"I have a friend or family member I can rely on incase an emergency"
]

let choice3Array = [
"I dont have small children and we want a new family member",
"Doesn't matter to me at all about damage caused by pets",
"I have a large outside area for them",
"I have lots of free time to devote to my new pet",
"I love long walks all year round and I'm not scared of bad weather",
"I could spend $3,000 plus, per year",
"I have someone else in the home willing to take care of the pet anytime"
];

let addDarkColor = ["darkAqua","darkPurple","darkGreen", "darkYellow", "darkOrange", "darkRed", "darkPink"];
let addLightColor = ["lightAqua","lightPurple","lightGreen",  "lightYellow", "lightOrange", "lightRed", "lightPink"];
let addButtonColor = ["aqua-buttons","purple-buttons", "green-buttons", "yellow-buttons", "orange-buttons", "red-buttons", "pink-buttons"];

let innerIds = [mainQ, subQ, choice1, choice2, choice3];
let changingArrays = [titleArray, subTitle, choice1Array, choice2Array, choice3Array];
let num = 0;  


 
function changeHTML(){
  for(let i=0; i<5; i++){
    innerIds[i].removeChild(innerIds[i].childNodes[0]); 
    let textnode = document.createTextNode((changingArrays[i])[nextClicked]);
    innerIds[i].appendChild(textnode);
  }
  num++

  questionContainer.classList.add(addDarkColor[nextClicked])
  questionSection.classList.add(addLightColor[nextClicked])  
  choices[0].classList.add(addButtonColor[nextClicked])
  choices[1].classList.add(addButtonColor[nextClicked])
  choices[2].classList.add(addButtonColor[nextClicked])
  nextClicked++
  if(nextClicked == 8){
        resultsFunction()
        resultsHeader.scrollIntoView()
    }
}

function resultsFunction(){
        openingParagraph.style.display = "none";
        questionSection.style.display = "none";
        resultsContainer.style.display = "flex";
        animalInformation.style.display= "block";
        resultsHeader.style.display= "block";

        if(petPoints >= -40){
          fish.style.borderColor = "#57e657";
        }

        if(petPoints >= -24){
          let i;
          for (i = 0; i < easyToHave.length; i++) {
          easyToHave[i].style.borderColor = "#57e657";
          }
        }

        if(petPoints >= 0){
          ferret.style.borderColor = "#57e657";
        }

        if(petPoints >= 8){
          goat.style.borderColor = "#57e657";
        }

        if(petPoints >= 16){
          let i;
          for (i = 0; i < medToHave.length; i++) {
          medToHave[i].style.borderColor = "#57e657";
          }
        }

        if(petPoints >= 24){
          largeDog.style.borderColor = "#57e657";
        }
        
        if(petPoints >= 30){
          largeBird.style.borderColor = "#57e657";
        }
        if(petPoints >= 36){
          horse.style.borderColor = "#57e657";
        }
        
}


choice1.addEventListener("click", function(){
  changeHTML()
  petPoints -= 5
//  console.log(petPoints)
})

choice2.addEventListener("click", function(){
  changeHTML()
  petPoints += 3
//  console.log(petPoints)
})

choice3.addEventListener("click", function(){
  changeHTML()
  petPoints += 5
//  console.log(petPoints)
})

// let animalIds = ["cat"];
// let animalIdParagraph = ["1"];

//  cat.addEventListener("click", function(){
//   document.getElementById("1").scrollIntoView()
//  })

let animalNameArray = [cat, smallDog];

let animalParagraphArray = [
  "Cats are a very common household pet. They cannot stay cooped up in one room, and ideally need roam of the house or outside. Cat need a litter box (changed daily). If you want mulitiple cats you need one per cat with one extra. Cats enjoy scratching posts and high places. Please note that cats can have mild destruction on home when it comes to their claws and fur. They are very loving but also independent animals, so you won't have to worry about them at work if you have a busy schedule.",
  "Small dogs can stay indoors or outdoors. They need regular exercise and do not cause much home destruction. They need attention and playtime though, so before adopting one you have sufficent time to spend with it daily. Small dogs really enjoy little play toys you can leave around your home for them to play with. They are not a high maintenance pet. "
];

// for (let name of animalNameArray){
//   name.addEventListener("click", function(){
//     animalParagraph.innerHTML = animalParagraphArray[animalNameArray.indexOf(name)]
//   })
// }

// let animalObject = {
//   cat: [
//     cat,
//     "Cat",
//     "myDescription"
//   ],
//   smallDog:[
//     "Small Dog",
//     "description"
//   ]
// }

arrIds = [cat, smallDog, largeDog, smallPet];
arrTitle = ["Cat", "Small Dog", "largeDog", "Small Pet"];
arrDescription = [
  "Cats are a very common household pet. They cannot stay cooped up in one room, and ideally need roam of the house or outside. Cat need a litter box (changed daily). If you want mulitiple cats you need one per cat with one extra. Cats enjoy scratching posts and high places. Please note that cats can have mild destruction on home when it comes to their claws and fur. They are very loving but also independent animals, so you won't have to worry about them at work if you have a busy schedule.", 
  "Small dogs can stay indoors or outdoors. They need regular exercise and do not cause much home destruction. They need attention and playtime though, so before adopting one you have sufficent time to spend with it daily. Small dogs really enjoy little play toys you can leave around your home for them to play with. They are not a high maintenance pet.",
  "Large dogs are about the same with medium dogs when it comes to care. They can also live indoors or outdoors, however, it is best for them be in a large outside area. You really need a lot of time spend with them and depending on the breed, you may have to pamper their fur coats if thick and needs brushing to shed for summer time. They also need daily exercise! A long walk should be great for them and you as well, as you get to know your new family member.",
  " Small Pets can include hermit crabs, hamsters, guinea pigs, rabbits, rats, snails, you name it! These include animals that can live in a big enough cage for their size and stay (mostly) in one room. These are very much beginner and low maintenance pets. They do not require much attention or maintenance if you have a more busy life style. However they can not be shunned and still need their living environments to be cleaned and have enough attention from owners. Please do appropriate research on the specific small pet you would like to take into your new home."
];

for (let h=0; h<4; h++){
  arrIds[h].addEventListener("click", function(){
    let textnode = document.createTextNode(arrTitle[h]);
    arrIds[h].appendChild(textnode);
    animalName.innerHTML = arrTitle[h]
    animalParagraph.innerHTML = arrDescription[h]
    animalInformation.scrollIntoView()
  })
} 