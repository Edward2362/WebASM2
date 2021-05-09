id = setTimeout(loopMoving, 0);

var container = 1143;
var pos1 = 873;
var pos2 = 603;
var pos3 = 333;
var pos4 = 63;

function loopMoving() {
  var elem1 = document.getElementById("card1");
  var elem2 = document.getElementById("card2");
  var elem3 = document.getElementById("card3");
  var elem4 = document.getElementById("card4");

  id = setInterval(frame, 5);
  function frame() {
    if (true) {
      pos1++;
      pos2++;
      pos3++;
      pos4++;
      elem1.style.left = pos1 + "px";
      elem1.style.right = pos1 + "px";
      elem2.style.left = pos2 + "px";
      elem2.style.right = pos2 + "px";
      elem3.style.left = pos3 + "px";
      elem3.style.right = pos3 + "px";
      elem4.style.left = pos4 + "px";
      elem4.style.right = pos4 + "px";
    
      if (pos1 == container) {
        pos1 = 63;
        elem1.style.left = pos1 + "px";
      }
      if (pos2 == container) {
        pos2 = 63;
        elem2.style.left = pos2 + "px";
      }
      if (pos3 == container) {
        pos3 = 63;
        elem3.style.left = pos3 + "px";
      }
      if (pos4 == container) {
        pos4 = 63;
        elem4.style.left = pos4 + "px";
      }
   
    }
  }
}

idHover = setInterval(hoverAndMove, 0);
function hoverAndMove() {
  document.getElementById("card1").addEventListener("mouseover", hoveringImage);
  document.getElementById("card1").addEventListener("mouseout", imageMove);
  document.getElementById("card2").addEventListener("mouseover", hoveringImage);
  document.getElementById("card2").addEventListener("mouseout", imageMove);
  document.getElementById("card3").addEventListener("mouseover", hoveringImage);
  document.getElementById("card3").addEventListener("mouseout", imageMove);
  document.getElementById("card4").addEventListener("mouseover", hoveringImage);
  document.getElementById("card4").addEventListener("mouseout", imageMove);

 }
function hoveringImage() {
  clearTimeout(id);
  clearInterval(frame);

}
function imageMove() {
   
  id = setTimeout(loopMoving, 5);
  pos1++;
  pos2++;
  pos3++;
  pos4++;
  

}

