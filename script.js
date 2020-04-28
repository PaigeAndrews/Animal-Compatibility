let questionSection = document.getElementById("questionSection");
let questionContainer = document.getElementById("questionContainer");
let subQ = document.getElementById("subQ");
let mainQ = document.getElementById("mainQ");
let choices = document.getElementsByClassName("choices");
let choice1 = document.getElementById("choice1");
let choice2 = document.getElementById("choice2");
let choice3 = document.getElementById("choice3");
let resultsHeader =document.getElementById("resultsHeader")
let resultsContainer = document.getElementById("resultsContainer");
let animalInformation = document.getElementById("animalInformation");
let nextButton = document.getElementById("nextButton");
let back = document.getElementById("back");
let medToHave = document.getElementsByClassName("medToHave");
let easyToHave = document.getElementsByClassName("easyToHave");
let FISH = document.getElementById("FISH");
let FERRET = document.getElementById("FERRET");
let LARGEDOG = document.getElementById("LARGEDOG");
let GOAT = document.getElementById("GOAT");
let LARGEBIRD = document.getElementById("LARGEBIRD");
let HORSE = document.getElementById("HORSE");

// Animal values for refference
// cat = 16
// smallDog = 16
// mlDog = 24
// smallPet = -24
// smallBird = -24
// largeBird = 30
// reptile = -24
// amphibian = -24
// fish = -40
// Pig = 16
// ferret = 0
// goat = 8
// horse =36



let nextClicked = 1;
let petPoints = 0;

let titleArray = [
  "How do you feel about pet maintenance?",
  "If you have children, how will having a pet affect them?",
  "Will you want a pet that is less destructive to the home or outside area?",
  "How much space do you have inside and outside your home?",
  "How much time do you have to spend with a pet?",
  "What is your activity level?",
  "How much money could you spend on your new pet?",
  "Do you have a secondary caregiver?"
];

let subTitle = [
"Will you be able to live with pet hair, a litter box, vomit, water changes, general pet maintenance", 
"Is that animal safe around small children?",
"If you rent, do you have permission from the property owner?",
"Will you need a fenced yard?",
"Depending on the pet, some require a great deal of attention!",
"Are you sedentary or physically active?",
"Do you have the financial resources if your pet has a medical crisis and has high veterinary bills?",
"If an emergency happens, or you are simply away from home or on vacation, can you rely on them?"
];

let choice1Array= [
"I don't want to deal with a lot of animal maintenance",
"I have small children's saftely to consider",
"I don't want a pet that can leave marks on the home whatsoever",
"I only have enough room for a pet to stay stationary(mostly) in one room",
"I'm busy with little free time and I'm out of the house for more than 5 hours most days",
"I'm not very active and don't really spend much time outdoors",
"I could spend $150 to $1,000 per year",
"I'm unsure who I could get to take care of my pet"
];

let choice2Array = [
"I don't mind mild animal maintenance",
"I have small children but I've taught them how to behave around animals",
"I don't mind having the occational wear-and-tear caused by pets",
"I have room for a pet to roam free in the home or some room outdoors",
"I'm out of the house for most of the day but I have quite a lot of free time once I'm home",
"I spend lots of time outdoors and would enjoy playing with a pet but I prefer shorter walks",
"I could spend $1,000 to $3,000 per year",
"I have a friend or family member I can rely on incase an emergency"
]

let choice3Array = [
"I don't mind a great deal of animal maintenance",
"I dont have small children and we want a new family member",
"Doesn't matter to me at all about damage caused by pets",
"I have a large outside area for them",
"I have lots of free time to devote to my new pet",
"I love long walks all year round and I'm not scared of bad weather",
"I could spend $3,000 plus, per year",
"I have someone else in the home willing to take care of the pet anytime"
];

let addDarkColor = ["darkBlue","darkAqua","darkPurple","darkGreen", "darkYellow", "darkOrange", "darkRed", "darkPink"];
let addLightColor = ["lightBlue","lightAqua","lightPurple","lightGreen",  "lightYellow", "lightOrange", "lightRed", "lightPink"];
let addButtonColor = ["blue-buttons","aqua-buttons","purple-buttons", "green-buttons", "yellow-buttons", "orange-buttons", "red-buttons", "pink-buttons"];

window.onload = function() {
  mainQ.innerHTML = titleArray[0]
  subQ.innerHTML= subTitle[nextClicked]
  choice1.innerHTML = choice1Array[0]
  choice2.innerHTML = choice2Array[0]
  choice3.innerHTML = choice3Array[0]
};

 
function changeHTML(){
  mainQ.innerHTML = titleArray[nextClicked]
  subQ.innerHTML= subTitle[nextClicked]
  choice1.innerHTML = choice1Array[nextClicked]
  choice2.innerHTML = choice2Array[nextClicked]
  choice3.innerHTML = choice3Array[nextClicked]
  questionContainer.classList.add(addDarkColor[nextClicked])
  questionSection.classList.add(addLightColor[nextClicked])
  // nextButton.classList.add(addDarkColor[nextClicked])  
  choices[0].classList.add(addButtonColor[nextClicked])
  choices[1].classList.add(addButtonColor[nextClicked])
  choices[2].classList.add(addButtonColor[nextClicked])
  nextClicked++
  if(nextClicked == 9){
        resultsFunction()
    }

}

function resultsFunction(){
        questionSection.style.display = "none";
        resultsContainer.style.display = "flex";
        animalInformation.style.display= "block";
        resultsHeader.style.display= "block";

        if(petPoints >= -40){
          FISH.style.borderColor = "#57e657";
        }

        if(petPoints >= -24){
          var i;
          for (i = 0; i < easyToHave.length; i++) {
          easyToHave[i].style.borderColor = "#57e657";
          }
        }

        if(petPoints >= 0){
          FERRET.style.borderColor = "#57e657";
        }

        if(petPoints >= 8){
          GOAT.style.borderColor = "#57e657";
        }

        if(petPoints >= 16){
          var i;
          for (i = 0; i < medToHave.length; i++) {
          medToHave[i].style.borderColor = "#57e657";
          }
        }

        if(petPoints >= 24){
          LARGEDOG.style.borderColor = "#57e657";
        }
        
        if(petPoints >= 30){
          LARGEBIRD.style.borderColor = "#57e657";
        }
        if(petPoints >= 36){
          HORSE.style.borderColor = "#57e657";
        }
        
}


choice1.addEventListener("click", function(){
  changeHTML()
  petPoints -= 5
 console.log(petPoints)
})

choice2.addEventListener("click", function(){
  changeHTML()
  petPoints += 3
 console.log(petPoints)
})

choice3.addEventListener("click", function(){
  changeHTML()
  petPoints += 5
 console.log(petPoints)
})


 