// user information array
const reviewInformation = [
  {
    user: "Ulrich Nemos",
    userImg: "./assets/img/user1.jpg",
    userTitle: "Journalist",
    userReview:
      "Absolutely loved this service! So easy to use and really affordable. Will definitely be using it again!",
  },
  {
    user: "Eric Granada",
    userImg: "./assets/img/user2.jpg",
    userTitle: "Graphic Designer",
    userReview:
      "The service was okay, but the support team was really helpful and responsive when I had an issue.",
  },
  {
    user: "Bella Yudov",
    userImg: "./assets/img/user3.jpg",
    userTitle: "Investor",
    userReview:
      "I had a great experience with this service. It was fast, efficient, and exactly what I was looking for.",
  },
  {
    user: "Irina Ignazz",
    userImg: "./assets/img/user4.jpg",
    userTitle: "Biologist",
    userReview:
      "Not impressed with this service. It was slow and clunky, and I had trouble getting it to work properly.",
  },
  {
    user: "Gunther Fernando",
    userImg: "./assets/img/user5.jpg",
    userTitle: "Engineer",
    userReview:
      "Overall, I was pretty satisfied with this service. It could have been a little more user-friendly, but it got the job done.",
  },
];

//User fields in HTML
const reviewImg = document.getElementById("user-img");
const reviewName = document.getElementById("review-name");
const reviewTitle = document.getElementById("review-title");
const reviewText = document.getElementById("review-text");

//Controls

const leftButton = document.getElementById("left");
const rightButton = document.getElementById("right");
const surpriseMeButton = document.getElementById("surprise");

// Array control variable

let i = 0;

function render() {
  reviewImg.src = reviewInformation[i].userImg;
  reviewName.textContent = reviewInformation[i].user;
  reviewTitle.textContent = reviewInformation[i].userTitle;
  reviewText.textContent = reviewInformation[i].userReview;
}

leftButton.addEventListener("click", () => {

  i <=0 ? i = reviewInformation.length -1 : i--;
  render();

});

rightButton.addEventListener("click", () => {

  i >= reviewInformation.length - 1 ?  i = 0 : i++;
  render();

});

surpriseMeButton.addEventListener('click', () =>{
  i = Math.floor(Math.random() * (reviewInformation.length ));
  render();
})


