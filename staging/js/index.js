console.log("index.js");
var indexChosen = 0;
function getIndex(index) {
  console.log("index is " + index);
  indexChosen = index;
  return index;
  //show login
  // window.location.href = "psw.html"; //jump to project page
}
function saveName(name) {
  console.log("Indexjs name is " + name);
  return name;
}
function savePsw(psw) {
  console.log("Indexjs psw is " + psw);
  return psw;
}
