let QuestionSection = document.getElementById("questionSection");
let questionContainer = document.getElementById("questionContainer");
let subQ = document.getElementById("subQ");
let mainQ = document.getElementById("mainQ");
let choices = document.getElementsByClassName("choices");
let choice1 = document.getElementById("choice1");
let choice2 = document.getElementById("choice2");
let choice3 = document.getElementById("choice3");
let nextButton = document.getElementById("nextButton");
let back = document.getElementById("back");

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

let subTitle = ["Is that animal safe around small children?",
"If you rent, do you have permission from the property owner?",
"Will you need a fenced yard?",
"Depending on the pet, some require a great deal of attention!",
"Are you sedentary or physically active?",
"Do you have the financial resources if your pet has a medical crisis and has high veterinary bills?",
"If an emergency happens, or you are simply away from home or on vacation, can you rely on them?"
]

let addDarkColor = ["darkPurple","darkGreen"]
let addButtonColor = ["purple-buttons"]

nextButton.addEventListener("click", function(){
  mainQ.innerHTML = titleArray[nextClicked]
  subQ.innerHTML= subTitle[nextClicked]
  questionContainer.classList.add(addDarkColor[nextClicked])
  nextButton.classList.add(addDarkColor[nextClicked])  
  choices.classList.add(addButtonColor[nextClicked])
  nextClicked++
  if(nextClicked == 7){
    questionSection.style.visibility = "hidden";
  }
})
 

choice1.addEventListener("click", function(){

})

 