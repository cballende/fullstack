 
let btn = document.getElementsByClassName("btn");

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", myFunction);
  function myFunction(){
    //console.log(this.parentNode.parentNode);
    this.parentNode.parentNode.classList.toggle('gray');
  }
}