let index_tl = document.getElementById("index_tl_id");
let index_tr = document.getElementById("index_tr_id");
let index_br = document.getElementById("index_br_id");
let index_bl = document.getElementById("index_bl_id");
//dark mode
function myFunction() {
  let element = document.body;
  element.classList.toggle("dark-mode");
}
//index menu
let indexButton = document.getElementById("hamburger");
let legal_index = document.getElementById("legal_index");
// indexButton.addEventListener('click', indexFunction);
legal_index.addEventListener("click", indexFunction);

function indexFunction() {
  console.log("hello");
  index_tl.classList.toggle("on");
  index_tr.classList.toggle("on");
  index_br.classList.toggle("on");
  index_bl.classList.toggle("on");
}
