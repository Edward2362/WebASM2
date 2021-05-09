id1 = setTimeout(storeMove, 0);
var containerStore = 1000;
var pos5 = 530;
var pos6 = 43;

function storeMove(){
     var elem5 = document.getElementById("storecard1");
  var elem6 = document.getElementById("storecard2");
id2 = setInterval(frameStore, 5);


function frameStore(){
    if(true){
      pos5++;
      pos6++;
      elem5.style.left = pos5 + "px";
      elem5.style.right = pos5 + "px";
      elem6.style.left = pos6 + "px";
      elem6.style.right = pos6 + "px";
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
idHover1 = setInterval(hoverAndMoveStore, 0);
function hoverAndMoveStore(){
      document
    .getElementById("storecard1")
    .addEventListener("mouseover", hoveringImageStore);
  document
    .getElementById("storecard1")
    .addEventListener("mouseout", imageMoveStore);
  document
    .getElementById("storecard2")
    .addEventListener("mouseover", hoveringImageStore);
  document
    .getElementById("storecard2")
    .addEventListener("mouseout", imageMoveStore);
}

function hoveringImageStore(){
      clearTimeout(id1);
  clearInterval(id2);
}

function imageMoveStore(){
    id1 = setTimeout(storeMove, 5);
  pos5++;
  pos6++;
}

