const container = document.querySelector(".prf-container");
var button =document.querySelector(".profile-img")
var imgcard=document.querySelector(".imgcard")
container.addEventListener("mouseenter", () => {
  button.style.filter = "blur(1px) grayscale(100%)";
  button.style.transform ='scale(1.2)';
  imgcard.style.display = "block";
});
container.addEventListener("mouseleave", () => {
  button.style.filter = "blur(0px) grayscale(0%)";
  button.style.transform ='scale(1)';
  imgcard.style.display = "none";
});
const prgcontainer=document.querySelector(".prgcontainer");
function viewmore1(){
  prgcontainer.style.display ="block";
}
const prjcontainer=document.querySelector(".prj-container");
function viewmore2(){
  prjcontainer.style.display ="block";
}