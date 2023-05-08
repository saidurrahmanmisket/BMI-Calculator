function Calculate() {
  var weightInput = document.getElementById("weightInput").value;
  var heightInput = document.getElementById("heightInput").value;
  var calculateBtn = document.getElementById("calculateBtn");
  var result = document.getElementById("result");
  var BMIValue = document.getElementById("BMIValue");
  var body = document.getElementById("body");
  var img = document.getElementById("img");
  result.style.display = "block";

  var bmi = weightInput / (heightInput * heightInput);
  var bmi = bmi.toFixed(2);
  BMIValue.innerText = bmi;


  if (bmi == "NaN" ) {
    alert("Please enter number.");
  result.style.display = "none";
    
  } else if (bmi <= 18.5 ) {
    body.innerText = "Thin";
    img.setAttribute("src", "asset/thin.png");
  } else if (bmi >= 18.5 && bmi < 25) {
    body.innerText = "Fit";
    img.setAttribute("src", "asset/fit.png");
  } else if (bmi >= 25 ) {
    body.innerText = "Fat";
    img.setAttribute("src", "asset/fat.png");
  }
}
