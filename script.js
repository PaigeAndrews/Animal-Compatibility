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
let tryAgainContainer = document.getElementById("tryAgainContainer");
let sideImage = document.getElementById("sideImage");
let animalParagraphRightImage = document.getElementById("animalParagraphRightImage");
let back = document.getElementById("back");
let cat = document.getElementById("cat");
let fish = document.getElementById("fish");
let ferret = document.getElementById("ferret");
let smallDog = document.getElementById("smallDog");
let largeDog = document.getElementById("largeDog");
let goat = document.getElementById("goat");
let smallBird = document.getElementById("smallBird");
let largeBird = document.getElementById("largeBird");
let horse = document.getElementById("horse");
let hardToHave = document.getElementsByClassName("hardToHave");
let medToHave = document.getElementsByClassName("medToHave");
let easyToHave = document.getElementsByClassName("easyToHave");
let choices = document.getElementsByClassName("choices");



let titleArray = [
  " ",
  "If you have children, how will having a pet affect them?",
  "Will you want a pet that is less destructive to the home or outside area?",
  "How much space do you have inside and outside your home?",
  "How much time do you have to spend with a pet?",
  "What is your activity level?",
  "How much money could you spend on your new pet?",
  "Do you have a secondary caregiver?"
];

let subTitle = [ 
  " ",
"Is that animal safe around small children?",
"If you rent, do you have permission from the property owner?",
"Will you need a fenced yard?",
"Depending on the pet, some require a great deal of attention!",
"Are you sedentary or physically active?",
"Do you have the financial resources if your pet has a medical crisis and has high veterinary bills?",
"If an emergency happens, or you are simply away from home or on vacation, can you rely on them?"
];

let choice1Array= [
  " ",
"I have small children's safety to consider",
"I don't want a pet that can leave marks on the home whatsoever",
"I only have enough room for a pet to stay stationary(mostly) in one room",
"I'm busy with little free time and I'm out of the house for most of the day",
"I'm not very active and don't really spend much time outdoors",
"I could spend $150 to $1,000 per year",
"I'm unsure who I could get to take care of my pet"
];

let choice2Array = [
  " ",
"I have small children but I've taught them how to behave around animals",
"I don't mind having the occational wear-and-tear caused by pets",
"I have room for a pet to roam free in the home or some room outdoors",
"I'm out of the house for most of the day but I have quite a lot of free time once I'm home",
"I spend lots of time outdoors and would enjoy playing with a pet but I prefer shorter walks",
"I could spend $1,000 to $3,000 per year",
"I have a friend or family member I can rely on incase an emergency"
]

let choice3Array = [
  " ",
"I dont have small children and we want a new family member",
"Doesn't matter to me at all about damage caused by pets",
"I have a large outside area for them",
"I have lots of free time to devote to my new pet",
"I love long walks all year round and I'm not scared of bad weather",
"I could spend $3,000 plus, per year",
"I have someone else in the home willing to take care of the pet anytime"
];

let addDarkColor = ["darkBlue", "darkAqua","darkPurple","darkGreen", "darkYellow", "darkOrange", "darkRed", "darkPink"];
let addLightColor = ["lightBlue", "lightAqua","lightPurple","lightGreen",  "lightYellow", "lightOrange", "lightRed", "lightPink"];
let addButtonColor = ["blue-buttons","aqua-buttons","purple-buttons", "green-buttons", "yellow-buttons", "orange-buttons", "red-buttons", "pink-buttons"];
let addSideImage = [" ", "images/holdingPet.png", "images/catScratch.png","images/yard.png","images/spendTime.png","images/walkingDog.png","images/vetBill.png","images/secondaryCargiver2.png" ];

let innerIds = [mainQ, subQ, choice1, choice2, choice3];
let changingArrays = [titleArray, subTitle, choice1Array, choice2Array, choice3Array];

 
let nextClicked = 1;
let petPoints = 0;


 
function changeHTML(){
  for(let i=0; i<5; i++){
    innerIds[i].removeChild(innerIds[i].childNodes[0]); 
    let textnode = document.createTextNode((changingArrays[i])[nextClicked]);
    innerIds[i].appendChild(textnode);
  }
  let prev = nextClicked - 1
  if (prev < 0) {
    prev = addDarkColor.length - 1
  }
  
  sideImage.src = addSideImage[nextClicked]

  questionContainer.classList.add(addDarkColor[nextClicked])
  questionContainer.classList.remove(addDarkColor[prev])

  questionSection.classList.add(addLightColor[nextClicked])
  questionSection.classList.remove(addDarkColor[prev])
  
  choices[0].classList.add(addButtonColor[nextClicked])
  choices[0].classList.remove(addDarkColor[prev])

  choices[1].classList.add(addButtonColor[nextClicked])
  choices[1].classList.remove(addDarkColor[prev])

  choices[2].classList.add(addButtonColor[nextClicked])
  choices[2].classList.remove(addDarkColor[prev])

  nextClicked++
  
  if(nextClicked == 9){
        resultsFunction()
        resultsHeader.scrollIntoView()
    }
}


