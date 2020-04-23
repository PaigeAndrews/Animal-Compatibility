let Q1 = document.getElementById("Q1");
let Q2 = document.getElementById("Q2");
let nextQ2 = document.getElementById("next-Q2");
let nextQ3 = document.getElementById("next-Q3");
let nextQ4 = document.getElementById("next-Q4");
let back = document.getElementById("back");



nextQ2.addEventListener("click", function(){
    Q1.style.display = "none";
    Q2.style.visibility = "visible";
    back.addEventListener("click", function(){
        Q2.style.display = "none";
        Q1.style.visibility = "visible";
        console.log("back")
    });

  });

  nextQ3.addEventListener("click", function(){
    Q2.style.display = "none";
    Q3.style.visibility = "visible";
    back.addEventListener("click", function(){
        Q3.style.display = "none";
        Q2.style.visibility = "visible";
        console.log("back")
    });
  });

 