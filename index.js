function loveCalculation() {
  var randomNumber = Math.floor(Math.random() * 100 + 1);
  var name = document.querySelectorAll("input")[0].value;
  var crushName = document.querySelectorAll("input")[1].value;
  if (name.length === 0 && crushName.length === 0) {
    alert("please enter your name and partner name");
  } else {
    if (randomNumber > 70) {
      document.querySelector(".show").style.transition = "1s";
      document.querySelector(".show").style.display = "block";
      document.querySelector(".show h1").textContent =
        name + " loves " + crushName + " like romeo and juliet";
      document.querySelector(".show h2").textContent =
        "Your love score is " + randomNumber;
    } else if (randomNumber > 40 && randomNumber < 70) {
      document.querySelector(".show").style.transition = "1s";
      document.querySelector(".show").style.display = "block";
      document.querySelector(".show h1").textContent =
        name + " loves " + crushName + " loves each other so much";
      document.querySelector(".show h2").textContent =
        "Your love score is " + randomNumber;
      document
        .querySelector(".show img")
        .setAttribute(
          "src",
          "https://media.giphy.com/media/i0smcxshSLNKDUImAo/giphy.gif"
        );
    } else {
      document.querySelector(".show").style.transition = "1s";
      document.querySelector(".show").style.display = "block";
      document.querySelector(".show h1").textContent =
        "Sorry you need to work out";
      document.querySelector(".show h2").textContent =
        "Your love score is " + randomNumber;
      document
        .querySelector(".show img")
        .setAttribute(
          "src",
          "https://media.giphy.com/media/fKc7PkqWFJpiHhPleU/giphy.gif"
        );
    }
    setTimeout(function () {
      document.querySelector(".love-button").classList.add("onclicked");
    }, 100);
    document.querySelector(".love-button").classList.remove("onclicked");
  }
}

function leapCalculator() {
  var year = document.querySelectorAll("input")[2].value;
  leap(year);
  leapButtonStyle();
}

function leapButtonStyle() {
  setTimeout(function () {
    document.querySelector(".leap-cal").classList.add("leap-style");
  }, 100);
  document.querySelector(".leap-cal").classList.remove("leap-style");
}

function leap(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        document.querySelector(".leap-display").textContent =
          "ITS A LEAP LEAR!";
      } else {
        document.querySelector(".leap-display").textContent =
          "NOT A LEAP LEAR!";
      }
    } else {
      document.querySelector(".leap-display").textContent = "ITS A LEAP LEAR!";
    }
  } else {
    document.querySelector(".leap-display").textContent = "NOT A LEAP LEAR!";
  }
}

function dice() {
  var r1 = Math.floor(Math.random() * 6 + 1);
  console.log(r1);
  var r2 = Math.floor(Math.random() * 6 + 1);
  console.log(r2);
  document
    .querySelectorAll(".dice-image")[0]
    .setAttribute("src", "dice" + r1 + ".png");
  document
    .querySelectorAll(".dice-image")[1]
    .setAttribute("src", "dice" + r2 + ".png");

  if (r1 > r2) {
    document.querySelector(".win-title").textContent = "🏆 Player 1 wins! 💪";
  } else if (r1 < r2) {
    document.querySelector(".win-title").textContent = "🏆 Player 2 wins! 💪";
  } else {
    document.querySelector(".win-title").textContent = "🚩 draw ";
  }
  setTimeout(function () {
    document.querySelector(".dice-button").classList.add("dice-style");
  }, 100);
  document.querySelector(".dice-button").classList.remove("dice-style");
}