function resultsFunction(){
        openingParagraph.style.display = "none";
        questionSection.style.display = "none";
        resultsContainer.style.display = "flex";
        animalInformation.style.display= "block";
        resultsHeader.style.display = "block";
        tryAgainContainer.style.display = "flex";
        

        if(petPoints >= -32){
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

        if(petPoints >= 16){
          for (let i = 0; i < medToHave.length; i++) {
            medToHave[i].style.borderColor = "#57e657";
          }
        }

        if(petPoints >= 24){
          for (let i = 0; i < hardToHave.length; i++) {
            hardToHave[i].style.borderColor = "#57e657";
          }
        }
        
        if(petPoints >= 30){
          largeBird.style.borderColor = "#57e657";
        }

        if(petPoints >= 36){
          horse.style.borderColor = "#57e657";
        }
        
}


choice1.addEventListener("click", function(){
  petPoints -= 5
  console.log(petPoints)
  changeHTML()
})

choice2.addEventListener("click", function(){
  petPoints += 3
  console.log(petPoints)
  changeHTML()
})

choice3.addEventListener("click", function(){
  petPoints += 5
  console.log(petPoints)
  changeHTML()
})

tryAgain.addEventListener("click", function(){
  location.reload();
    return false;
})


arrIds = [cat, smallDog, largeDog, smallPet, smallBird, largeBird, reptile, amphibian, fish, pig, ferret, goat, horse];
arrTitle = ["Cat", "Small Dog", "Large Dog", "Small Pet", "Small Bird", "Large Bird", "Reptile", "Amphibian", "Fish", "Pig", "Ferret", "Goat", "Horse"];
arrDescription = [
  "Cats are a very common household pet. They cannot stay cooped up in one room, and ideally need roam of the house or outside. Cats need a litter box (cleaned daily). If you want mulitiple cats you need one per cat with one extra. Cats enjoy scratching posts and high places. Please note that cats can have mild destruction on home when it comes to their claws and fur. They are very loving but also independent animals, so you won't have to worry about them at work if you have a busy schedule.", 
  "Small dogs can stay indoors or outdoors. They need regular exercise and do not cause much home destruction. Small dogs can also be potty trained to go where you want them to. They need attention and playtime though, so before adopting one you should have sufficent time to spend with it daily. Small dogs really enjoy little play toys you can leave around your home for them to play with. They are not a high maintenance pets.",
  "Large dogs are about the same as medium dogs when it comes to care. They can also live indoors or outdoors, however, it is best for them be in a large outside area. You really need a lot of time spend with them and depending on the breed, you may have to pamper their fur coats if thick and needs brushing to shed for summer time. They also need daily exercise! A long walk should be great for them and you as well, as you get to know your new family member.",
  "Small Pets can include hermit crabs, hamsters, guinea pigs, rabbits, rats, snails, you name it! These include small animals that can live in a big enough cage for their size and stay (mostly) in one room. These are very much beginner and low maintenance pets. They do not require too much maintenance if you have a more busy life style. However they can not be shunned and still need their living environments to be cleaned and have enough attention from owners. Please do appropriate research on the specific small pet you would like to take into your new home.",
  "Small birds are mostly low maintenance pets, however they do need to have attention daily and cage cleaned. Ideally you should let them out of their enclosure daily as well, to spend more time with you. You should have many gadgets and toys for your new small bird to play with in their cage and in your home. They are very social animals, so it would be a good idea to think about purchasing a second small bird to keep the other company.",
  "Large birds are considered high maintenance pets. They are extremely social animals, so they require a great deal of attention and play time. These pets are not ideal for people who have a busy day to day life, and require many hours of attention from owners. Ideally the only time they should be left in their cage is when it is time for them to sleep. Some large birds can also be destructive on the home. Many like to chew and snap anything they get ahold of in the home, or just make a mess in general. These are not beginner pets by any means. They are high cost high reward though! Having a large bird can be very comforting and are amazing pets! Some you can even teach to speak words to you or sing, and dance!",
  "Reptiles are considered low to medium maintenance pets. They do not require a great deal of attention, and most of them can stay in their enclosures. They might require more money upfront, but the maintenance fees annually are very low. They need a UVB light and heating lamp in their enclosure to simulate daylight for their bones to grow properly and to stay warm. They also need their tanks cleaned at least weekly.",
  "Amphibians are considered a mostly low maintenance pet. They shouldn't be handled too often. If you do handle them, make sure your hands are clean and also wet so that you do not make them sick or hurt their skin. They will also need their enclosure cleaned regularly. They will most likely need a moist encolsure, so be sure to do extensive research on the pet you wish to get before committing.",
  "Fish are one of the most low maintenance pets you can get, and are often reffered to as a 'beginners pet'. They do not require attention from you, but you still have to do weekly water changes to the tank and treat it with the right chemicals, so your fish can stay healthy. There are many different types of fish, and you will have to do research on the specific kind you want. Some require a water heater and must maintain the water tempurature for their body.",
  "Pigs are a lot cleaner than their popular reputation indicates and they can make super pets. They are sociable and intelligent, and can become very obedient, but they are also curious, stubborn, and, if treated poorly, potentially dangerous. Indoor pigs can be house trained and leash trained like dogs, but they have unique care requirements that you should be prepared for. If outside, make sure your pig has a big open fenced in area to roam. Pigs need to exercise and have attenton daily.",
  "Ferrets are popular pets due to their friendly and outgoing personalities. Curious by nature, a ferret can provide hours of entertainment for their owner. However, they require a great deal of care and attention. To keep a ferret as a pet, you will need to create a proper cage environment with a litter box, food and water bowls, and toys. They are generally low maintenance pets, but still need attention and propper care. Please note they are escape artists, so make sure your home has no way outside before letting them run around in the home.",
  "Goats are smart, curious pets that are fun to have around. However, they can also require some work. If not cared for properly, they can get aggressive and may try to escape to greener pastures, literally. Luckily, you can make your goat a happy family member by creating a safe home for them, feeding them properly, grooming them, and keeping them healthy.",
  "A horse is a big time commitment. They can cost anywhere from $300 to $800 a month and they can live for 30 years or more. They are very much high maintenance pets and requre a lot money, outdoors space, and time! Horses hoofs need regular trimming. Soft surfaces such as pasture and stable bedding do not wear the hoof down at all therefore the hooves need to be trimmed about every three to four weeks (six weeks maximum). Still, horses are great companions and highly enjoyable, so make sure you're housing and feeding them properly and giving them the right care."
];

let descriptionImages = [
  "images/DesCat.png",
  "images/DesSmallDog.png",
  "images/DesLargeDog.png",
  "images/DesRabbit.png",
  "images/DesSmallBird.png",
  "images/DesLargeBird.png",
  "images/DesReptile.png",
  "images/DesFrog.png",
  "images/DesFish.png",
  "images/DesPig.png",
  "images/DesFerret.png",
  "images/DesGoat.png",
  "images/DesHorse.png"
]

let number = 0;

for (let h=0; h<13; h++){
  arrIds[h].addEventListener("click", function(){

    if (number > 0){
      animalName.removeChild(animalName.childNodes[0]);
      animalParagraph.removeChild(animalParagraph.childNodes[0]);
      animalParagraphRightImage.removeChild(animalParagraphRightImage.childNodes[0]);
    }
    
    animalParagraph.style.display = "inline-block";
    animalParagraphRightImage.style.display = "inline-block";

    let textnodeIds = document.createTextNode(arrIds[h])
    let textnodeTitle = document.createTextNode(arrTitle[h]);
    let textnodeDes = document.createTextNode(arrDescription[h]);
    let textnodeImage = document.createTextNode(descriptionImages[h]);

    animalParagraphRightImage.src = descriptionImages[h];


    arrIds[h].appendChild(textnodeIds);
    animalName.appendChild(textnodeTitle);
    animalParagraph.appendChild(textnodeDes);
    animalParagraphRightImage.appendChild(textnodeImage);

    animalName.scrollIntoView()
    number++

  })
} 
