function myFunction() {
var searchinput = document.getElementById("search");
result = searchinput.value.toUpperCase();
courseContent = document.getElementById("mycourses");
cards = courseContent.getElementsByClassName("coursecard");

for (i = 0; i < cards.length; i++) {
    cardtitle = cards[i].querySelector(".card-title");

    if (cardtitle.innerText.toUpperCase().indexOf(result) > -1) {
        cards[i].style.display = "";
      } else {
        cards[i].style.display = "none";
      }
    }
}
 


