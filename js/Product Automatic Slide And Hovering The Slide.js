id = setTimeout(loopMoving, 0);
var container = 1463;
var pos1 = 1113;
var pos2 = 763;
var pos3 = 413;
var pos4 = 63;
var containerStore = 1300;
var pos5 = 700;
var pos6 = 43;
function loopMoving() {
  var elem1 = document.getElementById("card1");
  var elem2 = document.getElementById("card2");
  var elem3 = document.getElementById("card3");
  var elem4 = document.getElementById("card4");
  var elem5 = document.getElementById("store-card-1");
  var elem6 = document.getElementById("store-card-2");
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
      pos5++;
      pos6++;
      elem5.style.left = pos5 + "px";
      elem5.style.right = pos5 + "px";
      elem6.style.left = pos6 + "px";
      elem6.style.right = pos6 + "px";
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
      if (pos5 == containerStore) {
        pos5 = 43;
        elem5.style.left = pos5 + "px";
      }
      if (pos6 == containerStore) {
        pos6 = 43;
        elem6.style.left = pos6 + "px";
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
 
        document.getElementById("store-card-1").addEventListener("mouseover",hoveringImage);
      document.getElementById("store-card-1").addEventListener("mouseout",imageMove);
      document.getElementById("store-card-2").addEventListener("mouseover",hoveringImage);
      document.getElementById("store-card-2").addEventListener("mouseout",imageMove);
}
function hoveringImage() {
  clearTimeout(id);
  clearInterval(frame);
  clearTimeout(idStore);
  clearInterval(idframeStore);
}
function imageMove() {
  id = setTimeout(loopMoving, 5);
  pos1++;
  pos2++;
  pos3++;
  pos4++;
  idStore = setTimeout(loopMovingStore, 5);
  pos5++;
  pos6++;
}

 
