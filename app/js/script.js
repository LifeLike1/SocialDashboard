// input toggle
const toggle = document.querySelector("#switch");

// elements to change
const body = document.querySelector("body");
const dashboard = document.querySelector(".dashboard");
const dashboardTitle = document.querySelector(".dashboard__title");
const mainCards = document.querySelectorAll(".card");
const mainCardsTitle = document.querySelectorAll(".card__amount");
const overviewTitle = document.querySelector(".overview__title");
const overviewCards = document.querySelectorAll(".overview__card");
const overviewCardsCount = document.querySelectorAll(".overview__count");

toggle.addEventListener("change", function () {
  if (this.checked) {
    // checked = light theme
    body.classList.remove("dark");
    body.classList.add("light");
    dashboard.classList.remove("dashboard--dark");
    dashboard.classList.add("dashboard--light");
    dashboardTitle.classList.remove("dashboard__title--dark");
    dashboardTitle.classList.add("dashboard__title--light");
    overviewTitle.classList.remove("overview__title--dark");
    overviewTitle.classList.add("overview__title--light");
    mainCards.forEach((card) => {
      card.classList.remove("card--dark");
      card.classList.add("card--light");
    });
    mainCardsTitle.forEach((title) => {
      title.classList.remove("card__amount--dark");
      title.classList.add("card__amount--light");
    });
    overviewCards.forEach((card) => {
      card.classList.remove("overview__card--dark");
      card.classList.add("overview__card--light");
    });
    overviewCardsCount.forEach((card) => {
      card.classList.remove("overview__count--dark");
      card.classList.add("overview__count--light");
    });
  } else {
    // not checked = dark theme
    body.classList.remove("light");
    body.classList.add("dark");
    dashboard.classList.remove("dashboard--light");
    dashboard.classList.add("dashboard--dark");
    dashboardTitle.classList.remove("dashboard__title--light");
    dashboardTitle.classList.add("dashboard__title--dark");
    overviewTitle.classList.remove("overview__title--light");
    overviewTitle.classList.add("overview__title--dark");
    mainCards.forEach((card) => {
      card.classList.remove("card--light");
      card.classList.add("card--dark");
    });
    mainCardsTitle.forEach((title) => {
      title.classList.remove("card__amount--light");
      title.classList.add("card__amount--dark");
    });
    overviewCards.forEach((card) => {
      card.classList.remove("overview__card--light");
      card.classList.add("overview__card--dark");
    });
    overviewCardsCount.forEach((card) => {
      card.classList.remove("overview__count--light");
      card.classList.add("overview__count--dark");
    });
  }
});
